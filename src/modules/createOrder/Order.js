import React from 'react';
import OrderTable from './OrderTable/orderTable';




class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            rowRubro: [
                {
                    unidad: 1,
                    code: 'MO001',
                    description: 'Desmontaje y Mando Final',
                    timeStart: '8:30',
                    timeEnd: '17:00',
                    iva: '4.10',
                    costByRubro: '35',
                    descuento: '3.5',
                }
            ],
            rowArticulo: [
                {
                    unidad: 0.25,
                    code: 'MO001',
                    description: 'Desmontaje y Mando Final',
                    totalUnitario: '9.00',
                    iva: '4.10',
                    subTotal: '2.25',
                    descuento: '-',
                }
            ],
        }
    }
    handleSubmit = () => {
        console.log('submit');
    }
    handleRow = (newRow) => {
        console.log('this is the new row', newRow);
        this.setState({
            rowRubro: this.state.rowRubro.concat(newRow)
        })
    }
    render() {
        return (
            <div className="col-12 order display-flex ">
                <div className="col-12 create-card-height">
                    <OrderTable
                        emptyRow={this.state.emptyRow}
                        rowRubro={this.state.rowRubro}
                        addRow={this.handleRow}
                        rowArticulo={this.state.rowArticulo}
                    />
                </div>
            </div>
        );
    }
}

export default App;