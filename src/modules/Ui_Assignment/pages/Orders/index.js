import React from "react";
import SidePanel from "../../component/Drawer";
import Header from "../../component/Header";
import useStyle from "../../useStyle";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import TuneIcon from "@material-ui/icons/Tune";
import useTable from "../../component/useTable";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Grid,
  Paper,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@material-ui/core";

const captions = [
  { "Work Order No": "A12467322" },
  { Warehouse: "Warehouse01" },
  { "Requested By": "Cutting" },
  { Customer: "Adidas" },
  { "Due Date": "2020-11-30" },
  { Qty: "N/A" },
  { UOM: "Yard, Bag" },
  { Remarks: "xxxxxxxxx sssssss xxxxxx" },
];

const stamp = [
  { "Modified by": "Water Zhang" },
  { "Date Modified by": "2020-10-29" },
  { "Created by": "Water Zhang" },
  { "Date Modified by": "2020-10-29" },
];

const headCells = [
  { id: "sequence", label: "#", disablePadding: true },
  { id: "materialNo", label: "MATERIAL NO.", disablePadding: false },
  { id: "description", label: "DESCRIPTION", disablePadding: false },
  { id: "color", label: "COLOR", disablePadding: false },
  { id: "dyelot", label: "DYELOT", disablePadding: false },
  { id: "ref1", label: "REF1", disablePadding: false },
  { id: "ref2", label: "REF2", disablePadding: false },
  { id: "oty", label: "QTY", disablePadding: false },
  { id: "uom", label: "UOM", disablePadding: false },
  { id: "remarks", label: "REMARKS" },
];

let counter = 1;

function createRows(
  sequence,
  materialNo,
  description,
  color,
  dyelot,
  ref1,
  ref2,
  oty,
  uom,
  remarks
) {
  return {
    sequence,
    materialNo,
    description,
    color,
    dyelot,
    ref1,
    ref2,
    oty,
    uom,
    remarks,
  };
}

const records = [
  createRows(
    counter++,
    "A123",
    "XXXXXXX",
    "Yellow",
    "5756",
    "12349876123",
    "-",
    "-",
    "300.00",
    "Yard",
    "I am remark"
  ),
  createRows(
    counter++,
    "A123",
    "XXXXXXX",
    "Yellow",
    "5756",
    "12349876123",
    "-",
    "-",
    "300.00",
    "Yard",
    "I am remark"
  ),
  createRows(
    counter++,
    "A123",
    "XXXXXXX",
    "Yellow",
    "5756",
    "12349876123",
    "-",
    "-",
    "300.00",
    "Yard",
    "I am remark"
  ),
  createRows(
    counter++,
    "A123",
    "XXXXXXX",
    "Yellow",
    "5756",
    "12349876123",
    "-",
    "-",
    "300.00",
    "Yard",
    "I am remark"
  ),
];

function RoundNumberIcon() {
  return (
    <Box
      style={{
        display: "flex",
        backgroundColor: "blue",
        color: "white",
        borderRadius: "50%",
        width: "25px",
        height: "25px",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "16px",
      }}
    >
      {`4`}
    </Box>
  );
}

