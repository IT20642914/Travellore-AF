
import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import FNHText from '../../../../components/atoms/FNHText';
import MyListingTable from '../Table/MyListingTable';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const MyListing = () => {
  const X_VALUE = 5;
  const Y_VALUE = 10;
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Box sx={{ width: '100%' }}>
      <Box sx={{ display:"flex" }}>
        <Box sx={{marginRight:"2rem", marginLeft:"1rem"}}>
      <FNHText
                    text="My Listings"
                    color="#1460BA"
                    textAlign="center"
                    fontSize="1.5rem"
                    fontWeight="600"
                  />
                  </Box>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label={`Published (${X_VALUE})`} {...a11yProps(0)} />
          <Tab label={`Draft (${Y_VALUE})`} {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <MyListingTable/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    
    </Box>
      </Box>
  )
}

export default MyListing