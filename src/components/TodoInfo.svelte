<div class="Todo-info">
  <div class="Todo-info-container">
    <div class="Todo-info-content">
      <span>3 items left</span>
      <div class="actions">
        <h5 class="active">All</h5>
        <h5>Active</h5>
        <h5>Completed</h5>
      </div>
      <span>Close Completed</span>
    </div>
  </div>
</div>

<style>
  .Todo-info {
    height: 40px;
  }

  .Todo-info-container {
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    background-color: var(--VeryDarkDesaturatedBlue);
  }

  .Todo-info-content {
    width: 95%;
    align-items: center;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }

  .actions {
    margin: 1px;
    font-size: 18px;
    width: 40%;
    display: flex;
    justify-content: space-between;
  }

  .actions .active {
    color: var(--ReferenceBlue);
  }

  .actions .active:hover {
    color: var(--ReferenceBlue);
    font-weight: bolder;
  }

  .actions h5:hover {
    cursor: pointer;
    color: #fff;
  }
</style>
