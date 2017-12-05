import React from "react";


// Home page component
export default class DataTable extends React.Component {
    // render
    render() {
        return (

            <table className="table-striped table">
                <thead>
                    <tr>
                        {
                            Object.keys(this.props.dataObj[0]).map((fieldname, index) => <th key={index}>{fieldname}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.dataObj.map((dataObject, index) => 
                            <tr key={index}>
                                {
                                    Object.values(this.props.dataObj[index]).map((value, count) => <td key={count}>{value}</td>)
                                }
                            </tr>
                        )
                    }
                </tbody>
            </table>
        );
    }
}
