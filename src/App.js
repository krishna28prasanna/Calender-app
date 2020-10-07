import React from "react";
import Main from "./Component/Main";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/core/main.css";
import "@fullcalendar/timegrid/main.css";
import AppState from "./Context/App/AppState";
const App = () => {
  return (
    <div>
      <AppState>
        <Main />
      </AppState>
    </div>
  );
};

export default App;
