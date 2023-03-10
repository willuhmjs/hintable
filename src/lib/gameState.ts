import { writable } from "svelte/store";

export const ended = writable(false)
export const won = writable(false)
export const inGameMenu = writable(false);