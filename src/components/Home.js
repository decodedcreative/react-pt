import React from "react";
import clients from "../data/clients";

import DataTable from "./DataTable";

const dataObjectsArray = clients;

// Home page component
export default class Home extends React.Component {
    // render
    render() {
        return (
            <div className="page-home">
                <DataTable dataObj={clients} />
            </div>
        );
    }
}
