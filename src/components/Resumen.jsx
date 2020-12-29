import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import {primerMayuscula} from '../helper/helper';

const ContenedorResumen = styled.div`
    padding: 1rem;
    color: #ffffff;
    margin-top: 1rem;
    text-align: center;
    background-color: #00838F;
`;

const Resumen = ({datos}) => {
    /* Extrar Datos */
    const {marca, year, plan} = datos;

    /* Validar Si Existen Los Datos De La Cotización */
    if(marca === '' || year === '' || plan === '') return null;

    return (
        <ContenedorResumen>
            <h2>Resumen De Cotización</h2>  

            <ul>
                <li>Marca: { primerMayuscula(marca) } </li>
                <li>Plan: { year } </li>
                <li>Año Del Auto: { primerMayuscula(plan)} </li>
            </ul>
        </ContenedorResumen>
     );
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}
 
export default Resumen;