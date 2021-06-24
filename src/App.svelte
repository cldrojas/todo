<script>
  import Header from "./components/Header.svelte";
  import AddTodo from "./components/AddTodo.svelte";
  import Todo from "./components/Todo.svelte";
  import TodoInfo from "./components/Filters.svelte";

  let todos = [];
  let name = "";
  let filter = "all";

  function addTask() {
    todos = [
      {
        name: name,
        status: "pending",
      },
      ...todos,
    ];

    name = "";
    console.log("Todos list: ", todos);
  }

  function toggle(id) {
    todos[id].status == "completed"
      ? (todos[id].status = "pending")
      : (todos[id].status = "completed");
    todos = [...todos];
  }
</script>

<div class="App">
  <div class="App-container">
    <div class="App-content">
      <Header />
      <div class="new">
        <div class="form">
          <input type="text" bind:value={name} />
          <button on:click={addTask}>Add</button>
        </div>
        <div class="todos">
          {#each todos as todo, id}
            {#if filter == "all"}
              <Todo
                name={todo["name"]}
                done={todo["status"] == "completed" ? true : false}
                on:done={() => toggle(id)}
              />
            {/if}
          {/each}
        </div>

        <div class="filter">
          <button
            class={filter == "all" ? "active" : ""}
            on:click={() => {
              filter = "all";
            }}>All</button
          >
          <button
            class={filter == "completed" ? "active" : ""}
            on:click={() => {
              filter = "completed";
            }}>Completed</button
          >
          <button
            class={filter == "pending" ? "active" : ""}
            on:click={() => {
              filter = "pending";
            }}>Pending</button
          >
        </div>
      </div>
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
  .active {
    background-color: blue;
    color: white;
  }

  .attribution {
    margin-top: 30px;
    font-size: 11px;
    text-align: center;
  }

  .attribution a {
    color: var(--ReferenceBlue);
  }
</style>
