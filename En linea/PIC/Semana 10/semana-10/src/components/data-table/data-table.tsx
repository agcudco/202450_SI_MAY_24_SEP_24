import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'data-table',
  styleUrl: 'data-table.css',
  shadow: true,
})
export class DataTable {

  @State()
  users: any[] = [];

  componentWillLoad() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.users = data;
      })
      .catch(error => {
        console.log("error: " + error);
      })
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {
            this.users.map(user => (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}
