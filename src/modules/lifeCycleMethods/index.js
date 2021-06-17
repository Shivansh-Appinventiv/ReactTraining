import { useState } from "react";
import useTable from "./components/useTable";
import StudentForm from "./pages/StudentForm";
import { students } from "./student";
import Input from "./components/controls/Input";
import { Search } from "@material-ui/icons";
import PopUp from "./components/PopUp";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import "./index.css";
import {
  Button,
  InputAdornment,
  Paper,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Loader from "./components/Loader";

const useStyles = makeStyles((theme) => ({
  searchBar: {
    margin: "20px 10px",
    width: "500px",
  },
  tableTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

const headCells = [
  { id: "fullName", label: "Student's Full Name" },
  { id: "fatherName", label: "Father's Name" },
  { id: "motherName", label: "Mother's Name" },
  { id: "email", label: "Email Id" },
  { id: "phoneNo", label: "Phone No." },
  { id: "actions", label: "Actions" },
];

export default function LifeCycleMethods() {
  const classes = useStyles();
  const [records, setRecords] = useState(students);
  const [filterFunc, setFilterFunc] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [openPopup, setOpenPopup] = useState(false);
  const [edit, setEdit] = useState(null);
  const [index, setIndex] = useState(null);
  const [loader, setLoader] = useState(false);

  const {
    TableWrapper,
    TableHeader,
    TablePaging,
    recordsAfterPagingAndSorting,
  } = useTable(records, headCells, filterFunc);

  const handleSearch = (event) => {
    setTimeout(() => {
      let target = event.target;
      setFilterFunc({
        fn: (items) => {
          if (target.value === "") {
            return items;
          } else {
            let fullNameField = items.filter((x) =>
              x.fullName.toLowerCase().includes(target.value)
            );
            let emailField = items.filter((x) =>
              x.email.toLowerCase().includes(target.value)
            );

            return fullNameField || emailField;
          }
        },
      });
      setLoader(false);
    }, 2000);
    setLoader(true);
  };

  const onDeleteItem = (token) => {
    setTimeout(() => {
      let arr = records;
      arr.splice(token, 1);
      setRecords([...arr]);
      setLoader(false);
    }, 1000);
    setLoader(true);
  };

  const openEdit = (item) => {
    setEdit(item);
    setOpenPopup(true);
  };

  const addOrEdit = (students) => {
    setTimeout(() => {
      //console.log(index);
      if (edit !== null) {
        let arr = records;
        arr[index] = students;
        setRecords(arr);
      } else {
        setRecords([...records, students]);
      }
      setLoader(false);
      console.log(loader);
    }, 2000);
    setLoader(true);
    setOpenPopup(false);
  };

  return (
    <div className={`screenContainer`}>
      <div className={`wrapperArea`}>
        <Toolbar>
          <div className={`headerArea`}>
            <Typography
              variant={`h3`}
              component={`div`}
            >{`Student Data Information`}</Typography>
          </div>
        </Toolbar>
        <Paper>
          <Toolbar className={classes.tableTitle}>
            <Typography
              variant={`h5`}
              component={`div`}
            >{`Student's Information`}</Typography>
            <Input
              name={`search`}
              label={`Search`}
              InputProps={{
                startAdornment: (
                  <InputAdornment position={`start`}>
                    <Search />
                  </InputAdornment>
                ),
              }}
              className={classes.searchBar}
              onChange={handleSearch}
            />
            <Button
              variant={`contained`}
              color={`primary`}
              onClick={() => {
                setOpenPopup(true);
                setEdit(null);
              }}
            >{`Add Item`}</Button>
          </Toolbar>
          {loader ? (
            <>
              <Loader />
            </>
          ) : (
            <>
              <TableWrapper>
                <TableHeader />
                <TableBody>
                  {recordsAfterPagingAndSorting().map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.fullName}</TableCell>
                      <TableCell>{item.fatherName}</TableCell>
                      <TableCell>{item.motherName}</TableCell>
                      <TableCell>{item.email}</TableCell>
                      <TableCell>{item.phoneNo}</TableCell>
                      <TableCell>
                        <div className={`actionContainer`}>
                          <Button
                            variant={`outlined`}
                            color={`primary`}
                            startIcon={<EditIcon />}
                            onClick={() => {
                              openEdit(item);
                              setIndex(index);
                            }}
                          ></Button>
                          <Button
                            variant={`outlined`}
                            color={`primary`}
                            startIcon={<DeleteIcon />}
                            onClick={() => onDeleteItem(index)}
                          ></Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TablePaging />
              </TableWrapper>
            </>
          )}
        </Paper>
        <PopUp
          title={edit ? `Edit Student` : `Add Student`}
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        >
          <StudentForm
            edit={edit}
            addOrEdit={addOrEdit}
            setOpenPopup={setOpenPopup}
          />
        </PopUp>
      </div>
    </div>
  );
}
