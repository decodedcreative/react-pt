import React from "react";
import clients from "../data/clients";

const dataObjectsArray = clients;

// Home page component
export default class Home extends React.Component {
    // render
    render() {
        return (
            <div className="page-home">
                <table className="table">
                    <thead>
                        <tr>
                            {
                                Object.keys(dataObjectsArray[0]).map(
                                    (fieldname, index) => <th key={index}>{fieldname}</th>
                                )
                            }
                        </tr>
                    </thead>
                    <tbody>

                    {
                        dataObjectsArray.map(
                            (dataObject, index) => 
                                <tr key={index}>
                                    {
                                        Object.values(dataObjectsArray[index]).map(
                                            (value, count) => <td key={count}>{value}</td>
                                        )
                                    }
                                </tr>
                        )
                    }

                    </tbody>
                </table>
            </div>
        );
    }
}
