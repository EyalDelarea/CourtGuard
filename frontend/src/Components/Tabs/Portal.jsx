
import React from 'react'
import styled from 'styled-components';
import { ContainerTabs } from '../../GlobalStyles'


import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button, Grid } from '@material-ui/core';


const Wrapper = styled.div`
  display: grid;
  align-items:center;
justify-content: center;
margin-top: 50px;
font-weight: bold;
box-shadow: 2px 2px 2px 2px #cacaca;

text-align: center;



`;
const Title = styled.div`
  
  font-weight: bold;
  font-size: 22px;

`;

const StyledButton = styled(Button)`
  background-color: #FFB238;
  margin-right: 30px;
  margin-left: 35px;
`;

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Portal = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState(0);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <ContainerTabs>

      <Wrapper>
        <Title>
          פורטל אחמשים
        </Title>
    
    
        <Select
          value={age}
          onChange={handleChange}
        >
        <MenuItem value={0} disabled>
        בחר פעולה לביצוע
          </MenuItem>
          <MenuItem value={1}>סיכום משמרת</MenuItem>
          <MenuItem value={2}>הזנת אירוע משמעת</MenuItem>
          <MenuItem value={3}>הזנת אירוע בודד</MenuItem>
          <MenuItem value={4}>ביצוע בכ"ד משמעת</MenuItem>
          <MenuItem value={5}>ביצוע בוחן רמה</MenuItem>
        </Select>
      <Grid
      item
      justify='space-around'>
         <StyledButton>
          שלח
        </StyledButton>
        <StyledButton>
          נקה
        </StyledButton>
      </Grid>
     
      </Wrapper>


    </ContainerTabs>
  )
}


export default Portal
