<script lang="ts" context="module">
  import Markdown from "$components/Markdown.svelte"
  import Modal from "$components/Modal/Modal.svelte"

  export const title = "Orchestrations and Arranging with MainStage"
</script>

<script lang="ts">
  let showModal = false
  const toggleModal = () => (showModal = !showModal)
</script>

<Markdown
  source={`
Live Recording
*How To Succeed in Business Without Really Trying*
Florida State University Fall 2012
Tom Ossowski Conducting
`}
/>

<div>
  Overture<br />
  <!-- svelte-ignore a11y-media-has-caption -->
  <audio src="/media/how-to-succeed-overture.mp3" controls preload="metadata" />
</div>

<div>
  Coffee Break<br />
  <!-- svelte-ignore a11y-media-has-caption -->
  <audio
    src="/media/how-to-succeed-coffee-break.mp3"
    controls
    preload="metadata"
  />
</div>

<button
  on:click={toggleModal}
  class="bg-blue-500 rounded-lg py-2 px-3 my-2 hover:bg-blue-600 text-white dark:bg-blue-900 dark:hover:bg-blue-800  dark:text-opacity-75"
  >View Instrumentation</button
>

{#if showModal}
  <Modal on:close={toggleModal}>
    <h4 class="my-4 text-lg">Live Musicians</h4>

    <ul class="pl-4">
      <li>Reed 1 (Flute, Piccolo)</li>
      <li>Reed 2 (Oboe, Clarinet, Alto Sax)</li>
      <li>Reed 3 (Flute, Clarinet, Tenor Sax)</li>
      <li>Reed 4 (Flute, Clarinet, Bass Clarinet, Bari Sax)</li>
      <li>Trumpet 1</li>
      <li>Trumpet 2</li>
      <li>Trombone 1</li>
      <li>Trombone 2</li>
      <li>Horn</li>
      <li>Bass</li>
      <li>Guitar</li>
      <li>Percussion</li>
    </ul>

    <h4 class="my-4 text-lg">Main Stage by Logic Keyboards</h4>

    <ul class="pl-4">
      <li>Keyboard I --- 183 Qs</li>
      <li>Accordion: Polka</li>
      <li>Celesta</li>
      <li>Glockenspiel</li>
      <li>Marimba: Jazz</li>
      <li>Marimba: Wide</li>
      <li>Marimba: Wood</li>
      <li>Organ: Preachy Hammond</li>
      <li>Organ: Gospel</li>
      <li>Organ: Full Cathedral</li>
      <li>Piano: Yamaha</li>
      <li>Piano: Steinway Piano Hall</li>
      <li>Strings: Pop Smooth</li>
      <li>Strings: Ensemble Pizzicato</li>
      <li>Strings: Warm Section</li>
      <li>String Ensemble Tremolo</li>
      <li>Vibraphone: Latin</li>
      <li>Xylophone</li>
      <li>Synth 2</li>
      <li>Keyboard II --- 233 Qs</li>
      <li>Bells: Tubular</li>
      <li>Chimes</li>
      <li>Glockenspiel</li>
      <li>Harp</li>
      <li>Timpani</li>
      <li>Vibraphone: Latin</li>
      <li>Xylophone</li>
    </ul>
  </Modal>
{/if}
