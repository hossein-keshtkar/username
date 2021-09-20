import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const addUserHnadler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Name!",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 0) {
      setError({
        title: "Invalid Age!",
        message: "Please enter a valid age ( > 0)",
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredAge("");
    setEnteredUserName("");
  };
  const userNameOnChangeHnadler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageOnChangeHnadler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHnadler}>
          <span htmlFor="username">Username</span>
          <input
            id="username"
            type="text"
            onChange={userNameOnChangeHnadler}
            value={enteredUserName}
          />
          <span htmlFor="age">Age (Years)</span>
          <input
            id="age"
            type="number"
            onChange={ageOnChangeHnadler}
            value={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
