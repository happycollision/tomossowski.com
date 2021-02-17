<script lang="ts">
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
  const portfolio: PortfolioItem[] = [
    {
      title: "Guys & Dolls",
      media: "guys-dolls.mp4",
      image: "guys-dolls.jpg",
      displayStats: {
        theatre: "Florida State University",
        position: "MD and Conductor",
      },
    },
    {
      title: "Guys & Dolls: Bushel and a Peck",
      media: "bushel-peck.mp3",
      image: "guys-dolls-title.png",
      displayStats: {
        mediaType: "(live audio recording)",
        theatre: "Florida State University",
        position: "MD and Conductor",
      },
    },
    {
      title: "Jesus Christ Superstar",
      media: "superstar.mp4",
      image: "superstar.jpg",
      displayStats: {
        theatre: "Florida State University",
        position: "MD and Conductor",
      },
    },
    {
      title: "All Shook Up",
      media: "/you-tube-embed/?id=Y7Nn56A3Dd8&start=248&title=All+Shook+Up",
      image: "all-shook-up.png",
      displayStats: {
        theatre: "Post Playhouse",
        position: "Director & Artistic Director",
      },
    },
    {
      title: "Legally Blonde",
      media: "legally-blonde-fsu.mp4",
      image: "legally-blonde-fsu.jpg",
      displayStats: {
        theatre: "Florida State University",
        position: "Music Director & Director",
      },
    },
    {
      title: "A Man of No Importance",
      media:
        "/you-tube-embed/?id=Y7Nn56A3Dd8&start=48&end=105&title=A+Man+of+No+Importance",
      image: "amoni-post.png",
      displayStats: {
        theatre: "Post Playhouse",
        position: "Director & Artistic Director",
      },
    },
    {
      title: "Spring Awakening: Purple Summer",
      media: "spring-awakening-purple-summer.mp3",
      image: "spring-awakening.jpg",
      displayStats: {
        mediaType: "(live audio recording)",
        theatre: "Florida State University",
        position: "MD and Conductor",
      },
    },
    {
      title: "How to Succeed in Business: Overture",
      media: "how-to-succeed-overture.mp3",
      image: "how-to-succeed.jpg",
      displayStats: {
        mediaType: "(live audio recording)",
        theatre: "Florida State University",
        position: "MD and Conductor",
      },
    },
    {
      title: "Forever Plaid",
      media: "forever-plaid.mp4",
      image: "forever-plaid.jpg",
      displayStats: {
        theatre: "Post Playhouse",
        position: "Artistic Director",
      },
    },
    {
      title: "Hank Williams: Lost Highway",
      media: "hank-williams.mp4",
      image: "hank-williams.jpg",
      displayStats: {
        theatre: "Post Playhouse",
        position: "Director & Artistic Director",
      },
    },
    {
      title: "The Drowsy Chaperone",
      media: "drowsy-fsu.mp4",
      image: "drowsy-fsu.png",
      displayStats: {
        theatre: "Florida State University",
        position: "MD and Conductor",
      },
    },
    {
      title: "Rent: I’ll Cover You",
      media: "rent-ill-cover-you.mp3",
      image: "rent.jpg",
      displayStats: {
        mediaType: "(live audio recording)",
        theatre: "Florida State University",
        position: "MD and Conductor",
      },
    },
    {
      title: "Nunsense",
      media: "nunsense.mp4",
      image: "nunsense.jpg",
      displayStats: {
        theatre: "Post Playhouse",
        position: "Director & Artistic Director",
      },
    },
    {
      title: "Pump Boys and Dinettes",
      media: "pump-boys.mp4",
      image: "pump-boys.jpg",
      displayStats: {
        theatre: "Post Playhouse",
        position: "Director & Artistic Director",
      },
    },
    {
      title: "The 25th Annual Putnam County Spelling Bee",
      media: "bee.mp4",
      image: "bee.jpg",
      displayStats: {
        theatre: "Post Playhouse",
        position: "Director & Artistic Director",
      },
    },
    {
      title: "Urinetown",
      media: "urinetown.mp4",
      image: "urinetown.jpg",
      displayStats: {
        theatre: "Illinois Wesleyan University",
        position: "Director & Music Director",
      },
    },
  ]
</script>
