import "./App.css";
import './index.css'; 
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./scenes/Sidebar";
import Dashboard from "./scenes";
import Monitor from "./scenes/Monitor";
import Disign from "./scenes/Design";
import Time from "./scenes/Time";
import Library from "./scenes/Library";
import Users from "./scenes/Users";
import Professional from "./scenes/Professional";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Routes>
              <Route path="/" element={ <Dashboard /> } />
              <Route path="/time" element={ <Time />} />
              <Route path="/design" element={ <Disign />} />
              <Route path="/lib" element={ <Library />} />
              <Route path="/monitor" element={ <Monitor />} />
              <Route path="/sys" element={ <Disign />} />
              <Route path="/users" element={ <Users />} />
              <Route path="/pro" element={ <Professional />} />
            </Routes>
          </main>
          {<Sidebar />}
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
