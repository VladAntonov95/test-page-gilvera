import { filterData } from "./filterData.js";

export const setupSearch = (
  data,
  itemsPerPage,
  renderTable,
  setupPagination
) => {
  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("input", (event) => {
    const query = event.target.value;
    const filteredData = filterData(data, query);

    setupPagination(filteredData, itemsPerPage, renderTable);
  });
};
