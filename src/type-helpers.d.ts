/// <reference path="../node_modules/svelte2tsx/svelte-jsx.d.ts" />
export {}

declare global {
  declare type SvelteEventHandler<
    E extends Event,
    T extends HTMLElement
  > = svelte.JSX.EventHandler<E, T>

  declare type SvelteEvent<E extends Event, T extends HTMLElement> = Parameters<
    SvelteEventHandler<E, T>
  >[0]
}
