import { Button, Grid } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchBar from "material-ui-search-bar";


const ToolBarWrapper = styled(Grid)`
  background-color: white;
  opacity: 0.9;
  direction:rtl;
  font-size: 15px;
  padding:5px;
  @media (max-width: 600px) {
    border-radius: 5px;
  }
  border-radius: 25px 25px 0px 0px;
`;

const AccountLogoWrapper = styled.div`
  margin-left: 5px;
`;

const UserDisplay = styled.div`
  color:#E5C12B;
  margin-right: 5px;
`;

const StyledButton = styled(Button)`
display: flexbox;
  background-color: #E5C12B !important;
  border-radius: 10px 10px 10px 10px !important;
  width:40%;
  justify-content: center ;
  
max-height: 60%;
  color:white !important;
  font-weight: bold !important;
  font-size: 12px !important;
  margin: 5px !important;
 
  &:hover  {
    background-color: #c7a729 !important;
}
`;

const Wrapper = styled.div`
  display: flexbox;
  align-items:center;
justify-content: center;
height: 100%;
font-weight: bold;
`;

const Notification = styled.div`
display: flexbox;
  position: absolute;
  background-color: red;
  border-radius: 70%;
  width:20px;
  height: 20px;
 justify-content: center;
 align-items: center;
  font-weight: bold;
  bottom: 15px;
  right:5px
`;

const Day = ['0', 'ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת']
const Month = ['0', 'ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצדמבר']

const DateParser = () => {
    const time = new Date()
    const day = Day[time.getDay()];
    const date = time.getDate();
    const month = Month[time.getMonth()]
    const year = time.getFullYear();
    return "יום " + day + " ה-" + date + " ל " + month + " " + year
}

const CurrentDate = () => {

    return (
        <Wrapper>
            <DateParser />
        </Wrapper>
    );
}

const Greetings = ({ userName }) => {
    return (
        <Wrapper>
            <AccountLogoWrapper>
                <AccountCircleIcon />
            </AccountLogoWrapper>
            ברוך הבא , <UserDisplay>{userName}</UserDisplay>
        </Wrapper>
    );
}

const NotificationButton = ({ title, notification, onClick }) => {
    return (
        <StyledButton>
            {title}
            {notification ? <Notification>
                {notification}
            </Notification> : ''}
        </StyledButton>
    )

}

function TabsToolBar({ userName }) {
    return (
        <ToolBarWrapper
            container
        >
            <Grid item xs={12} sm={6} lg={3}
            >
                <Greetings
                    userName={userName} />
            </Grid>
            <Grid item xs={12} sm={6} lg={2}>
                <CurrentDate />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <Wrapper>
                    <NotificationButton
                        title={'הודעות'}
                        notification={3}
                    />
                    <NotificationButton
                        title={'פורטל אחמשים'}
                    />

                </Wrapper>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}
            >

                <Wrapper>
                    {/* IMPLEMENT BY MYSELF? */}
                    <SearchBar
                        // value={this.state.value}
                        // onChange={(newValue) => this.setState({ value: newValue })}
                        // onRequestSearch={() => doSomethingWith(this.state.value)}
                        style={{
                            width: '80%',

                        }}
                    />

                    <Button>

                        <SettingsIcon />

                    </Button>

                </Wrapper>

            </Grid>


        </ToolBarWrapper>
    )
}

export default TabsToolBar
