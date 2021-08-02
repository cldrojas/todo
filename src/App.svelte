<script>
  import { theme } from "./store";
  import Header from "./components/Header.svelte";
  import Todo from "./components/Todo.svelte";
  import Filters from "./components/Filters.svelte";

  let todos = [{ name: "test", status: "pending", deadline: "8/24/2021" }];
  let name = "";
  let deadline = "";
  let filter = "all";
  let remaining;
  let temp;
  let from;

  $: remaining = todos.filter((item) => item.status === "pending").length;

  function addTask() {
    console.log("date aquired: ", deadline);
    if (name != "") {
      todos = [
        {
          name: name,
          status: "pending",
          deadline: deadline,
        },
        ...todos,
      ];
    }
    deadline = "";
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

  function drag(id) {
    temp = todos[id];
    from = id;
  }

  function drop(to) {
    remove(from);
    todos.splice(to, 0, temp);
    todos = [...todos];
  }
</script>

<div class="App {$theme}">
  <div class="App-container">
    <div class="App-content">
      <Header />
      <form class="form" on:submit={(e) => e.preventDefault()}>
        <span />
        <input
          type="text"
          bind:value={name}
          placeholder="Create a new todo..."
        />
        <input type="date" bind:value={deadline} />
        <button hidden on:click={addTask} />
      </form>
      <div class="Todos">
        {#each todos as todo, id}
          {#if filter == "all"}
            <Todo
              name={todo["name"]}
              deadline={todo["deadline"]}
              done={todo["status"] == "completed" ? true : false}
              on:done={() => toggle(id)}
              on:remove={() => remove(id)}
              on:drag={() => drag(id)}
              on:drop={() => drop(id)}
              on:tap={() => {
                alert("done");
              }}
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
    width: 40%;
    margin: 0 auto;
  }

  .Todos {
    margin: 0;
  }

  .form {
    height: 60px;
    display: flex;
    align-items: center;
    background-color: var(--bgDark);
    margin-bottom: 1em;
  }

  span {
    display: block;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    margin: 1em;
    border: 0.1em solid darkslategrey;
  }

  .form > input {
    font-size: 18px;
    font-family: inherit;
    font-weight: 700;
    color: var(--fontDark);
    border: none;
    background-color: var(--bgDark);
    height: 60%;
    width: 80%;
  }

  .form > input::-webkit-datetime-edit {
    visibility: hidden;
  }

  .form > input:focus {
    outline: var(--fontDark) ridge 1px;
    color: var(--HoverDark);
  }

  .attribution {
    margin-top: 30px;
    font-size: 11px;
    text-align: center;
  }

  .attribution a {
    color: var(--ReferenceBlue);
  }

  .light {
    height: 100vh;
    background-image: url("images/bg-desktop-light.jpg");
    background-color: aliceblue;
  }

  .light .form {
    background-color: var(--bgLight);
  }

  .light span {
    border: 0.1em solid aliceblue;
  }

  .light .form > input {
    background-color: transparent;
    color: var(--fontLight);
  }

  .light .form > input::placeholder {
    color: aliceblue;
  }

  @media only screen and (min-width: 360px) and (max-width: 980px) {
    .App {
      background-image: url("images/bg-mobile-dark.jpg");
    }
    .light {
      background-image: url("images/bg-mobile-light.jpg");
    }
    .App-container {
      width: 85%;
    }
  }
</style>
