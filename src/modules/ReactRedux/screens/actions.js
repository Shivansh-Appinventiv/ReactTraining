import axios from "axios";

export const incrementNumber = (number) => {
  return {
    type: "INCREMENT",
    payload: number,
  };
};

export const decrementNumber = (number) => {
  return {
    type: "DECREMENT",
    payload: number,
  };
};

export const getApiResult = (data) => {
  return {
    type: "GETDATA",
    payload: data,
  };
};

export const getDataAsync = (number) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(decrementNumber(number));
    }, 5000);
  };
};

export const getApiResultAsync = () => {
  return (dispatch) => {
    setTimeout(async() => {
      const result = await axios.get("https://reqres.in/api/unknown");
      console.log(result);
      dispatch(getApiResult(result.data.data));
    }, 1000);
  };
};
