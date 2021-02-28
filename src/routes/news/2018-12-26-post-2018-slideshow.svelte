<script lang="ts" context="module">
  export const title = "Post Playhouse 2018"
</script>

<script lang="ts">
  import Carousel from "$components/Carousel.svelte"
  import Img from "$components/Img.svelte"
  import { shuffle } from "$utils/array"

  const folder = "/images/post2018"
  const slides = shuffle(
    [
      { image: "Footloose/Fotloose1.jpg" },
      { image: "Footloose/IMG_6510.JPG" },
      { image: "Footloose/IMG_6328.JPG" },
      { image: "Footloose/IMG_9543.JPG" },
      { image: "Footloose/IMG_8106.JPG" },
      { image: "Footloose/IMG_7966.JPG" },
      { image: "Footloose/IMG_7393.JPG" },
      { image: "Footloose/FootlooseGas2.jpg" },
      { image: "Footloose/FootlooseBike.jpg" },
      { image: "Footloose/IMG_7540.JPG" },
      { image: "Footloose/IMG_7964.JPG" },
      { image: "Footloose/FootlooseChicago.JPG" },
      { image: "Footloose/IMG_8198.JPG" },
      { image: "Footloose/IMG_6610.JPG" },
      { image: "Footloose/IMG_6214.JPG" },
      { image: "Footloose/IMG_7447.JPG" },
      { image: "Footloose/IMG_8370.JPG" },
      { image: "Footloose/IMG_0089.JPG" },
      { image: "Footloose/IMG_8372.JPG" },
      { image: "Footloose/IMG_8038.JPG" },
      { image: "Footloose/IMG_0100.JPG" },
      { image: "Footloose/IMG_9327.JPG" },
      { image: "Footloose/IMG_8373.JPG" },
      { image: "Footloose/IMG_6213.JPG" },
      { image: "Footloose/IMG_9493.JPG" },
      { image: "Footloose/IMG_0299.JPG" },
      { image: "Footloose/IMG_9517.JPG" },
      { image: "Footloose/IMG_0082.JPG" },
      { image: "Footloose/IMG_9501.JPG" },
      { image: "Footloose/IMG_8794.JPG" },
      { image: "Footloose/IMG_6592.JPG" },
      { image: "Footloose/IMG_8395.JPG" },
      { image: "Footloose/IMG_7529.JPG" },
      { image: "Footloose/IMG_7528.JPG" },
      { image: "Footloose/FootlooseBridge.jpg" },
      { image: "Footloose/IMG_8394.JPG" },
      { image: "Footloose/IMG_6580.JPG" },
      { image: "Footloose/IMG_9512.JPG" },
      { image: "Footloose/IMG_8397.JPG" },
      { image: "Footloose/IMG_9603.JPG" },
      { image: "Footloose/IMG_0023.JPG" },
      { image: "Footloose/IMG_6318.JPG" },
      { image: "Footloose/IMG_8336.JPG" },
      { image: "Footloose/IMG_7818.JPG" },
      { image: "Footloose/IMG_6535.JPG" },
      { image: "Footloose/Footloose2.jpg" },
      { image: "Footloose/IMG_6326.JPG" },
      { image: "42nd/Dames.jpg" },
      { image: "42nd/Broadway.jpg" },
      { image: "42nd/Train.jpg" },
      { image: "42nd/Off.jpg" },
      { image: "42nd/IMG_0429.JPG" },
      { image: "42nd/IMG_9140.JPG" },
      { image: "42nd/IMG_9913.JPG" },
      { image: "42nd/IMG_0909.JPG" },
      { image: "42nd/IMG_8400.JPG" },
      { image: "42nd/IMG_0504.JPG" },
      { image: "42nd/IMG_9859.JPG" },
      { image: "42nd/IMG_8599.JPG" },
      { image: "42nd/IMG_1580.jpg" },
      { image: "42nd/IMG_0651.JPG" },
      { image: "42nd/Opening.jpg" },
      { image: "42nd/Dames2.jpg" },
      { image: "42nd/Mr Marsh.jpg" },
      { image: "42nd/Dorothy2.jpg" },
      { image: "42nd/IMG_0657.JPG" },
      { image: "42nd/Hired.jpg" },
      { image: "42nd/IMG_0683.JPG" },
      { image: "42nd/Dorothy.jpg" },
      { image: "42nd/IMG_1673.jpg" },
      { image: "42nd/IMG_8938.JPG" },
      { image: "42nd/IMG_0966.JPG" },
      { image: "42nd/IMG_9981.JPG" },
      { image: "42nd/IMG_0144.JPG" },
      { image: "42nd/IMG_1515.jpg" },
      { image: "Urinetown/FinaleI.jpg" },
      { image: "Urinetown/End.jpg" },
      { image: "Urinetown/BobbyHope.jpg" },
      { image: "Urinetown/Hideout.jpg" },
      { image: "Urinetown/Bobby.jpg" },
      { image: "Urinetown/TaylorChuckie.jpg" },
      { image: "Urinetown/Catherine.jpg" },
      { image: "Urinetown/Sky.jpg" },
      { image: "Urinetown/video.jpg" },
      { image: "Urinetown/Finale.jpg" },
      { image: "Urinetown/Cladwell.jpg" },
      { image: "Urinetown/Pee.jpg" },
      { image: "Urinetown/Lockstock.jpg" },
      { image: "Mermaid/IMG_3293.JPG" },
      { image: "Mermaid/IMG_2600.JPG" },
      { image: "Mermaid/IMG_3321.JPG" },
      { image: "Mermaid/IMG_3453.JPG" },
      { image: "Mermaid/IMG_2663.JPG" },
      { image: "Mermaid/IMG_6212.JPG" },
      { image: "Mermaid/IMG_2482.JPG" },
      { image: "Mermaid/IMG_2972.JPG" },
      { image: "Mermaid/IMG_2998.JPG" },
      { image: "Mermaid/IMG_2433.JPG" },
      { image: "Mermaid/IMG_3088.JPG" },
      { image: "Mermaid/IMG_2155.JPG" },
      { image: "Chitty/IMG_2401.JPG" },
      { image: "Chitty/IMG_1068.JPG" },
      { image: "Chitty/IMG_3333.JPG" },
      { image: "Chitty/IMG_2402.JPG" },
      { image: "Chitty/IMG_0823.JPG" },
      { image: "Chitty/IMG_1095.JPG" },
      { image: "Chitty/IMG_2417.JPG" },
      { image: "Chitty/IMG_2388.JPG" },
      { image: "Chitty/IMG_1963.JPG" },
      { image: "Chitty/IMG_2663.JPG" },
      { image: "Chitty/IMG_1034.JPG" },
      { image: "Chitty/IMG_3369.JPG" },
      { image: "Chitty/IMG_2705.JPG" },
      { image: "Chitty/IMG_3744.JPG" },
      { image: "Chitty/IMG_2508.JPG" },
      { image: "Chitty/IMG_3366.JPG" },
      { image: "Chitty/IMG_1399.JPG" },
      { image: "Chitty/IMG_3411.JPG" },
      { image: "Chitty/IMG_3558.JPG" },
      { image: "Chitty/IMG_3361.JPG" },
      { image: "Chitty/IMG_3822.JPG" },
      { image: "Chitty/IMG_0800.JPG" },
      { image: "Chitty/IMG_0626.JPG" },
      { image: "Chitty/IMG_4087.JPG" },
      { image: "Chitty/IMG_0630.JPG" },
      { image: "Chitty/IMG_2387.JPG" },
      { image: "Chitty/IMG_2393.JPG" },
      { image: "Chitty/IMG_0999.JPG" },
      { image: "Chitty/IMG_0609.JPG" },
      { image: "Chitty/IMG_2579.JPG" },
      { image: "Chitty/IMG_2381.JPG" },
    ].map((x) => ({ image: `${folder}/${x.image}` })),
  )

  let loadedIndicies = [slides.length - 1, 0, 1, 2]

  function updateLoaded(
    evt: SvelteEvent<
      Event & { detail: { currentSlide: number } },
      HTMLDivElement
    >,
  ) {
    const currentSlide = evt.detail.currentSlide
    const left = (slides.length + currentSlide - 1) % slides.length
    const right = (currentSlide + 1) % slides.length
    const right2 = (currentSlide + 2) % slides.length

    if (!loadedIndicies.includes(left))
      loadedIndicies = [...loadedIndicies, left]
    if (!loadedIndicies.includes(right))
      loadedIndicies = [...loadedIndicies, right]
    if (!loadedIndicies.includes(right2))
      loadedIndicies = [...loadedIndicies, right2]
  }
</script>

<p class="my-4 max-w-lg mx-auto">
  Under Producing Artistic Direction from Tom Ossowski, Post Playhouse had a
  phenominal 2018 Summer Season.
</p>

<Carousel perPage={{ 1100: 2 }} dots={false} on:change={updateLoaded}>
  {#each slides as slide, i}
    <div class="flex items-center h-80 justify-center">
      {#if loadedIndicies.includes(i)}
        <Img
          class="max-w-full max-h-full"
          src={slide.image}
          alt="scene from a 2018 production"
        />
      {/if}
    </div>
  {/each}
</Carousel>
