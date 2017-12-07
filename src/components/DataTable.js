import React from "react";
import { Table, Button, Glyphicon } from 'react-bootstrap';

// Home page component
export default class DataTable extends React.Component {
    // render


    render() {

        //let datatype = this.props.datatype;

        return (

            <Table bordered hover responsive striped>
                <thead>
                    <tr>
                        {
                            Object.keys(this.props.dataObj[0]).map((fieldname, index) => <th key={index}>{fieldname}</th>)
                        }
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.dataObj.map((dataObject, index) => 
                            <tr key={index}>
                                {
                                    Object.values(this.props.dataObj[index]).map((value, count) => <td key={count}>{value}</td>)
                                }
                                <td>
                                    <a href={"/" + this.props.datatype + "-edit/" + (index + 1)}>
                                        <Button bsSize="xsmall">
                                            Edit <Glyphicon glyph="edit" />
                                        </Button>
                                    </a>
                                </td>
                                <td>

                                    <Button bsSize="xsmall">
                                        Delete <Glyphicon glyph="delete" />
                                    </Button>

                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        );
    }
}

