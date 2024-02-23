import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

import { Button } from "@mui/material";

import "./Login.scss";

function Login() {
  const signIn = () => {
    signInWithPopup(auth, provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__img-box">
        <img
          src="../../../public/image/discordIcon.png"
          alt=""
          className="login__logo"
        />
      </div>
      <Button onClick={signIn} className="login__btn">
        Login
      </Button>
    </div>
  );
}

export default Login;
