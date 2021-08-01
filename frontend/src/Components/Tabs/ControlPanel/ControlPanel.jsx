import { Grid } from '@material-ui/core';
import React from 'react'
import AssessmentIcon from '@material-ui/icons/Assessment';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import SecurityIcon from '@material-ui/icons/Security';
import CardAction from './CardAction';
import Calendar from 'react-calendar'

import styled from 'styled-components';
import ContainerTabs from '../../../GlobalStyles';

const CalandarWrapper = styled(Grid)`
  display: grid;
  justify-content: center;
  align-content: center;
  margin-top: 150px;

 
`;


const ControlPanel = () => {
    return (
        <ContainerTabs>
            <Grid
                container
            >
                <Grid item xs={12}>
                    <Grid
                        container
                        direction='row-reverse' >
                        <Grid item xs={6} lg={3}>
                            <CardAction
                                svg={AssessmentIcon}
                                notificationAmount={3}
                                title={"סה'כ אירועים"} />
                        </Grid>
                        <Grid item xs={6} lg={3}>
                            <CardAction
                                svg={PermContactCalendarIcon}
                                notificationAmount={21}
                                title={"מספר ח'ח "} />
                        </Grid>
                        <Grid item xs={6} lg={3}>
                            <CardAction
                                svg={SecurityIcon}
                                notificationAmount={9}
                                title={"אירועי משמעת "} />
                        </Grid>
                        <Grid item xs={6} lg={3}>
                            <CardAction
                                svg={SupervisorAccountIcon}
                                notificationAmount={15}
                                title={"מאבטחים פעילים"} /></Grid>

                    </Grid>

                </Grid>
                <Grid
                    item xs={12}
                >
                    <Grid
                        item>
                        <CalandarWrapper>
                            <Calendar />
                        </CalandarWrapper>
                    </Grid>
                </Grid>
            </Grid>

        </ContainerTabs>
    )
}



export default ControlPanel
