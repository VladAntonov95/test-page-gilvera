export const filterData = (data, query) => {
  return data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(query.toLowerCase())
    )
  );
};
