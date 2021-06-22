<div class="Todo-item-add">
  <div class="Todo-item-container">
    <div class="Todo-item-content">
      <span class="_radio"><input type="radio" name="new" id="new" /></span>
      <input type="text" placeholder="Create a new todo..." />
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

  .Todo-item-content input[type="text"] {
    display: flex;
    border-style: none;
    height: 50px;
    background-color: transparent;
    color: aliceblue;
    font-size: 18px;
  }

  .Todo-item-content input[type="text"]:focus {
    outline: none;
  }

  .Todo-item-content input[type="radio"] {
    opacity: 0;
    width: 0;
    height: 0;
  }

  ._radio {
    display: block;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    margin: 1em;
    border: 0.1em solid darkslategrey;
  }

  ._radio:checked {
    background-image: url(/images/icon-check.svg);
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
