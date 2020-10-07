import React from "react";
import Calender from "./Calender/Calender";
import Sidebar from "./Sidebar/Sidebar";
import "../App.css";
const Main = () => {
  return (
    <div className="wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                  <div className="row">
                      <div className="col-md-3"><Sidebar /></div>
                      <div className="col-md-9"><Calender /></div>
                  </div>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};
export default Main;
