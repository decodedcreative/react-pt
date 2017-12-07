import React from "react";
import DataTable from "./DataTable";


// Home page component
export default class Home extends React.Component {

    // render
    render() {

        const {clients} = this.props;

        return (
            <div className="page-home">
                <DataTable dataObj={clients} datatype="client" />
            </div>
        );
    }
}
