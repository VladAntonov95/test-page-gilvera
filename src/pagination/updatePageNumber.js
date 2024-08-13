import { createPaginationButton } from "./createPaginationButton.js";
import { addDots } from "./addDots.js";

export const updatePageNumbers = (totalPages, currentPage, changePage) => {
  const pageNumbersContainer = document.getElementById("page-numbers");
  pageNumbersContainer.innerHTML = "";

  const addPaginationButton = (page) => {
    const paginationButton = createPaginationButton(
      page,
      currentPage,
      changePage
    );
    pageNumbersContainer.appendChild(paginationButton);
  };

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) addPaginationButton(i);
  } else {
    addPaginationButton(1);
    if (currentPage > 4) addDots(pageNumbersContainer);

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) addPaginationButton(i);

    if (currentPage < totalPages - 3) addDots(pageNumbersContainer);
    addPaginationButton(totalPages);
  }
};
