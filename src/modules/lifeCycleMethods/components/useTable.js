import {
  Table,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@material-ui/core";
import React, { useState } from "react";

export default function useTable(records, headCells, filterFunc) {
  const pages = [5, 10, 20];

  const [page, setPage] = useState(0);

  const [rowsPerpage, setRowsPerPage] = useState(pages[page]);

  const [orderBy, setOrderBy] = useState();

  const [order, setOrder] = useState();

  const TableWrapper = (props) => {
    return <Table>{props.children}</Table>;
  };

  const TableHeader = () => {
    const handleSortRequest = (cellId) => {
      const isAsc = orderBy === cellId && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(cellId);
    };

    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell key={headCell.id}>
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={() => {
                  handleSortRequest(headCell.id);
                }}
              >
                {headCell.label}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const TablePaging = () => {
    return (
      <TablePagination
        component={`div`}
        page={page}
        rowsPerPageOptions={pages}
        count={records.length}
        rowsPerPage={rowsPerpage}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    );
  };

  const recordsAfterPagingAndSorting = () => {
    return filterFunc
      .fn(records)
      .slice(page * rowsPerpage, (page + 1) * rowsPerpage);
  };

  return {
    TableWrapper,
    TableHeader,
    TablePaging,
    recordsAfterPagingAndSorting,
  };
}
