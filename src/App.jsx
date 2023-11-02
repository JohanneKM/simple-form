import { useState } from "react";

import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [formIsFilled, setFormIsFilled] = useState(false);
  const [displayStyleForm, setDisplayStyleForm] = useState("to-display");
  const [displayStyleResults, setDisplayStyleResults] = useState("to-hide");
  const [infoToEdit, setInfoToEdit] = useState(false);

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

  // state qui gère l'affichage ou non d'un message d'erreur si les deux mots de passe ne sont pas les mêmes

  const [showError, setShowError] = useState(false);

  // vérifier que le 2ème mdp est le même que le premier

  const handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();

    if (confirmedPassword !== password) {
      setShowError(true);
      alert("Vos deux mots de passe ne sont pas identiques");
    } else {
      setFormIsFilled(true);
      setDisplayStyleForm("to-hide");
      setDisplayStyleResults("to-display");
    }

    const handleEdit = (event) => {
      setInfoToEdit(true);
      setDisplayStyleForm("to-display");
      setDisplayStyleResults("to-hide");
    };

    console.log(infoToEdit);
  };

  return (
    <>
      <header> {formIsFilled ? "Results" : "Create Account"} </header>

      <div className="container">
        <div className={displayStyleForm}>
          <form onSubmit={handleSubmit}>
            <span className="desc">Name</span>

            <input
              type="text"
              placeholder={infoToEdit ? { username } : "Jean Dupont"}
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
      <div className="container">
        <div className={displayStyleResults}>
          <p> Name : {username}</p>
          <p> Email : {email}</p>
          <p> Password : {password}</p>
          <input
            className="edit-button"
            type="submit"
            value="Edit your information"
          />
        </div>
      </div>

      <footer>
        Made with <span>React</span> at <span>Le Reacteur</span> by
        <span>Nono</span>
      </footer>
    </>
  );
}

export default App;
