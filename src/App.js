import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { useStateContext } from "./contexts/ContextProvider";
import { Navbar, Sidebar } from "./components";

function App() {
  const { currentMode } = useStateContext();

  return (
    <>
      <div className={currentMode === "Dark" ? "dark" : ""}>
        <div className="h-screen bg-f-bg dark:bg-fdark-bg overflow-auto">
          <HashRouter>
            <div className="h-full">
              <Navbar className="z-10 bg-transparent"/>
              <AppRouter />
            </div>
            <Sidebar />
          </HashRouter>
        </div>
      </div>
    </>
  );
}

export default App;
