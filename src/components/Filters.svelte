<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let items;
  export let filter = "all";
  $: filter;

  const filtrate = (val) => {
    filter = val;
    dispatch("filtrate", { filter });
  };

  const clear = () => {
    dispatch("clear");
  };
</script>

<div class="Filters">
  <div class="Filters-container">
    <div class="Filters-content">
      <span>{items} items left</span>
      <div class="filter">
        <button
          class={filter == "all" ? "active" : ""}
          on:click={() => filtrate("all")}>All</button
        >
        <button
          class={filter == "pending" ? "active" : ""}
          on:click={() => filtrate("pending")}>Active</button
        >
        <button
          class={filter == "completed" ? "active" : ""}
          on:click={() => filtrate("completed")}>Completed</button
        >
      </div>
      <span on:click={(id) => clear(id)}>Clear Completed</span>
    </div>
  </div>
</div>

<style>
  .Filters {
    height: 40px;
  }

  .Filters-container {
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    background-color: var(--VeryDarkDesaturatedBlue);
    height: 50px;
  }

  .Filters-content {
    width: 95%;
    align-items: center;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }

  .Filters-content span:last-child {
    color: var(--VeryDarkGrayishBlue);
    cursor: pointer;
  }

  span:last-child:hover {
    color: var(--DarkDesaturatedBlue);
  }

  .filter {
    margin: 1px;
    font-size: 18px;
    width: 45%;
    display: flex;
    justify-content: space-between;
  }

  button {
    background-color: var(--VeryDarkDesaturatedBlue);
    color: var(--VeryDarkGrayishBlue);
    border: none;
    cursor: pointer;
  }

  button:hover {
    color: var(--DarkDesaturatedBlue);
  }

  .active,
  .active:hover {
    color: var(--ReferenceBlue);
  }
</style>
