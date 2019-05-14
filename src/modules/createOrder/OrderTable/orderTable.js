import React from 'react';
import { Table } from 'reactstrap';
import img1 from '../../../assets/img1.jpg';
import img2 from '../../../assets/img2.jpg';

export default class Example extends React.Component {
    constructor(props) {
        super(props);
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
                unidad: '',
                code: 'test',
                description: 'test',
                totalUnitario: '',
                iva: 'test',
                subtotal: 'test',
                descuento: 'test',

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
                        <td colSpan={4}>rmonge.68@gmail.com  rocaservicios17@gmail.com</td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="black-text">Detalle del Trabajo</td>
                        <td colSpan={7}>Reparacion de Mando  final</td>
                        <td className="black-text" colSpan={1}># Orden</td>
                        <td colSpan={1}>333</td>
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
                        <td>333</td>
                        <td colSpan={2}>El Paraje Unicornio</td>
                        <td>rmonge.68@gmail.com</td>
                        <td>3333-3333</td>
                        <td>Bagaces, Guanacaste</td>
                        <td>4</td>
                        <td colSpan={3}>Varias Pruebas</td>
                        <td>NA</td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="black-text">Observaciones</td>
                        <td colSpan={9}>Necesidad de traer materiales fuera del pais</td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="black-text">Digitador</td>
                        <td colSpan={5}>Cesar Gamboa Avellan</td>
                        <td colSpan={2} className="black-text">Fecha</td>
                        <td colSpan={2}>4/13/2019</td>

                    </tr>
                    <tr>
                        <td colSpan={5}></td>
                        <td colSpan={1} className="black-text">Contado</td>
                        <td colSpan={1}></td>
                        <td colSpan={1} className="black-text">Credito</td>
                        <td colSpan={1}>x</td>
                        <td colSpan={1} className="black-text">Plazo</td>
                        <td colSpan={1} className="black-text"></td>
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
                        <td colSpan={1}><input type="text" onChange=
                            {(e) => this.handleInputChange(e, 'unidad')}>
                        </input></td>
                        <td colSpan={1}><input type="text" onChange=
                            {(e) => this.handleInputChange(e, 'codigo')}>
                        </input></td>
                        <td colSpan={2}>
                            <input type="text" onChange=
                                {(e) => this.handleInputChange(e, 'descripcion')}>
                            </input>
                        </td>
                        <td colSpan={2}><input type="text" onChange=
                            {(e) => this.handleInputChange(e, 'tiempo')}>
                        </input></td>
                        <td colSpan={1}><input type="text" onChange=
                            {(e) => this.handleInputChange(e, 'iva')}>
                        </input></td>
                        <td colSpan={1}><input type="text" onChange=
                            {(e) => this.handleInputChange(e, 'costoRubro')}>
                        </input></td>
                        <td colSpan={1}><input type="text" onChange=
                            {(e) => this.handleInputChange(e, 'descuento')}>
                        </input></td>
                        <td colSpan={1}><input type="text" onChange=
                            {(e) => this.handleInputChange(e, 'total')}>
                        </input></td>
                        <td colSpan={1}>
                            <button onClick={() => this.props.addRow(this.state.emptyRow, 'rubro')}>
                                <i class="material-icons">
                                    add_circle_outline
                    </i>
                            </button>
                        </td>
                    </tr>
                    {
                        this.props.rowRubro.map((rowsElement) => {
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
                                    <td colSpan={1}><i class="material-icons">
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
                        <td colSpan={1}><input type="text" onChange=
                            {(e) => this.handleInputChange(e, 'unidad')}>
                        </input></td>
                        <td colSpan={1}><input type="text" onChange=
                            {(e) => this.handleInputChange(e, 'codigo')}>
                        </input></td>
                        <td colSpan={2}>
                            <input type="text" onChange=
                                {(e) => this.handleInputChange(e, 'descripcion')}>
                            </input>
                        </td>
                        <td colSpan={2}><input type="text" onChange=
                            {(e) => this.handleInputChange(e, 'tiempo')}>
                        </input></td>
                        <td colSpan={1}><input type="text" onChange=
                            {(e) => this.handleInputChange(e, 'iva')}>
                        </input></td>
                        <td colSpan={1}><input type="text" onChange=
                            {(e) => this.handleInputChange(e, 'costoRubro')}>
                        </input></td>
                        <td colSpan={1}><input type="text" onChange=
                            {(e) => this.handleInputChange(e, 'descuento')}>
                        </input></td>
                        <td colSpan={1}><input type="text" onChange=
                            {(e) => this.handleInputChange(e, 'total')}>
                        </input></td>
                        <td colSpan={1}>
                            <button onClick={() => this.props.addRow(this.state.emptyRow)}>
                                <i class="material-icons">
                                    add_circle_outline
                    </i>
                            </button>
                        </td>
                    </tr>
                    {
                        this.props.rowArticulo.map((articulo) => {
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
                                <td colSpan={1}><i class="material-icons">
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
                        <td colSpan={6}>
                            <img src={img1} className="img-bill" alt="dummy1" />
                            <img src={img2} alt="dummy2" className="img-bill" />
                        </td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}