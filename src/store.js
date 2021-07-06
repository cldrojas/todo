import {
    writable
} from "svelte/store";

const storedTheme = localStorage.getItem("theme");
export const theme = writable(storedTheme || "dark");
theme.subscribe((value) => {
    localStorage.setItem("theme", value === "dark" ? "dark" : "light");
});