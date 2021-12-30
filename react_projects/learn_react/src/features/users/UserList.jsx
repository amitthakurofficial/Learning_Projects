import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


export function UserList() {
  const users = useSelector((state) => state.users);
  const history = useHistory();

    return (
        
      <div className="container">
        <div className="row">
          <h1>Redux CRUD User app</h1>
        </div>
        <div className="row">
          <div className="two columns">
            <button className="button-primary">Load users</button>
          </div>
          <div className="two columns">
            <button className="button-primary" onClick ={()=> history.push}>Add user</button>
          </div>
        </div>
        <div className="row">
          <table class="u-full-width">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {users.map(({ id, name, email }, i) => (
              <tr key={i}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                  <button>Delete</button>
                  <button>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
          </table>
        </div>
      </div>
    );
  }