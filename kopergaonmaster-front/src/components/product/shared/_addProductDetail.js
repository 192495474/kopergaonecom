import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Row,Col, Button} from 'react-bootstrap';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const INITIAL_STATE = {
  columnDefs: [
    { headerName: "Color", field: "color",cellStyle: {'border-color': 'grey'},editable:true },
    { headerName: "Size", field: "size",cellStyle: {'border-color': 'grey'},editable:true },
    { headerName: "Quantity", field: "quantity",cellStyle: {'border-color': 'grey'} ,editable:true},
    { headerName: "Price", field: "price",cellStyle: {'border-color': 'grey'} ,editable:true},
    { headerName: "Status", field: "status",cellStyle: {'border-color': 'grey'} ,editable:true},
    { headerName: "ProductId", field: "productid",cellStyle: {'border-color': 'grey'} }
  ],
  rowData: [
    { color: "", size: "", quantity: "",price:"",status:"",productid:"" }]
};

class AddProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  createNewRowData=() =>{
     var addRow= [{ color: "", size: "", quantity: "",price:"",status:"",productid:"" }]
     this.setState({
      rowData:[...this.state.rowData,addRow],
     });
    }

  render() {
    return (
      <div className="ag-theme-alpine" style={ {height: '200px', width: '100%'} }>
        <Row className="show-grid"  align="Right">
        <Col>
        <Button onClick={this.createNewRowData} variant="success">Add New Row</Button>
        </Col>
        </Row>
        <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}>
        </AgGridReact>
      </div>
    );
  }
}

export default AddProductDetail;