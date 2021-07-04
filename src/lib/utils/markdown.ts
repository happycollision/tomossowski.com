type Classes = Record<string, string>

export function markdown(str: string, classes: Classes = {}) {
  const injectClass = getClass.bind(null, classes)
  return smartyPants(str)
    .replace(...singleReturn(injectClass))
    .replace(...paragraph(injectClass))
    .replace(...collapsibleReturn(injectClass))
    .replace(...bold(injectClass))
    .replace(...italic(injectClass))
    .replace(...link(injectClass))
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

// eslint-disable-next-line no-regex-spaces
const singleReturn: Replacer = () => [/  \n/g, () => "<br>"]
const collapsibleReturn: Replacer = () => [
  /\n([^\n])/g,
  (_, char) => " " + char,
]

const paragraph: Replacer = (injectClass) => [
  /**
   * (?:^\n?|\n\n)
   *   Start of source or start of line after two returns
   * (?=\n\n|\n$|$)
   *   Lookahead end of para or end of source
   *
   * The lookahead above prevents consumeing characters, which then makes it
   * possible to immediately count the two line breaks as the start of the next
   * paragraph.
   */
  /(?:^\n?|\n\n)(.*?)(?=\n\n|\n?$)/g,
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

const link: Replacer = (injectClass) => [
  /\[(.*?)\]\((.*?)\)/g,
  (_, linkText, linkHref) =>
    `<a${injectClass("a")} href="${linkHref}">${linkText}</a>`,
]

// Naive ampersand replace
const amp: ReplaceArgs = [
  /&([^;\s]{2,8};)?/g,
  (fullMatch, maybeCarCode) => (maybeCarCode ? fullMatch : `&amp;`),
]

const emDash: ReplaceArgs = [
  /([^-])---([^-])/g,
  (_, before, after) => `${before}&mdash;${after}`,
]

const apos: ReplaceArgs = [/'/g, () => "&rsquo;"]
const openQuote: ReplaceArgs = [/(\s)"/g, (_, space) => `${space}&ldquo;`]
const closeQuote: ReplaceArgs = [/"/g, (_, space) => `${space}&rdquo;`]
