import React, { useState } from "react";
import Table, {
  TableHead,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell
} from "@asphalt-react/table";

import { TableHeaderSortable } from "../../components/Table/TableHeaderSortable";
import { useSort } from "../../hooks/UseSort";

import data from "../../data.json";

const SORTING_ORDER = {
  refund: "",
  transaction_fee: ""
};

export const ChannelPage = () => {
  const [dataTable, setDataTable] = useState(data);
  const [order, setOrder] = useState(SORTING_ORDER);
  const { applyLocalSorting, getSortingOrder } = useSort();

  const applySorting = async (item) => {
    const getSortingOrderVal = getSortingOrder(order[item]);

    setOrder({
      ...SORTING_ORDER,
      [item]: getSortingOrderVal
    });
    const resData = await applyLocalSorting(
      dataTable,
      getSortingOrderVal,
      item
    );
    setDataTable(resData);
  };

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Channel</TableHeaderCell>
            <TableHeaderCell>Gross Amount</TableHeaderCell>
            <TableHeaderSortable
              handleSorting={() => {
                applySorting("refund");
              }}
              order={order.refund}
            >
              Refund
            </TableHeaderSortable>
            <TableHeaderCell>MDR Fee</TableHeaderCell>
            <TableHeaderSortable
              handleSorting={() => {
                applySorting("transaction_fee");
              }}
              order={order.transaction_fee}
            >
              Transaction Fee
            </TableHeaderSortable>
            <TableHeaderCell>Nett Amount</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataTable.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.channel}</TableCell>
              <TableCell>{item.gross_amount}</TableCell>
              <TableCell>{item.refund}</TableCell>
              <TableCell>{item.mdr_fee}</TableCell>
              <TableCell>{item.transaction_fee}</TableCell>
              <TableCell>{item.nett_amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
