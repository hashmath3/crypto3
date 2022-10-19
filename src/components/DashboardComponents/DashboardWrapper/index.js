import * as React from "react";
import "./styles.css";
import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import List from "../List";
import Grid from "../Grid";

function DashboardWrapper({ data }) {
  const [value, setValue] = React.useState(0);

  const style = {
    color: "white",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalize",
    "& button:hover" :{backgroundColor:'red'},
 
  };

  const styles ={
    color:"red",
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#18978F",
      },
    },
  });
  return (
    <div className="tabs-wrapper">
       <ThemeProvider theme={theme}>
      <TabContext  sx={styles} value={value}>
        <TabList variant="fullWidth" sx={styles} value={value} TabIndicatorProps={{sx:{backgroundColor: "var(--blue)"} }} onChange={handleChange}>
          <Tab label="Grid" sx={style} />
          <Tab label="List" sx={style} />
        </TabList>
        <TabPanel sx={styles} value={0}>
          <div className="grid-flex">
          {data.length == 0 ? (
                <p>No Crypto Currencies Found</p>
              ) : (
                data.map((coin, i) => (<Grid coin={coin} key={i} delay={(i + 3) % 3}/>)
              ))}
          </div>
        </TabPanel>
        <TabPanel value={1}>
            <table className="list-table">
            {data.length == 0 ? (
                <p>No Crypto Currencies Found</p>
              ) : (
                data.map((coin, i) => (<List coin={coin} key={i} delay={(i + 7) % 7}/>))
              )}
            </table>
          </TabPanel>
      </TabContext>
      </ThemeProvider>
    </div>
  );
}

export default DashboardWrapper;