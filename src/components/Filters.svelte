<div class="Filters">
  <div class="Filters-container">
    <div class="Filters-content">
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
  .Filters {
    height: 40px;
  }

  .Filters-container {
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    background-color: var(--VeryDarkDesaturatedBlue);
  }

  .Filters-content {
    width: 95%;
    align-items: center;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }

  .actions {
    margin: 1px;
    font-size: 18px;
    width: 45%;
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

  @media only screen and (min-width: 1200px) {
    .actions {
      width: 40%;
    }
  }
</style>
