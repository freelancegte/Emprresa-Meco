import React from 'react';
import OrderTable from './OrderTable/orderTable';
// import TextValidator from '../../components/Inputs/textValidator';
// import { ValidatorForm } from 'react-form-validator-core';
// import { Input } from 'reactstrap';



class App extends React.Component {
    constructor(props) {
        super(props);
    }
    handleSubmit = () => {
        console.log('submit');
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
                {/* <div className="col-2 create-card-height">
                    <h4>Agregar Rubro o Servicio</h4>

                    <ValidatorForm
                        ref="form"
                        onSubmit={this.handleSubmit}
                    >
                        <span>
                            Unidad
                    </span>
                        <TextValidator
                            onChange={(e) => this.handleChange(e, 'string')}
                            name="Nombre del Cliente"
                            value="0.5"
                            validators={['required']}
                            errorMessages={['Campo requerido', 'este valor es un numero']}
                        />
                        <span>
                            Codigo
                    </span>
                        <Input type="select" name="select">
                            <option>MO0001</option>
                            <option>MO0002</option>
                            <option>MO0003</option>
                            <option>MO0004</option>
                            <option>MO0005</option>
                        </Input>
                        <span>
                            Descripcion
                    </span>
                        <TextValidator
                            onChange={(e) => this.handleChange(e, 'string')}
                            name="Descripcion"
                            value="Remover volante"
                            validators={['required']}
                            errorMessages={['Campo requerido', 'este valor es un numero']}
                        />
                        <div className="div-button-form">
                            <button type="submit">Agregar</button>
                        </div>
                    </ValidatorForm>
                </div> */}
                <div className="col-12 create-card-height">
                    <OrderTable />
                </div>
            </div>
        );
    }
}

export default App;