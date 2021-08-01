import React from 'react'
import styled from 'styled-components';
import CourtLogo from '../Images/CourtLogo.png'

const HeaderRow = styled.div`
  display: flexbox;
  background-color:transparent;
  justify-content: center;
  
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

function Header() {
    return (
       <HeaderRow>
         <a href={"http://localhost:3000/"}>
         <Logo
          src={CourtLogo}/>
         </a>
       </HeaderRow>
    )
}

export default Header
