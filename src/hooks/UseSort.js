import { ORDER } from "../utils/constant";

export const useSort = () => {
  const applySortingToQueryParam = () => {};

  const applyLocalSorting = async (defaultTableData, order, column) => {
    if (order === ORDER.ASC) {
      return defaultTableData.sort((a, b) => a[column] - b[column]);
    }
    return defaultTableData.sort((a, b) => b[column] - a[column]);
  };

  const getSortingOrder = (orderItem) => {
    if (orderItem === "") return ORDER.DESC;
    return orderItem === ORDER.ASC ? ORDER.DESC : ORDER.ASC;
  };

  return {
    applySortingToQueryParam,
    applyLocalSorting,
    getSortingOrder
  };
};
