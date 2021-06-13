import "./index.css";

const SignUpScreen = (props) => {
  let obj = {
    username: "",
    email: "",
    password: "",
  };
  const handleSubmit = () => {
    console.log(obj);
    if (obj.username === "") {
      alert("Username Required");
    } else if (obj.email === "") {
      alert("Email Required");
    } else if (obj.password === "") {
      alert("Password Required");
    } else {
      let arr = [];
      arr = JSON.parse(window.localStorage.getItem("users")) || [];
      arr.push(obj);
      window.localStorage.setItem("users", JSON.stringify(arr));
      props.handleLogin(true);
    }
  };

  const handleChange = (e) => {
    //console.log(e.target.value);
    if (e.target.name.localeCompare("username") === 0) {
      obj.username = e.target.value;
    } else if (e.target.name.localeCompare("email") === 0) {
      obj.email = e.target.value;
    } else if (e.target.name.localeCompare("password") === 0) {
      obj.password = e.target.value;
    }
  };

  return (
    <div className={`signUpPageContainer`}>
      <div className={`formContainer`}>
        <form>
          <h1>{`SIGN UP FORM`}</h1>
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
            <label htmlFor={`email`}>{`Email`}</label>
            <input
              type={`email`}
              name={`email`}
              id={`email`}
              placeholder={`Email`}
              pattern={`[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2, 4}$`}
              autoComplete={`off`}
              onChange={(e) => handleChange(e)}
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

export default SignUpScreen;
