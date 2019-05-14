import React from 'react';
import OrderTable from './OrderTable/orderTable';
import { restElement } from '@babel/types';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDataComplete: true,
            codigoCliente: '#234',
            nombreCliente: 'El Paraje Unicornio',
            cedulaJuridicaCliente: '3-101-737142',
            correoCliente: 'rmonge.68@gmail.com',
            telefonoCliente: '4445-3334',
            direccionCliente: 'Guanacaste',
            horasEquipo: '8',
            datosEquipo: 'NA',
            finca: '3',
            numeroOrden: '#88992',
            descripcionTrabajo: 'Reparacion Mando Final',
            digitador: '',
            tipoFactura: 'credito',
            observaciones: '',
            fecha: '',
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
    handleRow = (newRow, typeOfRow) => {
        console.log('this is the new row', newRow);
        if (typeOfRow === 'rubro') {
            this.setState({
                rowRubro: this.state.rowRubro.concat(newRow)
            })
        }
        else {
            this.setState({
                rowArticulo: this.state.rowArticulo.concat(newRow)
            })
        }
    }

    handleChange = (e, type) => {
        if (type === 'email') {
            this.setState({
                email: e.target.value,
            })
        }
        if (type === 'domain') {
            this.setState({
                domain: e.target.value,
            })
        }
        if (type === 'number') {
            this.setState({
                number: e.target.value,
            })
        }
        if (type === 'string') {
            this.setState({
                string: e.target.value,
            })
        }
    }
    render() {

        return (
            <div className="col-12 order display-flex ">
                <div className="col-12 create-card-height">
                    {
                        this.state.isDataComplete && <OrderTable
                            addRow={this.handleRow}
                            data={this.state}
                            rowArticulo={this.state.rowArticulo}
                        />
                    }
                </div>
            </div>
        );
    }
}

export default App;