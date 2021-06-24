import { Box, Button, Paper, Typography } from "@material-ui/core";
import React from "react";
import { useHistory, useParams } from "react-router";
import Modal from "../components/Modal";
import { deleteUser, getUser } from "../services/apiCall";
import EditForm from "./EditForm";

export default function UserDetail(props) {
  //console.log(props);
  const { id } = useParams();
  const [user, setUser] = React.useState(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const history = useHistory();

  const handleEdit = () => {
    setIsOpen(true);
  };

  const deleteData = async () => {
    await deleteUser(id);
    history.push(`/users`);
    //console.log(data);
  };

  const handleDelete = () => {
    deleteData();
  };

  const getData = async () => {
    const data = await getUser(id);
    if (data !== undefined) {
      setUser(data);
      //console.log(data);
    } else {
      history.push("/users");
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <Box className={`detailContainer`}>
      <Paper>
        <Box className={`productContainer`}>
          <Box className={`productImage`}>
            <img src={user?.image} alt={user?.name} height={`500px`} />
          </Box>
          <Box className={`productDetails`}>
            <Box>
              <Typography variant={`h3`}>{user?.name}</Typography>
            </Box>
            <Box>
              <Typography variant={`h4`}>{user?.email}</Typography>
            </Box>
            <Box>
              <Typography variant={`h5`}>{user?.gender}</Typography>
            </Box>
            <Box>
              <Typography variant={`h6`}>{user?.profession}</Typography>
            </Box>
            <Box>
              <Button
                variant={`outlined`}
                color={`primary`}
                onClick={handleEdit}
              >{`Edit`}</Button>
            </Box>
            <Box>
              <Button
                variant={`outlined`}
                color={`secondary`}
                onClick={handleDelete}
              >{`Delete`}</Button>
            </Box>
          </Box>
        </Box>

        <Modal isOpen={isOpen} title={`Edit Form`} setIsOpen={setIsOpen}>
          <EditForm
            setIsOpen={setIsOpen}
            item={user}
            setUser={setUser}
            type={`edit`}
          />
        </Modal>
      </Paper>
    </Box>
  );
}
