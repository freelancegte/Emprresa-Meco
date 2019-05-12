import React from 'react';
import { Table } from 'reactstrap';

export default class Example extends React.Component {
    render() {
        return (
            <Table bordered responsive className="table-father">
                <thead>
                    <tr className="bg-row-color">
                        <th colSpan={3}>ROCA SERVICIOS</th>
                        <th colSpan={4}>ORDEN DE TRABAJO</th>
                        <th colSpan={3}>Bagaces Gte. 8321-4114</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={2}>Datos empresa</td>
                        <td colSpan={5}>El Paraje Del unicornio S,A  3-101-737142</td>
                        <td colSpan={3}>rmonge.68@gmail.com  rocaservicios17@gmail.com</td>
                    </tr>
                    <tr>
                        <td colSpan={10}>Reparacion de Mando  final</td>
                    </tr>
                    <tr>
                        <td>CDGO cliente</td>
                        <td colSpan={2}>Nombre Cliente</td>
                        <td>Correo</td>
                        <td>Telefono</td>
                        <td>Direccion</td>
                        <td>Horas Equipo</td>
                        <td colSpan={2}>Datos Equipo</td>
                        <td>Finca</td>
                    </tr>
                    <tr className="gray-color-bg">
                        <td></td>
                        <td colSpan={2}></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td colSpan={2}></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Observaciones</td>
                        <td colSpan={10}></td>
                    </tr>
                    <tr className="gray-color-bg">
                        <td colSpan={10}></td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Digitador</td>
                        <td colSpan={5}></td>
                        <td colSpan={1}>Fecha</td>
                        <td colSpan={2}></td>

                    </tr>
                    <tr>
                        <td colSpan={5}></td>
                        <td colSpan={1}>Contado</td>
                        <td colSpan={1}></td>
                        <td colSpan={1}>Credito</td>
                        <td colSpan={1}>x</td>
                        <td colSpan={2}>Plazo</td>
                    </tr>
                    <td colSpan={10}></td>
                </tbody>
                <thead>
                    <tr className="bg-row-color">
                        <th colSpan={1} >Unidad</th>
                        <th colSpan={1}>Codigo</th>
                        <th colSpan={2}>Descripcion del trabajo

                        </th>
                        <th colSpan={2}>Tiempo</th>
                        <th colSpan={1}>I.V.A</th>
                        <th colSpan={1}>Costo M.O por rubro</th>
                        <th colSpan={1}>Descuento</th>
                        <th colSpan={1}>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={1}>1</td>
                        <td colSpan={1}>MO0001</td>
                        <td colSpan={2}>Desmonateje y Montaje Mando Final

                        </td>
                        <td colSpan={2}>8:30 - 17:00 (8h 30m)</td>
                        <td colSpan={1}>$4.10</td>
                        <td colSpan={1}>$35</td>
                        <td colSpan={1}>$3.50</td>
                        <td colSpan={1}>$42</td>
                    </tr>
                </tbody>
                <thead>
                    <tr className="bg-row-color">
                        <th colSpan={1}>Unidad</th>
                        <th colSpan={1}>Codigo</th>
                        <th colSpan={2}>Descripcion del trabajo

                        </th>
                        <th colSpan={2}>Total unitario</th>
                        <th colSpan={1}>I.V.A</th>
                        <th colSpan={1}>Subtotal</th>
                        <th colSpan={1}>Descuento</th>
                        <th colSpan={1}>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={1}>0.25</td>
                        <td colSpan={1}>SUM10010</td>
                        <td colSpan={2}>Desengrasante

                        </td>
                        <td colSpan={2}>$9.00</td>
                        <td colSpan={1}>$0.29</td>
                        <td colSpan={1}>$2.25</td>
                        <td colSpan={1}>-</td>
                        <td colSpan={1}>$2.54</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td colSpan={6}>Totales</td>
                        <td colSpan={1}>$1000</td>
                        <td colSpan={1}>$100</td>
                        <td colSpan={1}>$200</td>
                        <td colSpan={1}>$954</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}