function TableContent() {
  const [selected, setSelected] = React.useState([]);
  const {
    TableWrapper,
    TableHeader,
    TablePaging,
    recordsAfterPagingAndSorting,
    isSelected,
    handleClick,
  } = useTable(headCells, records, setSelected, selected);
  return (
    <Box>
      <TableWrapper>
        <TableHeader />
        <TableBody>
          {recordsAfterPagingAndSorting().map((row, index) => {
            const isItemSelected = isSelected(row.sequence);
            const labelId = `table-checkbox-${index}`;
            return (
              <TableRow
                hover
                onClick={(event) => handleClick(event, row.sequence)}
                role={`checkbox`}
                aria-checked={isItemSelected}
                tabIndex={-1}
                key={row.sequence}
                selected={isItemSelected}
                style={{backgroundColor: isItemSelected ? "aqua" : null}}
              >
                <TableCell padding={`checkbox`}>
                  <Checkbox
                    checked={isItemSelected}
                    inputProps={{ "aria-labelledby": labelId }}
                    color={"primary"}
                    disableRipple
                  />
                </TableCell>
                <TableCell
                  component={"th"}
                  id={labelId}
                  scope={"row"}
                  padding={"none"}
                >
                  {row.sequence}
                </TableCell>
                <TableCell align={"left"}>{row.materialNo}</TableCell>
                <TableCell align={"left"}>{row.description}</TableCell>
                <TableCell align={"left"}>{row.color}</TableCell>
                <TableCell align={"left"}>{row.dyelot}</TableCell>
                <TableCell align={"left"}>{row.ref1}</TableCell>
                <TableCell align={"left"}>{row.ref2}</TableCell>
                <TableCell align={"left"}>{row.oty}</TableCell>
                <TableCell align={"left"}>{row.uom}</TableCell>
                <TableCell align={"left"}>{row.remarks}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </TableWrapper>
      <TablePaging />
    </Box>
  );
}

function Content() {
  const {
    contentCss,
    workOrder,
    sideTitle,
    searchField,
    textField,
    requestMaterialContainer,
    searchIcon,
    searchAddContainer,
    selectedContainer,
    filterButton,
    deleteButton,
  } = useStyle();
  return (
    <Box className={contentCss}>
      <Grid container item xs={12}>
        <Grid item xs={12}>
          <Paper className={workOrder}>{`Work Orders / A12467322`}</Paper>
        </Grid>
        <Grid container item xs={12} spacing={2} style={{ margin: "5px 2px" }}>
          <Grid item xs={3}>
            <Paper>
              <Box>
                <Box className={sideTitle}>
                  <Typography
                    variant={`h5`}
                    style={{ marginBottom: "10px" }}
                  >{`Work Order Details`}</Typography>
                  <Button
                    variant={`outlined`}
                    color={`primary`}
                    startIcon={<EditIcon />}
                  >{`Edit`}</Button>
                  <Divider style={{ margin: "8px 0" }} />
                </Box>

                <Box style={{ padding: "0 15px" }}>
                  {captions.map((obj, index) => (
                    <Box key={index} style={{ margin: "8px 0" }}>
                      <Typography variant={`caption`} display={`block`}>
                        {`${Object.keys(obj)[0]} *`}
                      </Typography>
                      <Typography
                        variant={`body1`}
                        display={`block`}
                        style={{ fontWeight: "bold" }}
                      >
                        {Object.values(obj)[0]}
                      </Typography>
                    </Box>
                  ))}

                  <Box style={{ padding: "30px 0 78px 0" }}>
                    {stamp.map((obj, index) => (
                      <Typography
                        key={index}
                        variant={`body2`}
                        display={`block`}
                        style={{ color: "grey", margin: "5px 0" }}
                      >
                        {`${Object.keys(obj)[0]}: ${Object.values(obj)[0]}`}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper>
              <Box className={requestMaterialContainer}>
                <Box className={searchAddContainer}>
                  <Box>
                    <Typography variant={`h5`}>{`Request Material`}</Typography>
                  </Box>
                  <Box style={{ display: "flex", margin: "10px 0" }}>
                    <Box className={searchField}>
                      <SearchIcon className={searchIcon} />
                      <input
                        type={`text`}
                        placeholder={`Search`}
                        name={`search`}
                        className={textField}
                      />
                    </Box>
                    <Button
                      variant={`outlined`}
                      color={`primary`}
                      startIcon={<AddIcon fontSize={`large`} />}
                    >{`Add`}</Button>
                  </Box>
                </Box>
                <Divider />
                <Box
                  style={{
                    display: "flex",
                    padding: "10px 0",
                    justifyContent: "space-between",
                  }}
                >
                  <Box style={{ width: "100%", display: "flex" }}>
                    <Box className={selectedContainer}>{`1 Selected`}</Box>
                    <Box>
                      <Button
                        variant={`outlined`}
                        color={`default`}
                        className={deleteButton}
                      >{`Delete`}</Button>
                    </Box>
                  </Box>
                  <Box>
                    <Button
                      variant={`outlined`}
                      color={`default`}
                      startIcon={<TuneIcon />}
                      endIcon={<RoundNumberIcon fontSize={`large`} />}
                      className={filterButton}
                    >{`Filter`}</Button>
                  </Box>
                </Box>
                <TableContent />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default function Orders() {
  return (
    <>
      <Header />
      <SidePanel />
      <Content />
    </>
  );
}
