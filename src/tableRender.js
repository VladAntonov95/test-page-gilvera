const renderTable = (data, page, itemsPerPage) => {
  const tableBody = document.getElementById("customers-table-body");
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageData = data.slice(start, end);

  tableBody.innerHTML = "";

  pageData.forEach((item) => {
    const row = document.createElement("tr");
    const statusClass =
      item.status === "Active" ? "status-active" : "status-inactive";
    row.innerHTML = `
        <td><p>${item.name}</p></td>
        <td><p>${item.company}</p></td>
        <td><p>${item.phone}</p></td>
        <td><p>${item.email}</p></td>
        <td><p>${item.country}</p></td>
        <td><p class="${statusClass}">${item.status}</p></td>
    `;
    tableBody.appendChild(row);
  });
};

export default renderTable;
