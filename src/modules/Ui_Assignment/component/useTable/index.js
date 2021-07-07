import React from "react";
import useStyle from "./style";
import {
  Checkbox,
  Table,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@material-ui/core";
import IndeterminateCheckBoxOutlinedIcon from "@material-ui/icons/IndeterminateCheckBoxOutlined";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function useTable(headCells, records, setSelected, selected) {
  const pages = [5, 10, 20];

  const [order, setOrder] = React.useState("asc");

  const [orderBy, setOrderBy] = React.useState("#");

  const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(pages[page]);

  const { classes } = useStyle();

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = records.map((ele) => ele.sequence);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, sequence) => {
    const selectedIndex = selected.indexOf(sequence);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, sequence);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (sequence) => selected.indexOf(sequence) !== -1;

  const TableWrapper = ({ children }) => {
    return <Table>{children}</Table>;
  };

  const TableHeader = () => {
    const numSelected = selected.length;

    const rowCount = records.length;

    const createSortHandler = (property) => (event) => {
      handleRequestSort(event, property);
    };

    return (
      <TableHead>
        <TableRow className={classes.headRow}>
          <TableCell padding={`checkbox`}>
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={handleSelectAllClick}
              inputProps={{ "aria-label": "select all #" }}
              indeterminateIcon={
                <IndeterminateCheckBoxOutlinedIcon color={`primary`} />
              }
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={`left`}
              padding={headCell.disablePadding ? "none" : "default"}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  const TablePaging = () => {
    return (
      <TablePagination
        rowsPerPageOptions={pages}
        component={`div`}
        count={records.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    );
  };

  const recordsAfterPagingAndSorting = () => {
    return stableSort(records, getComparator(order, orderBy)).slice(
      page * rowsPerPage,
      (page + 1) * rowsPerPage
    );
  };

  return {
    TableWrapper,
    TableHeader,
    TablePaging,
    recordsAfterPagingAndSorting,
    isSelected,
    handleClick,
  };
}
