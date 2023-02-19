import "./App.css";

function App() {

  let users = [
    {
      id: 1,
      firstName: "Henry",
      lastName: "Martins",
      age: 24,
      birth: "2/05/2001",
      gender: "male",
      task1: 10,
      task2: 6,
      grade: 16,
    },
    {
      id: 2,
      firstName: "james",
      lastName: "Ugo",
      age: 20,
      birth: "5/08/1998",
      gender: "male",
      task1: 9,
      task2: 8,
      grade: 17,
    },
    
    {
      id: 3,
      firstName: "gabriel",
      lastName: "John",
      age: 23,
      birth: "9/12/2000",
      gender: "male",
      task1: 5,
      task2: 6,
      grade: 11,
    },
    
    {
      id: 4,
      firstName: "Chioma",
      lastName: "Okorie",
      age: 26,
      birth: "12/11/2004",
      gender: "female",
      task1: 9,
      task2: 9,
      grade: 18,
    },
    
    {
      id: 5,
      firstName: "Joshua",
      lastName: "Monday",
      age: 19,
      birth: "6/10/1999",
      gender: "male",
      task1: 5,
      task2: 4,
      grade: 9,
    },
    
    {
      id: 6,
      firstName: "Okezie",
      lastName: "Oko",
      age: 22,
      birth: "23/08/1987",
      gender: "male",
      task1: 9,
      task2: 10,
      grade: 19,
    },
    
  ];

  return (
    
    <div className="content-table">
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>First name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Birth Date</th>
            <th>Gender</th>
            <th>Task 1 (10)</th>
            <th>Task 2 (10)</th>
            <th>grade</th>
          </tr>
        </thead>

        <tbody>
          {users.map(user => {
            return <tr>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
              <td>{user.birth}</td>
              <td>{user.gender}</td>
              <td>{user.task1}</td>
              <td>{user.task2}</td>
              <td>{user.grade}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
