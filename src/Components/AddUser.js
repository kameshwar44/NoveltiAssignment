import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
} from "@mui/material";
import React, { useState } from "react";



const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

function AddUser() {
  const defaultValue = {
    name: "",
    username: "",
    email: "",
    phone: "",
  };

  const [user, setUser] = useState(defaultValue);

  const onValueChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const addUserDetails = async() => {
  

  };

  return (
    <>
      <Container>
        <Typography variant="h4">Create User</Typography>
        <FormControl>
          <InputLabel>Name:</InputLabel>
          <Input name="name" onChange={onValueChange} type="text" value={user.name} />
        </FormControl>
        <FormControl>
          <InputLabel>UserName:</InputLabel>
          <Input name="username" onChange={onValueChange} type="text"  value={user.username} />
        </FormControl>
        <FormControl>
          <InputLabel>Email:</InputLabel>
          <Input name="email" onChange={onValueChange} type="email"  value={user.email} />
        </FormControl>
        <FormControl>
          <InputLabel>Phone:</InputLabel>
          <Input name="phone" onChange={onValueChange} type="number" value={user.phone} />
        </FormControl>

        <FormControl>
          <Button variant="contained" onClick={() => addUserDetails()}>
            Add User
          </Button>
        </FormControl>
      </Container>
    </>
  );
}

export default AddUser;
