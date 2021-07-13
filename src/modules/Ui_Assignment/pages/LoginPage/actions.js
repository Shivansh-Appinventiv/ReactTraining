import axios from "axios";

const postLogin = (result) => {
  return {
    type: "LOGINPOST",
    payload: result,
  };
};

export const getLoginResult = (data) => {
  const url = "http://ltwarehousedevapi.appskeeper.in/api/v1/user/login";
  const obj = { ...data, companyCode: "AI" };
  const headers = {
    accept: "application/json",
    "Content-Type": "application/json",
  };
  return (dispatch) => {
    setTimeout(async () => {
      const result = await axios.post(url, obj, headers);
      console.log(result.data.data);
      dispatch(postLogin(result.data.data));
    }, 1000);
  };
};
