import React from "react";
import { useDispatch, useSelector } from "react-redux";
//action redux
import { crearNuevoProductoAction } from "../actions/productActions";

const NuevoProducto = () => {
  // utilizar useDispatch y te crea una funcion
  const dispatch = useDispatch();
  // mandar llamr el action de productoAction
  const agregarProducto = () => dispatch(crearNuevoProductoAction());

  //cuando usuario haga submit
  const submitNuevoProducto = (e) => {
    e.preventDefault();

    //validar formulario

    // si no hay errores

    //crear el nuevo producto
    agregarProducto();
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Producto
            </h2>

            <form onSubmit={submitNuevoProducto}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  name="nombre"
                  className="form-control"
                  placeholder="Nombre Producto"
                />
              </div>
              <div className="form-group">
                <label>Precio Producto</label>
                <input
                  type="number"
                  name="precio"
                  className="form-control"
                  placeholder="Nombre Producto"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
