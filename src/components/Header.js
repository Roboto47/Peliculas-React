import React, { Fragment } from "react";
import "./css/estilos.css";

export default function Header() {
    return (
        <Fragment>
            <header>
                <div className="logocontainer">
                    <img src="./img/captura.PNG" alt="" className="imgheader" />
                    <div className="textoheader">
                        <h1>CINEMA PLUS</h1>
                        <p className="bajotitulo">El mejor lugar para poder ver tus peliculas</p>
                    </div>
                </div>
            </header>
        </Fragment>
    );
}
