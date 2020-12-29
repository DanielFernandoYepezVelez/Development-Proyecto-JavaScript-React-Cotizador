import { useState } from 'react';
import styled from '@emotion/styled';

import { obtenerDiferenciaYear, calculaMarca, obtenerPlan } from '../helper/helper';

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    width: 100%;
    outline: none;
    padding: 1rem;
    display: block;
    --webkit-appearance: none;
    border: 1px solid #e1e1e1;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Boton = styled.button`
    width: 100%;
    border: none;
    outline: none;
    padding: 1rem;
    font-size: 16px;
    margin-top: 2rem;
    color: #FFFFFF;
    font-weight: bold;
    text-transform: uppercase;
    background-color: #00838F;
    transition: background-color .3s ease;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Error = styled.div`
    width: 100%;
    padding: 1rem;
    color: white;
    text-align: center;
    margin-bottom: 2rem;
    background-color: red;
`;

const Formulario = ({guardarResumen, guardarCargando}) => {
    /* State Del Formulario */
    const [datos, guardarDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    });

    const [error, guardarError] = useState(false);

    /* Destructurar El Objeto Datos */
    const {marca, year, plan} = datos;

    /* Leer Datos Del Formulario Y Colocarlos En El State */
    const obtenerInformacion = e => {
        guardarDatos({
            ...datos,
            [e.target.name]: e.target.value
        });
    }

    /* Cuando El Usuario Envia Los Datos Del Formulario */
    const cotizarSeguro = e => {
        e.preventDefault();

        if(marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
            guardarError(true);
            return;
        }

        guardarError(false);

        /* Una Base De 2000 */
        let resultado = 2000;

        /* Obtener La Diferencia De Años */
        const diferencia = obtenerDiferenciaYear(year);

        /* Por Cada Año Hay Que Restar El 3% */
        resultado -= ( (diferencia * 3) * resultado) / 100;

        /* Americano 15% -- Asiatico 5% -- Europeo 30% */
        resultado = calculaMarca(marca) * resultado;

        /* Básico Aumenta 20% -- Completo 50% */
        const incrementoPlan = obtenerPlan(plan);
        resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

        guardarCargando(true);

        setTimeout(() => {
            guardarCargando(false);
            
            /* Total */
            guardarResumen({
                cotizacion: resultado,
                datos
            });
        }, 4000);
    }

    return ( 
        <form onSubmit={cotizarSeguro}>

            { error ? <Error>Todos Los Campos Son Obligatorios</Error> : null }

            <Campo>
                <Label>Marca</Label>
                <Select name="marca" value={marca} onChange={obtenerInformacion}>
                    <option value="">-- Seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Año</Label>
                <Select name="year" value={year} onChange={obtenerInformacion}>
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Plan</Label>
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === "basico"}
                    onChange={obtenerInformacion}
                /> Básico

                <InputRadio 
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === "completo"}
                    onChange={obtenerInformacion}
                /> Completo
            </Campo>

            <Boton type="submit">Cotizar</Boton>

        </form>
     );
}
 
export default Formulario;