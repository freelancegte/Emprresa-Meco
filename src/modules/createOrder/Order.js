import React from 'react';
import OrderTable from './OrderTable/orderTable';
import Report from './OrderReport/orderReport';



function App() {
    return (
        <div className="col-12 order display-flex ">
            <div className="col-2 border-green border-green create-card-height">
                Agregar Rubro o Servicio
            </div>
            <div className="col-10 border-green create-card-height">
                <OrderTable />
                <Report />
            </div>
        </div>
    );
}

export default App;