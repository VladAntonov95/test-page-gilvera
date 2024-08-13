export const updatePageInfo = (data, itemsPerPage, currentPage) => {
  const pageInfo = document.getElementById("pagination-info");
  const totalItems = data.length;
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(startItem + itemsPerPage - 1, totalItems);
  pageInfo.textContent = `Showing data ${startItem} to ${endItem} of ${totalItems} entries`;
};
