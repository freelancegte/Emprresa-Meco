import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import logo from '../../assets/logo.png'

const BasicCard = (props) => {
    return (
        <div className="card">
            <Card className="card-container">
                <CardImg top width="100%" src={logo} className="card-img" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Roca S.A</CardTitle>
                    <CardSubtitle>Total de Ordenes creadas: 22</CardSubtitle>
                    <CardText>Creatas en la ultima semanada: 5</CardText>
                    <Button className="card-button">Generar Orden</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default BasicCard;