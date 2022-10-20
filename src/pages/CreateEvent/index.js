import './master.css';

const CreateEvent = ()=> {
  return (
    <div className="_backgroundImage _fontWeight600">
    
        <div className="container _containerCentral">
        <h1 className="text-center">Crea tu evento!</h1>
        <div className="card _backgroundOpacity">
            <div className="card-body">

            <div className="container">
            
                <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                    <label htmlFor="nombre" className="form-label">Nombre del evento</label>
                    <input type="text" id="nombre" className="form-control form-control-lg"></input>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <label htmlFor="fecha" className="form-label">Fecha del evento</label>
                    <input type="date" id="fecha" className="form-control form-control-lg"></input>
                </div>
                </div>
    
                <div className="row">
                
                <div className="_padTop10 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <label htmlFor="mensaje" className="form-label">Mensaje de bienvenida</label>
                    <textarea id="mensaje" rows="11" className="form-control"></textarea>
                </div>

                <div className="_padTop10 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <label htmlFor="portada" className="form-label">Agregar foto de portada</label>
                    <input className="form-control form-control-sm" id="portada" type="file"></input>
                </div>

                <div className="_padTop10 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <label className="form-label">Información bancaria</label>
                    
                    <div className="card">
                    <div className="card-body">
                        <div className="row">
                        
                        <label className="form-label _infoMessage">Seleccione la cuenta bancaria donde se depositarán los regalos</label>
                        
                        <div className="_padTop10 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <label htmlFor="banco" className="form-label _fontSize13">Banco</label>
                            <select className="form-select form-select-sm">
                            <option disabled selected>Seleccione...</option>
                            <option value="BCP">BCP</option>
                            <option value="Internank">Interbank</option>
                            <option value="BBVA">BBVA</option>
                            <option value="Scotiabank">Scotiabank</option>
                            <option value="Scotiabank">Banbif</option>
                            <option value="Scotiabank">Banco de la Nación</option>
                            </select>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <label htmlFor="cuenta" className="form-label _fontSize13">Número de cuenta</label>
                            <input type="text" id="cuenta" className="form-control form-control-sm"></input>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <label htmlFor="CCI" className="form-label _fontSize13">Número de cuenta interbancario</label>
                            <input type="text" id="CCI" className="form-control form-control-sm"></input>
                        </div>

                        </div>
                    </div>                  
                    </div>

                </div>

                </div>

                <div className="row">
                <div className="_padTop10 text-center col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <button type="button" className="_textButton col-white btn btn-info btn-lg">Crear evento</button>
                </div>
                </div>
    
            </div>

            </div>
        </div>

    </div>
    
  </div>
  );
}

export default CreateEvent;