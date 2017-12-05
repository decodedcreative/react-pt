import React from "react";
import clients from "../data/clients";


// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                </tr>
            </thead>
            <tbody>

                {clients.map((client, index) => 
                    <tr key={index}>
                        <th scope="row">{client.id}</th>
                        <td>{client.firstname}</td>
                        <td>{client.surname}</td>
                    </tr>
                )}

            </tbody>
        </table>
      </div>
    );
  }
}
