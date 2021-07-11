<script>
  import { createEventDispatcher } from "svelte";

  import { theme } from "../store.js";
  const dispatch = createEventDispatcher();

  export let name;
  export let done;

  $: estado = done ? "completed" : "pending";
  const remove = (id) => {
    dispatch("remove", { id });
  };
  const completed = (id) => {
    done = !done;
    dispatch("done", { id, estado });
  };
  const drag = (id) => {
    dispatch("drag", { id });
  };
  const drop = (id) => {
    dispatch("drop", { id });
  };
</script>

<div
  class="Todo {$theme}"
  draggable="true"
  on:dragover={(e) => {
    e.preventDefault();
  }}
  on:dragstart={drag}
  on:drop={drop}
>
  <div class="Todo-container ">
    <div class="Todo-content ">
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
    background-color: var(--bgDark);
  }
  .Todo-content {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: var(--bgLight) 0.01em outset;
    margin: auto;
  }

  .Todo-content:hover > button {
    cursor: pointer;
    color: var(--fontDark);
  }

  .Todo-title {
    display: flex;
    border-style: none;
    height: 50px;
    background-color: transparent;
    color: var(--HoverDark);
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
    color: var(--bgDark);
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
    background-image: url(/todo/images/icon-check.svg);
    background-size: cover;
  }

  .dash {
    color: var(--fontDark);
    text-decoration: line-through;
    text-decoration-thickness: 2px;
  }

  .light .Todo-container {
    color: var(--fontLight);
    background-color: var(--bgLight);
  }

  .light .Todo-content {
    border-bottom: none;
  }

  .light .Todo-title {
    color: var(--fontLight);
  }

  .light button {
    color: transparent;
  }
  .light .Todo-content:hover > button {
    color: var(--fontLight);
  }

  .light span {
    border: 0.1em solid var(--fontLight);
  }
</style>
