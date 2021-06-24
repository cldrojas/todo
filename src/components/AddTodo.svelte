<script>
  let todo = "";
  export function add(todo) {}
</script>

<div class="Todo-item-add">
  <div class="Todo-item-container">
    <div class="Todo-item-content">
      <span class="radio" />
      <form action="_">
        <input
          type="text"
          placeholder="Create a new todo..."
          bind:value={todo}
        />
      </form>
    </div>
  </div>
</div>

<style>
  .Todo-item-add {
    height: 80px;
    margin: 1em 0 1px 0;
  }

  .Todo-item-container {
    background-color: var(--VeryDarkDesaturatedBlue);
  }

  .Todo-item-content {
    display: flex;
    align-items: center;
    justify-content: start;
    background-color: var(--VeryDarkDesaturatedBlue);
  }

  .Todo-item-content form > input {
    display: flex;
    border-style: none;
    height: 50px;
    width: 60%;
    background-color: transparent;
    color: aliceblue;
    font-size: 18px;
  }

  .Todo-item-content form > input:focus {
    outline: none;
  }

  .radio {
    display: flex;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    margin: 1em;
    border: 2px solid darkslategrey;
  }

  .radio:checked {
    background-image: url(/images/icon-check.svg);
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
