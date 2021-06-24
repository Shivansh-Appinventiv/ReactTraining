import axios from "axios";

export async function users() {
  //const [users, setUsers] = React.useState([]);
  try {
    const result = await axios.get("http://localhost:8000/users");
    const data = result.data;
    //console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getUser(id) {
  //console.log(id);
  try {
    const data = await users();
    //console.log(data);
    return data.find((obj) => obj.id === Number(id));
  } catch (err) {
    console.error(err);
  }
}

export async function updateUser(item) {
  try {
    const result = await axios.patch(
      `http://localhost:8000/users/${item.id}`,
      item
    );
    //console.log(result);
    return result.data;
  } catch (err) {
    console.error(err);
  }
}

export async function addUser(item) {
  try {
    const data = await users();
    const result = await axios.post(`http://localhost:8000/users`, {
      id: data[data.length - 1].id + 1,
      ...item,
    });
    return result.data;
  } catch (err) {
    console.error(err);
  }
}

export async function deleteUser(id) {
  try {
    await axios.delete(`http://localhost:8000/users/${id}`);
    //console.log(result);
    return;
  } catch (err) {
    console.error(err);
  }
}
