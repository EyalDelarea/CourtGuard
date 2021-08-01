import React from 'react'
import styled from 'styled-components';


const FooterContainer = styled.div`
  position: relative;
  display: grid;
 

  background-color:transparent;
  justify-content: center;
  align-content: center;
  min-height: 50px;
  
  align-content: center;
  
  
`;
const Credits = styled.div`
font-size: 12px;  
color: white;
`;

function Footer() {
    return (
        <FooterContainer>

            <a href={'https://github.com/EyalDelarea/'} target={"_blank"} rel={'noreferrer'} style={{textDecoration:'none'}}>
                <Credits src={'sss'}>
                    Created by Eyal Delarea
                </Credits>
            </a>

        </FooterContainer>
    )
}

export default Footer
