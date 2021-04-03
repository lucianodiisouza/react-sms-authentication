import { useState } from "react";
import { LoginForm } from "../../components";
import firebase from "../../utils/firebase";

const Home = () => {
  const [number, setNumber] = useState();
  const [user, setUser] = useState({});
  const [code, setCode] = useState();
  const [displayLoginForm, setDisplayLoginForm] = useState(true);
  const [displayConfirmation, setDisplayConfirmation] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState();

  const setupRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          onSignInSubmit();
        },
      }
    );
  };

  const onSignInSubmit = (event) => {
    event.preventDefault();
    setupRecaptcha();
    const phoneNumber = `+55${number}`;
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((res) => {
        setDisplayLoginForm(false);
        setDisplayConfirmation(true);
        setConfirmationResult(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const validateCode = () => {
    confirmationResult
      .confirm(code)
      .then((result) => {
        setDisplayConfirmation(false);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <LoginForm
        number={number}
        setNumber={setNumber}
        onSignInSubmit={onSignInSubmit}
      />
    </>
  );
};

export default Home;
