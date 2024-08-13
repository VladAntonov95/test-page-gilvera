import fetchData from "./fetchData.js";
import renderTable from "./tableRender.js";
import { setupPagination } from "./pagination/pagination.js";
import { setupSearch } from "./search/setupSearch.js";

const itemsPerPage = 8;

const initialize = async () => {
  const data = await fetchData("customers.json");

  setupPagination(data, itemsPerPage, renderTable);
  setupSearch(data, itemsPerPage, renderTable, setupPagination);
};

initialize();
