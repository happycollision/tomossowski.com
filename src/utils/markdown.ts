type Classes = Record<string, string>

export function markdown(str: string, classes: Classes = {}) {
  const injectClass = getClass.bind(null, classes)
  return smartyPants(str)
    .replace(...singleReturn(injectClass))
    .replace(...bold(injectClass))
    .replace(...italic(injectClass))
    .replace(...paragraph(injectClass))
}

export function smartyPants(str: string): string {
  return str
    .replace(...amp)
    .replace(...emDash)
    .replace(...apos)
    .replace(...openQuote)
    .replace(...closeQuote)
}

function getClass(classes: Classes, kind: string) {
  return classes[kind] ? ` class="${classes[kind]}"` : ""
}

type ReplaceArgs = Parameters<string["replace"]>

type Replacer = (injectClass: (tag: string) => string) => ReplaceArgs

const singleReturn: Replacer = () => [/  \n/g, () => "<br>"]

const paragraph: Replacer = (injectClass) => [
  /**
   * (?:^|\n)
   *   Start of source or start of line
   * (?:\n\n|\n$|$)
   *   Start of new para or end of source (and possible extra \n)
   */
  /(?:^|\n)(.*)(?:\n\n|\n$|$)/g,
  (_, para) => `<p${injectClass("p")}>${para}</p>`,
]

/**
 * Note that you will have the same number of capture groups as variations. See
 * usage in creating the bold replacer below and note that you have to fall back
 * on captures until you find the one that was caught
 * @param start opening string
 * @param end ending string, defaults to opening
 */
function makeFindWrapper(start: string[], end: string[] = start) {
  const exps = start
    .map((open, i) => `${open}([^${end[i]}]*)${end[i]}`)
    .join("|")
  return new RegExp(`(?:${exps})`, "g")
}

// NOTE: these are quite naive
const bold: Replacer = (injectClass) => [
  makeFindWrapper(["__", "\\*\\*"]),
  (_, str1, str2) => `<strong${injectClass("strong")}>${str1 || str2}</strong>`,
]

const italic: Replacer = (injectClass) => [
  makeFindWrapper(["_", "\\*"]),
  (_, str1, str2) => `<em${injectClass("em")}>${str1 || str2}</em>`,
]

// Naive ampersand replace
const amp: ReplaceArgs = [/&/g, () => `&amp;`]

const emDash: ReplaceArgs = [
  /([^-])---([^-])/g,
  (_, before, after) => `${before}&mdash;${after}`,
]

const apos: ReplaceArgs = [/'/g, () => "&rsquo;"]
const openQuote: ReplaceArgs = [/(\s)"/g, (_, space) => `${space}&ldquo;`]
const closeQuote: ReplaceArgs = [/"/g, (_, space) => `${space}&rdquo;`]
