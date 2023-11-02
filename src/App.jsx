import { useState } from "react";

import "./App.css";

import Form from "./components/Form";
import StepTwo from "./components/StepTwo";

function App() {
  const [formIsFilled, setFormIsFilled] = useState(false);

  // state qui gère l'affichage ou non d'un message d'erreur si les deux mots de passe ne sont pas les mêmes

  const [showError, setShowError] = useState(false);

  return (
    <>
      {formIsFilled ? <StepTwo /> : <Form />}

      <footer>
        Made with <span>React</span> at <span>Le Reacteur</span> by
        <span>Nono</span>
      </footer>
    </>
  );
}

export default App;
