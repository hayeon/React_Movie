import styled, {injectGlobal} from 'styled-components';


function Intro () {
    injectGlobal `
    body {
    padding : 0;
    margin : 0:
    }`
const Introh1 = styled.h1`
    color: white;
    font-size: 6em;
    position: absolute;
    top: 200px;
    left: 100px;
    font-family: sans-serif;
    `;


    return (
  
       <Introh1 > 
        <h1>영화와 시리즈를 무제한으로</h1>  
       </Introh1>
     
    );
};

export default Intro;