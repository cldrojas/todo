<script>
  import { theme } from "../store.js";
  function toggleTheme() {
    $theme == "dark" ? theme.set("light") : theme.set("dark");
  }
</script>

<div class="Header">
  <div class="Header-container">
    <div class="Header-content">
      <h1>TODO</h1>
      <span
        ><img
          on:click={toggleTheme}
          src={$theme == "dark"
            ? "images/icon-sun.svg"
            : "images/icon-moon.svg"}
          alt="ligth mode"
        /></span
      >
    </div>
  </div>
</div>

<style>
  .Header {
    color: aliceblue;
  }

  .Header-container {
    display: grid;
    margin: auto;
    height: 140px;
  }

  .Header-content {
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .Header-content h1 {
    font-size: 36px;
    font-weight: 700;
    letter-spacing: 10px;
  }
</style>
