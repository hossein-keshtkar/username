import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";
import React, { useState } from "react";

function App() {
  const [userLists, setUserLists] = useState([]);
  const AddUserHandler = (uName, uAge) => {
    setUserLists((prevsUsersList) => {
      return [
        { name: uName, age: uAge, id: Math.random().toString() },
        ...prevsUsersList,
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={AddUserHandler}></AddUser>
      <UsersList users={userLists}></UsersList>
    </div>
  );
}

export default App;
