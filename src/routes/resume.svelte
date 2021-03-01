<script lang="ts">
  import { smartyPants } from "$utils/markdown"
  import { tapLog } from "$utils/tap"

  const ARTISTIC_DIRECTOR = "Artistic Director"
  const MUSIC_DIRECTOR = "Music Director"
  const DIRECTOR = "Director"
  const CO_DIRECTOR = "Co-Director"
  const CONDUCTOR = "Conductor"
  const PRODUCER = "Producer"
  const AST_DIR = "Asst. Director"
  const AST_TO_ART_DIR = "Asst. to Art. Dir"
  const AST_MD = "Asst. Music Director"
  const KEY_2 = "2nd Keyboards"

  const FSU = "Florida State University, Tallahassee, FL"
  const IWU = "Illinois Wesleyan University, Bloomington, IL"
  const CHINA =
    "The Central Academy of Drama, Beijing, China, 中國北京中央戲劇學院&nbsp;"
  const POST = "Post Playhouse, Fort Robinson, NE"
  const BIGFORK = "Bigfork Musical Theatre, Bigfork, MT"
  const SEASIDE = "Seaside Music Theater, Daytona Beach, FL"
  const ST_CROIX = "Island Center for the Performing Arts, St. Croix, USVI"
  const DIXIE = "The Dixie Theatre, Apalachicola, FL"

  const allCredits = [
    {
      year: 2017,
      title: "Lucky Stiff",
      company: CHINA,
      positions: [DIRECTOR],
    },
    {
      year: 2017,
      title: "Disney's Beauty and the Beast",
      company: FSU,
      positions: [DIRECTOR, MUSIC_DIRECTOR],
    },
    {
      year: 2016,
      title: "Disney's Beauty and the Beast",
      company: POST,
      positions: [ARTISTIC_DIRECTOR],
    },
    {
      year: 2016,
      title: "The Addams Family",
      company: POST,
      positions: [ARTISTIC_DIRECTOR],
    },
    {
      year: 2016,
      title: "Cabaret",
      company: POST,
      positions: [ARTISTIC_DIRECTOR],
    },
    {
      year: 2016,
      title: "Legally Blonde",
      company: POST,
      positions: [DIRECTOR],
    },
    {
      year: 2016,
      title: "Monty Python's Spamalot",
      company: POST,
      positions: [DIRECTOR],
    },
    {
      year: 2016,
      title: "Senior Showcase",
      company: CHINA,
      positions: [DIRECTOR, MUSIC_DIRECTOR],
    },
    {
      year: 2016,
      title: "The Family (Major Motion Picture Stage Production, China)",
      company: "(Fall Release — National)",
      positions: [DIRECTOR],
    },
    {
      year: 2016,
      title: "Legally Blonde",
      company: FSU,
      positions: [DIRECTOR],
    },
    {
      year: 2016,
      title: "All Shook Up",
      company: FSU,
      positions: [DIRECTOR, MUSIC_DIRECTOR, CONDUCTOR],
    },
    {
      year: 2015,
      title: "The Best Little Whorehouse in Texas",
      company: POST,
      positions: [CO_DIRECTOR, ARTISTIC_DIRECTOR],
    },
    {
      year: 2015,
      title: "Cinderella",
      company: POST,
      positions: [ARTISTIC_DIRECTOR],
    },
    {
      year: 2015,
      title:
        "The Family (a New Musical based on the novel <em>The Family</em> by Ba Jin)",
      company: CHINA,
      positions: [DIRECTOR, "Creative Team"],
    },
    {
      year: 2015,
      title: "Grease",
      company: POST,
      positions: [DIRECTOR, MUSIC_DIRECTOR],
    },
    {
      year: 2015,
      title: "All Shook Up",
      company: POST,
      positions: [DIRECTOR, MUSIC_DIRECTOR],
    },
    {
      year: 2015,
      title: "A Man of No Importance",
      company: POST,
      positions: [DIRECTOR],
    },
    {
      year: 2015,
      title: "Ragtime",
      company: FSU,
      positions: [MUSIC_DIRECTOR, CONDUCTOR],
    },
    {
      year: 2014,
      title: "My Way",
      company: POST,
      positions: [DIRECTOR, ARTISTIC_DIRECTOR],
    },
    {
      year: 2014,
      title: "Guys & Dolls",
      company: POST,
      positions: [DIRECTOR, ARTISTIC_DIRECTOR],
    },
    {
      year: 2014,
      title: "9 to 5",
      company: POST,
      positions: [DIRECTOR, ARTISTIC_DIRECTOR],
    },
    {
      year: 2014,
      title: "Sound of Music",
      company: POST,
      positions: [PRODUCER, ARTISTIC_DIRECTOR],
    },
    {
      year: 2014,
      title: "School House Rock, Live!",
      company: POST,
      positions: [PRODUCER, ARTISTIC_DIRECTOR],
    },
    {
      year: 2014,
      title: "Cabaret",
      company: FSU,
      positions: [DIRECTOR, MUSIC_DIRECTOR],
    },
    {
      year: 2013,
      title: "Always... Patsy Cline",
      company: POST,
      positions: [DIRECTOR, ARTISTIC_DIRECTOR],
    },
    {
      year: 2013,
      title: "The Drowsy Chaperone",
      company: POST,
      positions: [DIRECTOR, ARTISTIC_DIRECTOR],
    },
    {
      year: 2013,
      title: "Into The Woods",
      company: CHINA,
      positions: [DIRECTOR, MUSIC_DIRECTOR],
    },
    {
      year: 2013,
      title: "Spring Awakening",
      company: FSU,
      positions: [MUSIC_DIRECTOR, CONDUCTOR],
    },
    {
      year: 2012,
      title: "Oklahoma!",
      company: POST,
      positions: [DIRECTOR, ARTISTIC_DIRECTOR],
    },
    {
      year: 2012,
      title: "Broadway Gold: a Cabaret",
      company: POST,
      positions: [DIRECTOR, ARTISTIC_DIRECTOR],
    },
    {
      year: 2012,
      title: "Grease",
      company: POST,
      positions: [DIRECTOR, ARTISTIC_DIRECTOR],
    },
    {
      year: 2012,
      title: "Godspell",
      company: POST,
      positions: [PRODUCER],
    },
    {
      year: 2012,
      title: "A Year With Frog & Toad",
      company: POST,
      positions: [PRODUCER],
    },
    {
      year: 2012,
      title: "Full Monty",
      company: FSU,
      positions: [DIRECTOR],
    },
    {
      year: 2012,
      title: "How To Succeed In Business",
      company: FSU,
      positions: [DIRECTOR, MUSIC_DIRECTOR, CONDUCTOR],
    },
    {
      year: 2011,
      title: "Hank Williams: Lost Highway",
      company: POST,
      positions: [DIRECTOR, ARTISTIC_DIRECTOR],
    },
    {
      year: 2011,
      title: "The 25th Annual Putnam County Spelling Bee",
      company: POST,
      positions: [DIRECTOR, ARTISTIC_DIRECTOR],
    },
    {
      year: 2011,
      title: "Jesus Christ Superstar",
      company: FSU,
      positions: [MUSIC_DIRECTOR, CONDUCTOR],
    },
    {
      year: 2010,
      title: "Pump Boys and Dinettes",
      company: POST,
      positions: [DIRECTOR, ARTISTIC_DIRECTOR],
    },
    {
      year: 2010,
      title: "The Wizard of Oz",
      company: POST,
      positions: [DIRECTOR, ARTISTIC_DIRECTOR],
    },
    {
      year: 2010,
      title: "Nunsense",
      company: POST,
      positions: [DIRECTOR, ARTISTIC_DIRECTOR],
    },
    {
      year: 2010,
      title: "The Drowsy Chaperone",
      company: FSU,
      positions: [DIRECTOR],
    },
    {
      year: 2010,
      title: "The 25th Annual Putnam County Spelling Bee",
      company: POST,
      positions: [MUSIC_DIRECTOR],
    },
    {
      year: 2010,
      title: "The 25th Annual Putnam County Spelling Bee",
      company: FSU,
      positions: [MUSIC_DIRECTOR],
    },
    {
      year: 2009,
      title: "Frontier String Ensemble",
      company: POST,
      positions: [PRODUCER],
    },
    {
      year: 2009,
      title: "Bald Mountain Rounders",
      company: POST,
      positions: [PRODUCER],
    },
    {
      year: 2009,
      title: "Double D Wranglers",
      company: POST,
      positions: [PRODUCER],
    },
    {
      year: 2009,
      title: "Always… Patsy Cline",
      company: POST,
      positions: [DIRECTOR, ARTISTIC_DIRECTOR],
    },
    {
      year: 2009,
      title: "Hello, Dolly!",
      company: POST,
      positions: [DIRECTOR, ARTISTIC_DIRECTOR],
    },
    {
      year: 2009,
      title: "The Golden Age Cabaret",
      company: POST,
      positions: [PRODUCER],
    },
    {
      year: 2009,
      title: "Broadway Today: A Cabaret",
      company: POST,
      positions: [PRODUCER],
    },
    {
      year: 2009,
      title: "On The Town",
      company: FSU,
      positions: [DIRECTOR],
    },
    {
      year: 2009,
      title: "Hair",
      company: FSU,
      positions: [DIRECTOR, MUSIC_DIRECTOR],
    },
    {
      year: 2009,
      title: "Rent",
      company: FSU,
      positions: [MUSIC_DIRECTOR],
    },
    {
      year: 2009,
      title: "Annie Get Your Gun",
      company: POST,
      positions: [MUSIC_DIRECTOR],
    },
    {
      year: 2008,
      title: "Oklahoma!",
      company: POST,
      positions: [DIRECTOR, ARTISTIC_DIRECTOR],
    },
    {
      year: 2008,
      title: "South Pacific",
      company: POST,
      positions: [DIRECTOR, ARTISTIC_DIRECTOR],
    },
    {
      year: 2008,
      title: "Guys & Dolls",
      company: POST,
      positions: [DIRECTOR, ARTISTIC_DIRECTOR],
    },
    {
      year: 2008,
      title: "The Rocky Horror Show",
      company: FSU,
      positions: [DIRECTOR, MUSIC_DIRECTOR],
    },
    {
      year: 2008,
      title: "South Pacific",
      company: FSU,
      positions: [MUSIC_DIRECTOR, CONDUCTOR],
      extra: "Starring Davis Gaines, Amanda Watkins, Lynn McNutt",
    },
    {
      year: 2008,
      title: "Thoroughly Modern Millie",
      company: FSU,
      positions: [MUSIC_DIRECTOR, CONDUCTOR],
    },
    {
      year: 2007,
      title: "Lucky Stiff",
      company: POST,
      positions: [DIRECTOR, ARTISTIC_DIRECTOR],
    },
    {
      year: 2007,
      title: "The Best of Broadway",
      company: POST,
      positions: [DIRECTOR, ARTISTIC_DIRECTOR],
    },
    {
      year: 2007,
      title: "You’re a Good Man, Charlie Brown",
      company: POST,
      positions: [DIRECTOR, ARTISTIC_DIRECTOR],
    },
    {
      year: 2007,
      title: "Man of La Mancha",
      company: FSU,
      positions: [MUSIC_DIRECTOR, CONDUCTOR],
      extra:
        "Starring Davis Gaines, Susan Russell, Raymond Sage, Henry Polic II",
    },
    {
      year: 2007,
      title: "Into the Woods",
      company: FSU,
      positions: [MUSIC_DIRECTOR, CONDUCTOR],
    },
    {
      year: 2006,
      title: "Sweeney Todd",
      company: FSU,
      positions: [DIRECTOR, MUSIC_DIRECTOR],
    },
    {
      year: 2006,
      title: "The Fantasticks!",
      company: POST,
      positions: [DIRECTOR],
    },
    {
      year: 2006,
      title: "A Man of No Importance",
      company: IWU,
      positions: [DIRECTOR, MUSIC_DIRECTOR],
    },
    {
      year: 2006,
      title: "Urinetown",
      company: FSU,
      positions: [MUSIC_DIRECTOR, CONDUCTOR],
    },
    {
      year: 2005,
      title: "Urinetown",
      company: IWU,
      positions: [DIRECTOR, MUSIC_DIRECTOR],
    },
    {
      year: 2005,
      title: "Crazy For You",
      company: BIGFORK,
      positions: [DIRECTOR, MUSIC_DIRECTOR],
    },
    {
      year: 2005,
      title: "Chicago",
      company: IWU,
      positions: [DIRECTOR, MUSIC_DIRECTOR],
    },
    {
      year: 2005,
      title: "Chicago",
      company: BIGFORK,
      positions: [MUSIC_DIRECTOR],
    },
    {
      year: 2005,
      title: "Grease",
      company: BIGFORK,
      positions: [MUSIC_DIRECTOR],
    },
    {
      year: 2004,
      title: "The Rocky Horror Show",
      company: IWU,
      positions: [DIRECTOR, MUSIC_DIRECTOR],
    },
    {
      year: 2004,
      title: "Greater Tuna",
      company: POST,
      positions: [DIRECTOR],
    },
    {
      year: 2004,
      title: "A New Brain",
      company: IWU,
      positions: [DIRECTOR, MUSIC_DIRECTOR],
    },
    {
      year: 2003,
      title: "Rags",
      company: IWU,
      positions: [DIRECTOR, MUSIC_DIRECTOR],
    },
    {
      year: 2003,
      title: "Blood Brothers",
      company: IWU,
      positions: [MUSIC_DIRECTOR, CONDUCTOR],
    },
    {
      year: 2002,
      title: "42nd Street",
      company: IWU,
      positions: [DIRECTOR, MUSIC_DIRECTOR],
    },
    {
      year: 2002,
      title: "Lucky Stiff",
      company: IWU,
      positions: [DIRECTOR, MUSIC_DIRECTOR],
    },
    {
      year: 2001,
      title: "Little Shop of Horrors",
      company: IWU,
      positions: [DIRECTOR, "Music"],
    },
    {
      year: 2001,
      title: "Little Shop of Horrors",
      company: "Centennial Theatre Festival, Simsbury, CT",
      positions: [MUSIC_DIRECTOR],
    },
    {
      year: 2001,
      title: "Cabaret",
      company: IWU,
      positions: [MUSIC_DIRECTOR, CONDUCTOR],
    },
    {
      year: 2000,
      title: "The Marriage of Figaro",
      company: IWU,
      positions: [DIRECTOR],
    },
    {
      year: 2000,
      title: "Fiddler on the Roof",
      company: BIGFORK,
      positions: [MUSIC_DIRECTOR],
    },
    {
      year: 2000,
      title: "Paint Your Wagon",
      company: BIGFORK,
      positions: [MUSIC_DIRECTOR],
    },
    {
      year: 1999,
      title: "Twice Around the Park",
      company: DIXIE,
      positions: [DIRECTOR],
    },
    {
      year: 1999,
      title: "Oh, Coward",
      company: DIXIE,
      positions: [MUSIC_DIRECTOR],
    },
    {
      year: 1999,
      title: "Quilters",
      company: FSU,
      positions: [MUSIC_DIRECTOR, KEY_2],
    },
    {
      year: 1998,
      title: "The Barber of Seville",
      company: FSU,
      positions: [AST_DIR],
    },
    {
      year: 1998,
      title: "Fiddler on the Roof",
      company: SEASIDE,
      positions: [AST_TO_ART_DIR],
    },
    {
      year: 1998,
      title: "La Boheme",
      company: SEASIDE,
      positions: [AST_TO_ART_DIR],
    },
    {
      year: 1998,
      title: "Pippin",
      company: FSU,
      positions: [MUSIC_DIRECTOR, CONDUCTOR],
    },
    {
      year: 1998,
      title: "Children of Eden",
      company: SEASIDE,
      positions: [AST_MD, CONDUCTOR],
    },
    {
      year: 1997,
      title: "Hello, Dolly!",
      company: FSU,
      positions: [DIRECTOR],
    },
    {
      year: 1997,
      title: "The Boys Next Door",
      company: FSU,
      positions: [DIRECTOR],
    },
    {
      year: 1997,
      title: "Twelfth Night",
      company: FSU,
      positions: [MUSIC_DIRECTOR],
    },
    {
      year: 1996,
      title: "Brigadoon",
      company: FSU,
      positions: [MUSIC_DIRECTOR, CONDUCTOR],
    },
    {
      year: 1996,
      title: "Working",
      company: FSU,
      positions: [MUSIC_DIRECTOR, "Pianist"],
    },
    {
      year: 1995,
      title: "Good News",
      company: FSU,
      positions: ["Bassist", "Arranger"],
    },
    {
      year: 1994,
      title: "Guys & Dolls",
      company: ST_CROIX,
      positions: [DIRECTOR, MUSIC_DIRECTOR],
    },
    {
      year: 1993,
      title: "Grease",
      company: ST_CROIX,
      positions: [DIRECTOR, MUSIC_DIRECTOR],
    },
    {
      year: 1992,
      title: "Oklahoma!",
      company: ST_CROIX,
      positions: [MUSIC_DIRECTOR, CONDUCTOR],
    },
    {
      year: 1986,
      title: "Guys & Dolls",
      company: "Zug Theatre, Zug, Switzerland",
      positions: [MUSIC_DIRECTOR],
    },
  ].sort((a, b) => b.year - a.year)

  let chosen = "all" as "all" | "dir" | "md" | "art"
  let credits = allCredits
  $: {
    switch (chosen) {
      case "all":
        credits = allCredits
        break
      case "art":
        credits = allCredits.filter((x) =>
          x.positions.includes(ARTISTIC_DIRECTOR),
        )
        break
      case "md":
        credits = allCredits.filter((x) => x.positions.includes(MUSIC_DIRECTOR))
        break
      case "dir":
        credits = allCredits.filter((x) => x.positions.includes(DIRECTOR))
        break
    }
  }

  function setChosen(event: Event) {
    chosen = (event.currentTarget as any).value
  }
