import App from "./App.svelte";
import "../public/styles.css";

const app = new App({
    target: document.getElementById("root"), // entry point in ../public/index.html
});

export default app;