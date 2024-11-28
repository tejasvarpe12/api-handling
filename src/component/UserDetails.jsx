import "../App.css";
import { useEffect, useState } from "react";

function UserDetails() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.freeapi.app/api/v1/public/randomusers"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch users...");
        }
        const data = await response.json();
        setUsers(data.data.data);
        console.log("Users-->", data.data.data);
      } catch (error) {
        console.log("Error Occured!");
      }
    };
    fetchData();
  }, []);
  
  const handleUserClick = (user) => {
    setSelectedUser(user);
  }

  return (
    <div className="main-container">
      {/* <h1>User Details</h1> */}

      {/* right side container with user images and name */}
      <div className="left-container">
        <h2>Select User</h2>
        {users.map((user) => (
          <div key={user.id}  onClick={() => handleUserClick(user)}>
            <img src={user.picture.thumbnail} alt="" />{" "}
            <span>{user.name.title}. {user.name.first}</span>
          </div>
        ))}
      </div>

      {/* left side container with selected user's details */}
      <div className="right-container">
        <h2>User details</h2>

         {selectedUser ? 
         (<table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Gender</td>
                <td>DOB</td>
                <td>Email</td>
                <td>City</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{selectedUser.name.title}. {selectedUser.name.first} {selectedUser.name.last}</td>
                <td>{selectedUser.gender}</td>
                <td>{selectedUser.dob.date}</td>
                <td>{selectedUser.email}</td>
                <td>{selectedUser.location.city}</td>
              </tr>
            </tbody>
          </table>)
        : 
        (
          <p>Select user to view the details... </p>
        )  
        }

      </div>
    </div>
  );
}

export default UserDetails;
