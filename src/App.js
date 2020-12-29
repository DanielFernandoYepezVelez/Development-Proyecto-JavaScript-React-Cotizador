import { useState } from 'react';
import styled from '@emotion/styled';

import Header from './components/Header';
import Spinner from './components/Spinner';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Formulario from './components/Formulario';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFFFFF;
  padding: 3rem;
`;

function App() {
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const [cargando, guardarCargando] = useState(false);

  const { cotizacion, datos } = resumen;

  return (
    <Contenedor>

      <Header 
        titulo="Cotizador De Seguros"
      />

      <ContenedorFormulario>

        <Formulario guardarResumen={guardarResumen} guardarCargando={guardarCargando} />

        {cargando ? <Spinner /> : null}
        
        <Resumen datos={datos} />

        {!cargando ? <Resultado cotizacion={cotizacion} /> : null}

      </ContenedorFormulario>
      
    </Contenedor>
  );
}

export default App;
