import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface UserData {
  _id: number;
  username: string;
  post: number;
  following: number;
  follower: number;
}

const MainAdmin: React.FC = (): JSX.Element => {
  const [users, setUsers] = useState<UserData[]>([]);

  const getUsers = () => {
    axios
      .get("http://localhost:6060/users")
      .then((res) => {
        if (Array.isArray(res.data)) {
          setUsers(res.data);
        } else {
          console.error("Invalid data format received.");
        }
      })
      .catch((error: Error) => {
        console.error("Error fetching data: ", error);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleDelete = async (id: number) => {
    console.log("id", id);
    try {
      await axios.delete(`http://localhost:6060/users/${id}`);
      getUsers();
    } catch (error: any) {
      console.error("Error deleting user: ", error);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>UserName</TableCell>
            <TableCell align="right">Post</TableCell>
            <TableCell align="right">Following</TableCell>
            <TableCell align="right">Follower</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((item: UserData, idx) => (
            <TableRow
              key={idx}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.username}
              </TableCell>
              <TableCell align="right">{item.post}</TableCell>
              <TableCell align="right">{item.following}</TableCell>
              <TableCell align="right">{item.follower}</TableCell>
              <TableCell align="right">
                <button onClick={() => handleDelete(item._id)}>Delete</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MainAdmin;

// axios
//   .get<UserData[]>("http://localhost:6060/users")
//   .then((res: AxiosResponse<UserData[]>) => setUsers(res.data))
//   .catch((error: Error) => {
//     console.error("Error fetching data: ", error);
//   });
