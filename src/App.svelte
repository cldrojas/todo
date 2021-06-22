<script>
  import Header from "./components/Header.svelte";
  import AddTodo from "./components/AddTodo.svelte";
  import Todo from "./components/Todo.svelte";
  import TodoInfo from "./components/TodoInfo.svelte";
</script>

<div class="App">
  <div class="App-container">
    <div class="App-content">
      <Header />
      <AddTodo />
      <div class="List">
        <div class="List-container">
          <div class="List-content">
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <TodoInfo />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .List {
    margin: 0;
    background-color: var(--VeryDarkBlue);
  }
</style>
