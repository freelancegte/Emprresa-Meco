import React from 'react';
import { Table } from 'reactstrap';
import DropZone from '../../../components/DropZone/dropzone';

export default class Example extends React.Component {
    constructor(props) {
        super(props);
        // mock data, we are adding this row
        this.state = {
            emptyRow: {
                unidad: 'test',
                code: 'test',
                description: 'test',
                timeStart: 'test',
                timeEnd: 'test',
                iva: 'test',
                costByRubro: 'test',
                descuento: 'test',
            },
            rowArticle: {
                unidad: 0.25,
                code: 'MO001',
                description: 'Desmontaje y Mando Final',
                totalUnitario: '9.00',
                iva: '4.10',
                subTotal: '2.25',
                descuento: '-',

            }
        }
    }
    handleInputChange = (evento, type) => {
        console.log(evento.target.value, type);
    }

    render() {
        return (
            <Table className="table-father" bordered responsive >
                <thead>
                    <tr className="bg-row-color">
                        <th colSpan={3} className="white-text">ROCA SERVICIOS</th>
                        <th colSpan={4} className="white-text">ORDEN DE TRABAJO</th>
                        <th colSpan={4} className="white-text">Bagaces Gte. 8321-4114</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={2} className="black-text">Datos empresa</td>
                        <td colSpan={5}>El Paraje Del unicornio S,A  3-101-737142</td>
                        <td colSpan={4}>{this.props.data.correoCliente}  rocaservicios17@gmail.com</td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="black-text">Detalle del Trabajo</td>
                        <td colSpan={7}>{this.props.data.descripcionTrabajo}</td>
                        <td className="black-text" colSpan={1}># Orden</td>
                        <td colSpan={1}>{this.props.data.numeroOrden}</td>
                    </tr>
                    <tr>
                        <td className="black-text">CDGO cliente</td>
                        <td colSpan={2} className="black-text">Nombre Cliente</td>
                        <td className="black-text">Correo</td>
                        <td className="black-text">Telefono</td>
                        <td className="black-text">Direccion</td>
                        <td className="black-text">Horas Equipo</td>
                        <td className="black-text" colSpan={3}>Datos Equipo</td>
                        <td className="black-text">Finca</td>
                    </tr>
                    <tr>
                        <td>{this.props.data.codigoCliente}</td>
                        <td colSpan={2}>{this.props.data.nombreCliente}</td>
                        <td>{this.props.data.correoCliente}</td>
                        <td>{this.props.data.telefonoCliente}</td>
                        <td>{this.props.data.direccionCliente}</td>
                        <td>4</td>
                        <td colSpan={3}>{this.props.data.datosEquipo}</td>
                        <td>{this.props.data.finca}</td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="black-text">Observaciones</td>
                        <td colSpan={9}>{this.props.data.observaciones}</td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="black-text">Digitador</td>
                        <td colSpan={5}>{this.props.data.digitador}</td>
                        <td colSpan={2} className="black-text">Fecha</td>
                        <td colSpan={2}>{this.props.data.fecha}</td>

                    </tr>
                    <tr>
                        <td colSpan={5}></td>
                        <td colSpan={1} className="black-text">Contado</td>
                        <td colSpan={1}>{this.props.data.tipoFactura === 'contado' ? 'x' : ''}</td>
                        <td colSpan={1} className="black-text">Credito</td>
                        <td colSpan={1}>{this.props.data.tipoFactura === 'credito' ? 'x' : ''}</td>
                        <td colSpan={1} className="black-text">Plazo</td>
                        <td colSpan={1} className="black-text">{this.props.data.tipoFactura === 'plazo' ? 'x' : ''}</td>
                    </tr>
                </tbody>
                <thead className="table-no-border">
                    <tr className="bg-row-color">
                        <td colSpan={1} className="white-text">Unidad</td>
                        <td colSpan={1} className="white-text">Codigo</td>
                        <td colSpan={2} className="white-text">Descripcion del trabajo

                        </td>
                        <td colSpan={2} className="white-text">Tiempo</td>
                        <td colSpan={1} className="white-text">I.V.A</td>
                        <td colSpan={1} className="white-text">Costo M.O por rubro</td>
                        <td colSpan={1} className="white-text">Descuento</td>
                        <td colSpan={1} className="white-text">Total</td>
                        <td colSpan={1}></td>
                    </tr>
                </thead>
                <tbody className="table-no-border">

                    <tr>
                        <td colSpan={1}><input
                            type="text"
                            className="row-inputs"
                            onChange=
                            {(e) => this.handleInputChange(e, 'unidad')}>
                        </input></td>
                        <td colSpan={1}><input className="row-inputs" type="text" onChange=
                            {(e) => this.handleInputChange(e, 'codigo')}>
                        </input></td>
                        <td colSpan={2}>
                            <input type="text" className="row-inputs" onChange=
                                {(e) => this.handleInputChange(e, 'descripcion')}>
                            </input>
                        </td>
                        <td colSpan={2}><input className="row-inputs" type="text" onChange=
                            {(e) => this.handleInputChange(e, 'tiempo')}>
                        </input></td>
                        <td colSpan={1}><input className="row-inputs" type="text" onChange=
                            {(e) => this.handleInputChange(e, 'iva')}>
                        </input></td>
                        <td colSpan={1}><input className="row-inputs" type="text" onChange=
                            {(e) => this.handleInputChange(e, 'costoRubro')}>
                        </input></td>
                        <td colSpan={1}><input className="row-inputs" type="text" onChange=
                            {(e) => this.handleInputChange(e, 'descuento')}>
                        </input></td>
                        <td colSpan={1}><input className="row-inputs" type="text" onChange=
                            {(e) => this.handleInputChange(e, 'total')}>
                        </input></td>
                        <td colSpan={1}>
                            <button className="row-button" onClick={() => this.props.addRow(this.state.emptyRow, 'rubro')}>
                                <i class="material-icons add-icon">
                                    add_circle_outline
                    </i>
                            </button>
                        </td>
                    </tr>
                    {
                        this.props.data.rowRubro.map((rowsElement) => {
                            return (
                                <tr>
                                    <td colSpan={1}>{rowsElement.unidad}</td>
                                    <td colSpan={1}>{rowsElement.code}</td>
                                    <td colSpan={2}>{rowsElement.description}

                                    </td>
                                    <td colSpan={2}>{`${rowsElement.timeStart} - ${rowsElement.timeEnd} (8h 30m)`}</td>
                                    <td colSpan={1}>${rowsElement.iva}</td>
                                    <td colSpan={1}>${rowsElement.costByRubro}</td>
                                    <td colSpan={1}>${rowsElement.descuento}</td>
                                    <td colSpan={1}>$42</td>
                                    <td colSpan={1}><i class="material-icons remove-icon">
                                        remove_circle_outline
                    </i></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                <thead className="table-no-border">
                    <tr className="bg-row-color">
                        <td colSpan={1} className="white-text">Unidad</td>
                        <td colSpan={1} className="white-text">Codigo</td>
                        <td colSpan={2} className="white-text">Descripcion del trabajo

                        </td>
                        <td colSpan={2} className="white-text">Total unitario</td>
                        <td colSpan={1} className="white-text">I.V.A</td>
                        <td colSpan={1} className="white-text">Subtotal</td>
                        <td colSpan={1} className="white-text">Descuento</td>
                        <td colSpan={1} className="white-text">Total</td>
                        <td colSpan={1}></td>
                    </tr>
                </thead>
                <tbody className="table-no-border">

                    <tr>
                        <td colSpan={1}><input className="row-inputs" type="text" onChange=
                            {(e) => this.handleInputChange(e, 'unidad')}>
                        </input></td>
                        <td colSpan={1}><input className="row-inputs" type="text" onChange=
                            {(e) => this.handleInputChange(e, 'codigo')}>
                        </input></td>
                        <td colSpan={2}>
                            <input type="text" className="row-inputs" onChange=
                                {(e) => this.handleInputChange(e, 'descripcion')}>
                            </input>
                        </td>
                        <td colSpan={2}><input className="row-inputs" type="text" onChange=
                            {(e) => this.handleInputChange(e, 'tiempo')}>
                        </input></td>
                        <td colSpan={1}><input className="row-inputs" type="text" onChange=
                            {(e) => this.handleInputChange(e, 'iva')}>
                        </input></td>
                        <td colSpan={1}><input className="row-inputs" type="text" onChange=
                            {(e) => this.handleInputChange(e, 'costoRubro')}>
                        </input></td>
                        <td colSpan={1}><input className="row-inputs" type="text" onChange=
                            {(e) => this.handleInputChange(e, 'descuento')}>
                        </input></td>
                        <td colSpan={1}><input className="row-inputs" type="text" onChange=
                            {(e) => this.handleInputChange(e, 'total')}>
                        </input></td>
                        <td colSpan={1}>
                            <button className="row-button" onClick={() => this.props.addRow(this.state.rowArticle)}>
                                <i class="material-icons add-icon">
                                    add_circle_outline
                    </i>
                            </button>
                        </td>
                    </tr>
                    {
                        this.props.data.rowArticulo.map((articulo) => {
                            return (<tr>
                                <td colSpan={1}>{articulo.unidad}</td>
                                <td colSpan={1}>{articulo.code}</td>
                                <td colSpan={2}>{articulo.description}

                                </td>
                                <td colSpan={2}>${articulo.totalUnitario}</td>
                                <td colSpan={1}>${articulo.iva}</td>
                                <td colSpan={1}>${articulo.subTotal}</td>
                                <td colSpan={1}>{articulo.descuento}</td>
                                <td colSpan={1}>$2.54</td>
                                <td colSpan={1}><i class="material-icons remove-icon">
                                    remove_circle_outline
                            </i></td>
                            </tr>)
                        })
                    }
                </tbody>
                <tbody className="table-no-border">
                    <tr className="bg-row-color">
                        <td colSpan={6} className="white-text">Totales</td>
                        <td colSpan={1} className="white-text">$1000</td>
                        <td colSpan={1} className="white-text">$100</td>
                        <td colSpan={1} className="white-text">$200</td>
                        <td colSpan={1} className="white-text">$954</td>
                        <td colSpan={1}></td>
                    </tr>
                </tbody>
                <thead className="table-no-border">
                    <tr className="white-bg">
                        <td colSpan={10}></td>
                    </tr>
                    <tr>
                        <td colSpan={4} className="black-text">Resumen</td>
                        <td colSpan={7} className="black-text">Imagenes</td>
                    </tr>
                </thead>
                <tbody className="table-no-border">
                    <tr>
                        <td colSpan={4}>
                            <div className="display-grid">
                                <span>DESMONTAR MANDO FINAL POR FUAGA</span>
                                <span>AJUSTE DEL MANDO</span>
                                <span>REPUESTOS A INSTALAR</span>
                                <span>PROCESO DE ARMADO</span>
                                <span>MANDO ARMADO</span>
                                <span>MANDO INSTALADO</span>
                                <span>PRUEBA REALIZADA UNA DESPUES DEL INTALACION DEL MANDO</span>
                            </div>
                        </td>
                        <td colSpan={7}>
                            <DropZone />
                        </td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}