</script>

<div class="text-center m-4">
  <div class="inline-flex flex-wrap rounded-lg sm:border-blue-600 sm:border-2">
    <button
      class="min-w-20 py-1 px-3 m-1 border-2 border-blue-600 rounded-lg sm:m-auto sm:border-none sm:rounded-none"
      on:click={setChosen}
      value="all"
      class:active={"all" === chosen}>All</button
    >
    <button
      class="min-w-20 py-1 px-3 m-1 border-2 border-blue-600 rounded-lg sm:m-auto sm:border-none sm:rounded-none"
      on:click={setChosen}
      value="art"
      class:active={"art" === chosen}>Artistic Director</button
    >
    <button
      class="min-w-20 py-1 px-3 m-1 border-2 border-blue-600 rounded-lg sm:m-auto sm:border-none sm:rounded-none"
      on:click={setChosen}
      value="md"
      class:active={"md" === chosen}>Music Director</button
    >
    <button
      class="min-w-20 py-1 px-3 m-1 border-2 border-blue-600 rounded-lg sm:m-auto sm:border-none sm:rounded-none"
      on:click={setChosen}
      value="dir"
      class:active={"dir" === chosen}>Director</button
    >
  </div>
</div>

<div class="flex flex-wrap md:leading-tight">
  {#each credits as production}
    <div class="my-4 sm:w-1/2 md:my-1 md:w-full md:flex md:space-x-2">
      <div class="md:w-4/12">{@html smartyPants(production.title)}</div>
      <div class="md:w-3/12">{production.positions.join(", ")}</div>
      <div class="inline-block md:w-4/12">{@html production.company}</div>
      <div class="inline-block md:w-1/12 year">{production.year}</div>
    </div>
  {/each}
</div>

<style>
  .year::before {
    content: "(";
  }
  .year::after {
    content: ")";
  }

  .active {
    @apply bg-blue-600 text-white;
  }
</style>
