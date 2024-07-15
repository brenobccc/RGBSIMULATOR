import React from "react";
import './App.css'



export default function App() {
    return (
        <div id="bgapp">
            <div id="boxapp">
                <div id="fields">
                    <div className="fields-columns">
                        <div id="fields-titles">
                            <div id="title">RED</div>
                            <div id="subtitle">Vermelho</div>
                        </div>
                        <div>
                            <input id="field1" onChange={(e) => {
                                const value = e.target.value;

                                if (value.length == 0) {
                                    e.target.value = null;
                                    return;
                                }

                                if (isNaN(value)) {
                                    alert("Valor Inválido!! Digite um número de 0 à 255")
                                    e.target.value = null
                                    return;
                                }

                                if (value < 0 || value > 255) {
                                    alert("Valor Inválido!! Digite um número de 0 à 255")
                                    e.target.value = null
                                    return;
                                }

                                e.target.value = parseInt(e.target.value)

                            }}>
                            </input>
                        </div>
                    </div>
                    <div className="field-g-columns">
                        <div id="fields-titles">
                            <div id="title">GREEN</div>
                            <div id="subtitle">Verde</div>
                        </div>
                        <div>
                            <input id="field2" onChange={(e) => {
                                const value = e.target.value;

                                if (value.length == 0) {
                                    e.target.value = null;
                                    return;
                                }

                                if (isNaN(value)) {
                                    alert("Valor Inválido!! Digite um número de 0 à 255")
                                    e.target.value = null
                                    return;
                                }

                                if (value < 0 || value > 255) {
                                    alert("Valor Inválido!! Digite um número de 0 à 255")
                                    e.target.value = null
                                    return;
                                }

                                e.target.value = parseInt(e.target.value)

                            }}>
                            </input>
                        </div>
                    </div>
                    <div className="fields-columns">
                        <div id="fields-titles">
                            <div id="title">BLUE</div>
                            <div id="subtitle">Azul</div>
                        </div>
                        <div>
                            <input id="field3" onChange={(e) => {
                                const value = e.target.value;

                                if (value.length == 0) {
                                    e.target.value = null;
                                    return;
                                }

                                if (isNaN(value)) {
                                    alert("Valor Inválido!! Digite um número de 0 à 255")
                                    e.target.value = null
                                    return;
                                }

                                if (value < 0 || value > 255) {
                                    alert("Valor Inválido!! Digite um número de 0 à 255")
                                    e.target.value = null
                                    return;
                                }

                                e.target.value = parseInt(e.target.value)

                            }}>
                            </input>
                        </div>
                    </div>
                </div>
                <div id="button">
                    <button onClick={() => {
                        if (document.getElementById("field1") == null || document.getElementById("field1").value == '') {
                            alert("Preencha os campos !!!")
                            document.getElementById("field1").focus()
                        }
                        const field1 = document.getElementById("field1").value;
                        const field2 = document.getElementById("field2").value;
                        const field3 = document.getElementById("field3").value;

                        const newStyle = `rgb(${field1},${field2},${field3})`
                        document.getElementById('bgapp').style.backgroundColor = newStyle
                        document.body.style.backgroundColor = newStyle
                        //console.log(`rgb(${field1}},${field2},${field3})`)
                    }}>MUDAR COR DE FUNDO</button>
                </div>
            </div>
        </div>
    )
}