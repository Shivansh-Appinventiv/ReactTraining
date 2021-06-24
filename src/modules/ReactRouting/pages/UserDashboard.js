import React from "react";
import { Grid, Box, Paper, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { users } from "../services/apiCall";
import Modal from "../components/Modal";
import EditForm from "./EditForm";

export default function UserDashboard() {
  const [userData, setUserData] = React.useState([]);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const getData = async () => {
    const data = await users();
    setUserData(data);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <Box className={`sectionContainer`}>
      <Box style={{ textAlign: "center", margin: "10px" }}>
        <Button
          variant={`outlined`}
          color={`primary`}
          onClick={handleClick}
        >{`Add User`}</Button>
      </Box>
      <Grid container spacing={3}>
        {userData?.map((item, index) => {
          return (
            <Grid item xs={4} key={item.id}>
              <Link to={`/users/${item.id}`}>
                <Paper key={item.id}>
                  <Box className={`cardContainer`}>
                    <Box>
                      <img
                        src={item.image}
                        alt={item.name}
                        className={`cardImage`}
                      />
                    </Box>
                    <Box className={`cardTitle`}>
                      <Typography variant={`h5`}>{item.name}</Typography>
                    </Box>
                  </Box>
                </Paper>
              </Link>
            </Grid>
          );
        })}
      </Grid>
      <Modal isOpen={isOpen} title={`Create Form`} setIsOpen={setIsOpen}>
        <EditForm
          setIsOpen={setIsOpen}
          type={`add`}
          userData={userData}
          setUserData={setUserData}
        />
      </Modal>
    </Box>
  );
}
