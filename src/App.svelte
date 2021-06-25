<script>
  import Header from "./components/Header.svelte";
  import AddTodo from "./components/AddTodo.svelte";
  import Todo from "./components/Todo.svelte";
  import Filters from "./components/Filters.svelte";

  let todos = [];
  let name = "";
  let filter = "all";
  const forClear = "complete";
  let remaining;
  $: remaining = todos.filter((item) => item.status === "pending").length;

  function addTask() {
    todos = [
      {
        name: name,
        status: "pending",
      },
      ...todos,
    ];
    name = "";
  }

  function toggle(id) {
    todos[id].status == "completed"
      ? (todos[id].status = "pending")
      : (todos[id].status = "completed");
    todos = [...todos];
  }

  function remove(id) {
    todos.splice(id, 1);
    todos = [...todos];
  }

  function clear() {
    todos = todos.filter((item) => item.status === "pending");
  }

  function setFilter(value) {
    filter = value.detail.filter;
  }
</script>

<div class="App">
  <div class="App-container">
    <div class="App-content">
      <Header />
      <form class="form" on:submit={(e) => e.preventDefault()}>
        <input type="text" bind:value={name} on:submit={addTask} />
        <button on:click={addTask}>Add</button>
      </form>
      <div class="todos">
        {#each todos as todo, id}
          {#if filter == "all"}
            <Todo
              name={todo["name"]}
              done={todo["status"] == "completed" ? true : false}
              on:done={() => toggle(id)}
              on:remove={() => remove(id)}
            />
          {:else if filter == "completed"}
            {#if todo["status"] == "completed"}
              <Todo
                name={todo["name"]}
                done={todo["status"] == "completed" ? true : false}
                on:done={() => toggle(id)}
                on:remove={() => remove(id)}
              />
            {/if}
          {:else if filter == "pending"}
            {#if todo["status"] == "pending"}
              <Todo
                name={todo["name"]}
                done={todo["status"] == "completed" ? true : false}
                on:done={() => toggle(id)}
                on:remove={() => remove(id)}
              />
            {/if}
          {/if}
        {/each}
      </div>

      <Filters
        items={remaining}
        on:clear={() => clear()}
        on:filtrate={(val) => setFilter(val)}
      />
    </div>

    <div class="attribution">
      Challenge by <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank">Frontend Mentor</a
      >. Coded by <a href="https://twitter.com/cld_rojas">@cld_rojas</a>.
    </div>
  </div>
</div>

<style>
  .App {
    width: 100%;
    background-image: url("images/bg-desktop-dark.jpg");
    background-size: contain;
    background-repeat: no-repeat;
  }

  .App-container {
    width: 50%;
    margin: 0 auto;
    background-color: var(--VeryDarkDesaturatedBlue);
    height: 300px;
  }

  /*   .List {
    margin: 0;
    background-color: var(--VeryDarkBlue);
  } */

  .attribution {
    margin-top: 30px;
    font-size: 11px;
    text-align: center;
  }

  .attribution a {
    color: var(--ReferenceBlue);
  }
</style>
