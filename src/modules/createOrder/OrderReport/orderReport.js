import React from 'react';
import img1 from '../../../assets/img1.jpg';
import img2 from '../../../assets/img2.jpg';



function report() {
    return (
        <div className="col-12 report">
            <div className="col-6">
                <div className="display-grid">
                    <h4>Resumen</h4>
                    <span>DESMONTAR MANDO FINAL POR FUAGA</span>
                    <span>AJUSTE DEL MANDO</span>
                    <span>REPUESTOS A INSTALAR</span>
                    <span>PROCESO DE ARMADO</span>
                    <span>MANDO ARMADO</span>
                    <span>MANDO INSTALADO</span>
                    <span>PRUEBA REALIZADA UNA DESPUES DEL INTALACION DEL MANDO</span>
                </div>
            </div>
            <div className="col-6">
                <img src={img1} className="img-bill" alt="dummy1" />
                <img src={img2} alt="dummy2" className="img-bill" />
            </div>
        </div>
    );
}

export default report;