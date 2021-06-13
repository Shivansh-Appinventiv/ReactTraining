import "./index.css";

function checkValidUser({ username, password }) {
  let arr = [];
  arr = JSON.parse(window.localStorage.getItem("users")) || [];
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i].username.localeCompare(username) === 0 &&
      arr[i].password.localeCompare(password) === 0
    ) {
      console.log("match");
      return true;
    }
  }
  return false;
}

const LoginScreen = (props) => {
  let obj = {
    username: "",
    password: "",
  };

  const handleSubmit = () => {
    if (obj.username === "") {
      alert("Username Required");
    } else if (obj.password === "") {
      alert("Password Required");
    } else {
      let isUerValid = checkValidUser(obj);
      console.log(isUerValid);
      props.handleMovieScreen(isUerValid);
    }
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.name.localeCompare("username") === 0) {
      obj.username = e.target.value;
    } else if (e.target.name.localeCompare("password") === 0) {
      obj.password = e.target.value;
    }
  };

  return (
    <div className={`loginPageContainer`}>
      <div className={`formContainer`}>
        <form>
          <h1>{`LOGIN FORM`}</h1>
          <div className={`formField`}>
            <label htmlFor={`username`}>{`Username`}</label>
            <input
              type={`text`}
              name={`username`}
              id={`username`}
              placeholder={`Usernamer`}
              onChange={(e) => handleChange(e)}
              autoComplete={`off`}
            />
          </div>
          <div className={`formField`}>
            <label htmlFor={`password`}>{`Password`}</label>
            <input
              type={`password`}
              name={`password`}
              id={`password`}
              placeholder={`Password`}
              autoComplete={`off`}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button
            type={`button`}
            onClick={() => handleSubmit()}
          >{`Submit`}</button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
