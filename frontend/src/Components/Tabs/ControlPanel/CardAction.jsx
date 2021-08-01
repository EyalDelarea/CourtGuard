import { Grid, SvgIcon } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';




const CardWrapper = styled(Grid)`

align-content: center;
box-shadow: 2px 2px 2px 2px #cacaca;
width:100% !important;
text-align: center;
border-radius: 5%;
margin: 5px;;
&:hover  {
    background-color: #ecececef !important;
}

`;

const CardTitle = styled(Grid)`
  display:grid;
    font-size: 18px;
    font-weight: 200;
    justify-content: flex-end;
    align-content: center;
    direction: ltr;

`;

const Notification = styled(Grid)`
display:grid;
  color:#E5C12B;
  font-weight: 400;
  justify-content: center;
  align-content: center;
  font-size:25px;

  
`;

function CardAction({ svg, notificationAmount, title, onClick }) {
    
        return (
        <CardWrapper
            container>
            <Grid
                item
                xs={3}>
                <SvgIcon
                    component={svg}
                    style={{ width: '50px', height: '50px', margin: '5px 5px 0px 0px' }}>
                </SvgIcon>
            </Grid>
            <Notification
                item
                xs={3}>{notificationAmount}
            </Notification>
            <CardTitle
                item
                xs={6}>
                {title}
            </CardTitle>
        </CardWrapper>

    );
    
}

export default CardAction


