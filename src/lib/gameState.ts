import { writable } from 'svelte/store';

/*
we are using writable stores because
its less annoying than passing it through a parent component
*/
export const ended = writable(false);
export const won = writable(false);
