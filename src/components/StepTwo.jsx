import { useState } from "react";

const StepTwo = () => {
  const [infoToEdit, setInfoToEdit] = useState(false);

  const handleEdit = (event) => {
    event.preventDefault();
    setFormIsFilled(false);
  };
  return (
    <>
      <header> Results </header>;
      <div className="container">
        <div>
          <form onSubmit={handleEdit}>
            <p> Name : {username}</p>
            <p> Email : {email}</p>
            <p> Password : {password}</p>
            <input
              className="edit-button"
              type="submit"
              value="Edit your information"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default StepTwo;
