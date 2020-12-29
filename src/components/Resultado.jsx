import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const Mensaje = styled.p`
    padding: 1rem;
    margin-top: 2rem;
    text-align: center;
    background-color: rgb(127, 224, 237);
`;

const ResultadoCotizacion = styled.div`
    padding: .5rem;
    margin-top: 1rem;
    text-align: center;
    position: relative;
    border: 1px solid #26C6DA;
    background-color: rgb(127, 224, 237);
`;

const TextoCotizacion = styled.p`
    padding: 1rem;
    color: #00838F;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Resultado = ({cotizacion}) => {
    return (
            (cotizacion === 0) ? <Mensaje>Elige Marca, Año Y Tipo De Seguro</Mensaje>
                               : 
                                (
                                   <ResultadoCotizacion>
                                       <TransitionGroup component="span" className="resultado">
                                           <CSSTransition key={cotizacion} classNames="resultado" timeout={{enter: 500, exit: 500}}>
                                                <TextoCotizacion>El Total Es: <span>${cotizacion}</span> </TextoCotizacion>
                                           </CSSTransition>
                                       </TransitionGroup>
                                   </ResultadoCotizacion>
                                )
    );
}

Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired
}

export default Resultado;