<script lang="ts">
  import AudioItem from "$components/portfolio/AudioItem.svelte"
  import VideoItem from "$components/portfolio/VideoItem.svelte"
  import YouTubeItem from "$components/portfolio/YouTubeItem.svelte"
  import { smartyPants } from "$utils/markdown"

  type YtItem = {
    type: "youtube"
    media: { id: string; start?: number; end?: number }
  }

  type LocalItem = {
    type: "audio" | "video"
    media: string
  }

  type PortfolioItem = {
    title: string
    image: string
    displayStats: {
      theatre: string
      position: string
      mediaType?: string
    }
  } & (LocalItem | YtItem)

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
      type: "video",
      media: "guys-dolls.mp4",
      image: "guys-dolls.jpg",
      displayStats: {
        theatre: FSU,
        position: MD_CONDUCTOR,
      },
    },
    {
      title: "Guys & Dolls: Bushel and a Peck",
      type: "audio",
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
      type: "video",
      media: "superstar.mp4",
      image: "superstar.jpg",
      displayStats: {
        theatre: FSU,
        position: MD_CONDUCTOR,
      },
    },
    {
      title: "All Shook Up",
      media: {
        id: "Y7Nn56A3Dd8",
        start: 249,
      },
      type: "youtube",
      image: "all-shook-up.png",
      displayStats: {
        theatre: POST,
        position: DIR_AND_ART,
      },
    },
    {
      title: "Legally Blonde",
      type: "video",
      media: "legally-blonde-fsu.mp4",
      image: "legally-blonde-fsu.jpg",
      displayStats: {
        theatre: FSU,
        position: "Music Director & Director",
      },
    },
    {
      title: "A Man of No Importance",
      media: { id: "Y7Nn56A3Dd8", start: 48, end: 105 },
      type: "youtube",
      image: "amoni-post.png",
      displayStats: {
        theatre: POST,
        position: DIR_AND_ART,
      },
    },
    {
      title: "Spring Awakening: Purple Summer",
      type: "audio",
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
      type: "audio",
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
      type: "video",
      media: "forever-plaid.mp4",
      image: "forever-plaid.jpg",
      displayStats: {
        theatre: POST,
        position: ART,
      },
    },
    {
      title: "Hank Williams: Lost Highway",
      type: "video",
      media: "hank-williams.mp4",
      image: "hank-williams.jpg",
      displayStats: {
        theatre: POST,
        position: DIR_AND_ART,
      },
    },
    {
      title: "The Drowsy Chaperone",
      type: "video",
      media: "drowsy-fsu.mp4",
      image: "drowsy-fsu.png",
      displayStats: {
        theatre: FSU,
        position: MD_CONDUCTOR,
      },
    },
    {
      title: "Rent: I’ll Cover You",
      type: "audio",
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
      type: "video",
      media: "nunsense.mp4",
      image: "nunsense.jpg",
      displayStats: {
        theatre: POST,
        position: DIR_AND_ART,
      },
    },
    {
      title: "Pump Boys and Dinettes",
      type: "video",
      media: "pump-boys.mp4",
      image: "pump-boys.jpg",
      displayStats: {
        theatre: POST,
        position: DIR_AND_ART,
      },
    },
    {
      title: "The 25th Annual Putnam County Spelling Bee",
      type: "video",
      media: "bee.mp4",
      image: "bee.jpg",
      displayStats: {
        theatre: POST,
        position: DIR_AND_ART,
      },
    },
    {
      title: "Urinetown",
      type: "video",
      media: "urinetown.mp4",
      image: "urinetown.jpg",
      displayStats: {
        theatre: IWU,
        position: DIR_MD,
      },
    },
  ]

  let chosenItem: PortfolioItem = undefined

  function handleMedia(item: PortfolioItem) {
    chosenItem = chosenItem === item ? undefined : item
  }
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
    <button
      on:click={() => handleMedia(pItem)}
      class="mx-auto text-left w-full max-w-72 rounded-lg overflow-hidden border-4 bg-blue-500 border-blue-500 dark:bg-blue-900 dark:border-blue-900 group"
    >
      {#if pItem.type === "youtube"}
        <YouTubeItem
          id={pItem.media.id}
          start={pItem.media.start}
          end={pItem.media.end}
          poster="/images/portfolio/{pItem.image}"
          alt={pItem.title}
          unload={pItem !== chosenItem}
          autoplay
          controls
          class="w-full h-52 border-none"
        />
      {:else if pItem.type === "audio"}
        <AudioItem
          src={`/media/${pItem.media}`}
          poster="/images/portfolio/{pItem.image}"
          alt={pItem.title}
          unload={pItem !== chosenItem}
          controls
          autoplay
          class="w-full h-52 border-none"
        />
      {:else if pItem.type === "video"}
        <VideoItem
          src={`/media/${pItem.media}`}
          poster="/images/portfolio/{pItem.image}"
          alt={pItem.title}
          unload={pItem !== chosenItem}
          autoplay
          controls
          preload="none"
          class="w-full h-52 border-none"
        />
      {/if}

      <div class="p-1 dark:opacity-75">
        <div class="text-sm">{pItem.displayStats.theatre}</div>
        <h3 class="font-bold text-xl">
          {@html smartyPants(pItem.title)}
          {#if pItem.displayStats.mediaType}<div class="text-xs font-normal">
              {pItem.displayStats.mediaType}
            </div>{/if}
        </h3>
        <div class="text-right">{pItem.displayStats.position}</div>
      </div>
    </button>
  {/each}
</div>
