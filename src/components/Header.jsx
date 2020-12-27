import styled from '@emotion/styled';

const ContenedorHeader = styled.header`
    padding: 10px;
    color: #FFFFFF;
    font-weight: bold;
    background-color: #26C6DA;
`;

const TextoHeader = styled.h1`
    margin: 0;
    font-size: 2rem;
    text-align: center;
    font-family: 'Slabo 27px', serif, sans-serif;
`;

const Header = ({titulo}) => {
    return ( 
        <ContenedorHeader>
            <TextoHeader> {titulo} </TextoHeader>
        </ContenedorHeader>
     );
}
 
export default Header;