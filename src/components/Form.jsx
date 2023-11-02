import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [formIsFilled, setFormIsFilled] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  const handleConfirmedPasswordChange = (event) => {
    setConfirmedPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();

    if (confirmedPassword !== password) {
      setShowError(true);
      alert("Vos deux mots de passe ne sont pas identiques");
    } else {
      setFormIsFilled(true);
    }
  };
  return (
    <>
      <header> Create Account </header>;
      <div className="container">
        <div>
          <form onSubmit={handleSubmit}>
            <span className="desc">Name</span>

            <input
              type="text"
              placeholder="Jean Dupont"
              name="username"
              onChange={handleUsernameChange}
              value={username}
            />
            <span className="desc">Email</span>

            <input
              type="email"
              placeholder="jean.dupont@lereacteur.io"
              name="email"
              onChange={handleEmailChange}
              value={email}
            />
            <span className="desc">Password</span>

            <input
              type="password"
              placeholder="azertyui"
              name="password"
              onChange={handlePasswordChange}
              value={password}
            />
            <span className="desc">Confirm password</span>

            <input
              type="password"
              placeholder="azertyui"
              name="confirmed-password"
              onChange={handleConfirmedPasswordChange}
              value={confirmedPassword}
            />
            <input className="submit-button" type="submit" value="Register" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
