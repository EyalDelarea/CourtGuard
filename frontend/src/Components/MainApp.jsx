import React, { useState } from 'react'
import styled from 'styled-components';
import DiscussionLog from './Tabs/DiscussionLog';
import HumanResources from './Tabs/HumanResources';
import PersonalFile from './Tabs/PersonalFile';
import Portal from './Tabs/Portal';
import WorkSchedule from './Tabs/WorkSchedule';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import Drills from './Tabs/Drills';
import TabsToolBar from './Tabs/TabsToolBar';
import ControlPanel from './Tabs/ControlPanel/ControlPanel';


const tabLabels = ['יומן דיונים', 'סידור עובדה', 'תרגילים', 'סיכום משמרת', 'תיק אישי', 'ניהול כוח אדם', 'לוח בקרה']
const StyledAppBar = styled.div`
    display:flex;
  justify-content: center;
  background-color:transparent!important;
  align-items: center;
  box-shadow: none !important;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

`;

const TabPanel = (props) => {
    const { value, index, Fc, name } = props;
    return (
        <div
            role={name}
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
        >
            {value === index && (
                <Fc />
            )}
        </div>
    )
}

/**
 * Used to overwrite Metial UI CSS
 */
const useStyles = makeStyles({
    selected: {
        background: 'white',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        borderRadius: '30px 30px 0% 0%',
    },
});


const MainApp = () => {
    
    const classes = useStyles();
    const [value, setValue] = useState(6)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <StyledAppBar>
                <Tabs value={value} onChange={handleChange}
                    indicatorColor="none"
                    inkBarStyle={{ background: 'blue' }}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    {
                        tabLabels.map((item) => {
                            return (

                                <Tab
                                    label={item}
                                    indicatorColor="#E18F68"
                                    style={{ width: "15%", opacity: '0.9', fontSize: '15px', fontWeight: 'bold', letterSpacing: '1.59px' }}
                                    inkBarStyle={{ background: 'white' }}
                                    classes={{
                                        selected: classes.selected
                                    }}
                                />
                            )
                        })
                    }
                </Tabs>

            </StyledAppBar>

            <TabsToolBar
                userName="גיא דלריאה"
            />
            <TabPanel value={value} index={0} Fc={DiscussionLog} name={DiscussionLog.name} />
            <TabPanel value={value} index={1} Fc={WorkSchedule} name={WorkSchedule.name} />
            <TabPanel value={value} index={2} Fc={Drills} name={Drills.name} />
            <TabPanel value={value} index={3} Fc={Portal} name={Portal.name} />
            <TabPanel value={value} index={4} Fc={PersonalFile} name={PersonalFile.name} />
            <TabPanel value={value} index={5} Fc={HumanResources} name={HumanResources.name} />
            <TabPanel value={value} index={6} Fc={ControlPanel} name={ControlPanel.name} />
        </>
    )
}

export default MainApp;
