export const createPaginationButton = (page, currentPage, changePage) => {
  const pageNumber = document.createElement("button");
  pageNumber.textContent = page;
  if (page === currentPage) pageNumber.className = "active";
  pageNumber.addEventListener("click", () => {
    changePage(page);
  });
  return pageNumber;
};
