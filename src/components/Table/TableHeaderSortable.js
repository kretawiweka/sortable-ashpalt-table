import { TableHeaderCell } from "@asphalt-react/table";
import IconTuner from "@asphalt-react/icontuner";
import { ChevronUp, ChevronDown } from "@asphalt-react/iconpack";

import { ORDER } from "../../utils/constant";

const ChevronIcon = ({ order }) => {
  const Chevron = () => {
    if (order === ORDER.ASC) {
      return <ChevronUp />;
    }
    if (order === ORDER.DESC) {
      return <ChevronDown />;
    }
    return (
      <IconTuner muted>
        <ChevronDown />
      </IconTuner>
    );
  };

  return (
    <div style={{ marginLeft: "0.25rem" }}>
      <Chevron />
    </div>
  );
};

export const TableHeaderSortable = ({ children, handleSorting, order }) => {
  return (
    <TableHeaderCell>
      <div
        onClick={handleSorting}
        style={{
          display: "flex",
          flexDirection: "row",
          cursor: "pointer",
          alignItems: "center"
        }}
      >
        {children} <ChevronIcon order={order} />
      </div>
    </TableHeaderCell>
  );
};
