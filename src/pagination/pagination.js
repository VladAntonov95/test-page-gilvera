import { updatePageInfo } from "./updatePageInfo.js";
import { updatePageNumbers } from "./updatePageNumber.js";

export const setupPagination = (data, itemsPerPage, renderTable) => {
  let currentPage = 1;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const changePage = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;

    currentPage = newPage;
    renderTable(data, currentPage, itemsPerPage);
    updatePageInfo(data, itemsPerPage, currentPage);
    updatePageNumbers(totalPages, currentPage, changePage);
  };

  document
    .getElementById("prev-page")
    .addEventListener("click", () => changePage(currentPage - 1));
  document
    .getElementById("next-page")
    .addEventListener("click", () => changePage(currentPage + 1));

  updatePageInfo(data, itemsPerPage, currentPage);
  updatePageNumbers(totalPages, currentPage, changePage);
  renderTable(data, currentPage, itemsPerPage);
};
