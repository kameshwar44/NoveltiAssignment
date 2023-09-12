import React from "react";
import { Route, Routes } from "react-router";

import UpdateUser from "./Components/UpdateUser";
import DeleteUser from "./Components/DeleteUser";
import ViewUser from "./Components/ViewUser";
import Navbar from './Components/Navbar';
import AddUser from "./Components/AddUser";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<ViewUser/>} />
      <Route path="/add" element={<AddUser />} />
      <Route path="/Update" element={<UpdateUser />} />
      <Route path="/delete" element={<DeleteUser />} />
    </Routes>
    
    </>
  );
}

export default App;
