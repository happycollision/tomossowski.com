<script lang="ts">
  import { smartyPants } from "$utils/markdown"

  type PortfolioItem = {
    title: string
    media: string
    image: string
    displayStats: {
      theatre: string
      position: string
      mediaType?: string
    }
  }

  const MD_CONDUCTOR = "Music Director & Conductor"
  const DIR_AND_ART = "Director & Artistic Director"
  const ART = "Artistic Director"
  const DIR_MD = "Director & Music Director"

  const FSU = "Florida State University"
  const IWU = "Illinois Wesleyan University"
  const POST = "Post Playhouse"

  const portfolio: PortfolioItem[] = [
    {
      title: "Guys & Dolls",
      media: "guys-dolls.mp4",
      image: "guys-dolls.jpg",
      displayStats: {
        theatre: FSU,
        position: MD_CONDUCTOR,
      },
    },
    {
      title: "Guys & Dolls: Bushel and a Peck",
      media: "bushel-peck.mp3",
      image: "guys-dolls-title.png",
      displayStats: {
        mediaType: "(live audio recording)",
        theatre: FSU,
        position: MD_CONDUCTOR,
      },
    },
    {
      title: "Jesus Christ Superstar",
      media: "superstar.mp4",
      image: "superstar.jpg",
      displayStats: {
        theatre: FSU,
        position: MD_CONDUCTOR,
      },
    },
    {
      title: "All Shook Up",
      media: "/you-tube-embed/?id=Y7Nn56A3Dd8&start=248&title=All+Shook+Up",
      image: "all-shook-up.png",
      displayStats: {
        theatre: POST,
        position: DIR_AND_ART,
      },
    },
    {
      title: "Legally Blonde",
      media: "legally-blonde-fsu.mp4",
      image: "legally-blonde-fsu.jpg",
      displayStats: {
        theatre: FSU,
        position: "Music Director & Director",
      },
    },
    {
      title: "A Man of No Importance",
      media:
        "/you-tube-embed/?id=Y7Nn56A3Dd8&start=48&end=105&title=A+Man+of+No+Importance",
      image: "amoni-post.png",
      displayStats: {
        theatre: POST,
        position: DIR_AND_ART,
      },
    },
    {
      title: "Spring Awakening: Purple Summer",
      media: "spring-awakening-purple-summer.mp3",
      image: "spring-awakening.jpg",
      displayStats: {
        mediaType: "(live audio recording)",
        theatre: FSU,
        position: MD_CONDUCTOR,
      },
    },
    {
      title: "How to Succeed in Business: Overture",
      media: "how-to-succeed-overture.mp3",
      image: "how-to-succeed.jpg",
      displayStats: {
        mediaType: "(live audio recording)",
        theatre: FSU,
        position: MD_CONDUCTOR,
      },
    },
    {
      title: "Forever Plaid",
      media: "forever-plaid.mp4",
      image: "forever-plaid.jpg",
      displayStats: {
        theatre: POST,
        position: ART,
      },
    },
    {
      title: "Hank Williams: Lost Highway",
      media: "hank-williams.mp4",
      image: "hank-williams.jpg",
      displayStats: {
        theatre: POST,
        position: DIR_AND_ART,
      },
    },
    {
      title: "The Drowsy Chaperone",
      media: "drowsy-fsu.mp4",
      image: "drowsy-fsu.png",
      displayStats: {
        theatre: FSU,
        position: MD_CONDUCTOR,
      },
    },
    {
      title: "Rent: I’ll Cover You",
      media: "rent-ill-cover-you.mp3",
      image: "rent.jpg",
      displayStats: {
        mediaType: "(live audio recording)",
        theatre: FSU,
        position: MD_CONDUCTOR,
      },
    },
    {
      title: "Nunsense",
      media: "nunsense.mp4",
      image: "nunsense.jpg",
      displayStats: {
        theatre: POST,
        position: DIR_AND_ART,
      },
    },
    {
      title: "Pump Boys and Dinettes",
      media: "pump-boys.mp4",
      image: "pump-boys.jpg",
      displayStats: {
        theatre: POST,
        position: DIR_AND_ART,
      },
    },
    {
      title: "The 25th Annual Putnam County Spelling Bee",
      media: "bee.mp4",
      image: "bee.jpg",
      displayStats: {
        theatre: POST,
        position: DIR_AND_ART,
      },
    },
    {
      title: "Urinetown",
      media: "urinetown.mp4",
      image: "urinetown.jpg",
      displayStats: {
        theatre: IWU,
        position: DIR_MD,
      },
    },
  ]
</script>

<div class="text-center my-4">
  Click/tap each for a slideshow of production photos or live recording.
</div>
<div class="text-center text-sm my-4 opacity-75">
  Audio under photo slideshows is B'way cast.<br /> All other audio is from Tom's
  production.
</div>

<div
  class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4 items-start grid-flow-row auto-rows-max text-white"
>
  {#each portfolio as pItem}
    <a
      href="/media/{pItem.media}"
      class="mx-auto w-full max-w-72 rounded-lg overflow-hidden bg-blue-900 border-2 border-blue-900 group"
    >
      <div class="relative w-full rounded-lg overflow-hidden">
        <svg
          class="fill-current absolute bottom-2 left-2 w-1/4 opacity-40 group-hover:opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          ><path
            d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM7 6l8 4-8 4V6z"
          /></svg
        >
        <img
          class="object-cover h-52 w-full"
          alt={pItem.title}
          src="/images/portfolio/{pItem.image}"
        />
      </div>
      <div class="p-2 opacity-75">
        <div class="text-sm">{pItem.displayStats.theatre}</div>
        <h3 class="font-bold text-xl">
          {@html smartyPants(pItem.title)}
          {#if pItem.displayStats.mediaType}<div class="text-xs font-normal">
              {pItem.displayStats.mediaType}
            </div>{/if}
        </h3>
        <div class="text-right">{pItem.displayStats.position}</div>
      </div>
    </a>
  {/each}
</div>
