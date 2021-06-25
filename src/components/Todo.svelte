<script>
  import { createEventDispatcher } from "svelte";

  //Declare the dispatch
  const dispatch = createEventDispatcher();

  export let name;
  export let done;

  //if you wonder $: its svelte way make reactive statement
  $: estado = done ? "completed" : "pending";
  const remove = (id) => {
    dispatch("remove", { id });
  };
  const completed = (id) => {
    done = !done;
    //Dispatch the doneite event with object data
    dispatch("done", { id, estado });
  };
</script>

<div class="Todo">
  <div class="Todo-container">
    <div class="Todo-content">
      <span class={estado} on:click={completed} />
      <div class="Todo-title">
        <h5 class={estado == "completed" ? "dash" : ""}>{name}</h5>
      </div>
      <button on:click={remove}>&#10006;</button>
    </div>
  </div>
</div>

<style>
  .Todo {
    margin: 1px 0 1px 0;
  }
  .Todo-container {
    background-color: aliceblue;
  }
  .Todo-content {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: var(--DarkGrayishBlue) 0.01em outset;

    background-color: var(--VeryDarkDesaturatedBlue);
    margin: auto;
  }

  .Todo-content:hover > button {
    cursor: pointer;
    color: var(--DarkGrayishBlue);
  }

  .Todo-title {
    display: flex;
    border-style: none;
    height: 50px;
    background-color: transparent;
    color: var(--DarkDesaturatedBlue);
    align-items: center;
    width: 85%;
  }

  h5 {
    font-size: 18px;
  }

  button {
    background: transparent;
    font-size: 18px;
    padding: 20px;
    color: var(--VeryDarkDesaturatedBlue);
    border: none;
  }

  span {
    display: block;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    margin: 1em;
    border: 0.1em solid darkslategrey;
    cursor: pointer;
  }

  span:hover {
    border: 0.1em solid aliceblue;
  }

  .completed {
    background-image: url(/images/icon-check.svg);
    background-repeat: no-repeat;
    background-size: cover;
  }

  .dash {
    text-decoration: line-through;
    text-decoration-thickness: 2px;
  }
</style>
