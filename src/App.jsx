import { useState } from "react";

import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    console.log(event.target);
    // setPassword(event.target.value);
  };

  const handleConfirmedPasswordChange = (event) => {
    setConfirmedPassword(event.target.value);
  };

  // state qui gère l'affichage ou non d'un message d'erreur si les deux mots de passe ne sont pas les mêmes

  const [showError, setShowError] = useState(false);

  // vérifier que le 2ème mdp est le même que le premier

  if (confirmedPassword !== password) {
    setShowError(true);
  }

  const handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();
  };

  return (
    <>
      <header> Create account</header>

      <div className="container">
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

      <footer>
        Made with <span>React</span> at <span>Le Reacteur</span> by{" "}
        <span>Nono</span>
      </footer>
    </>
  );
}

export default App;
