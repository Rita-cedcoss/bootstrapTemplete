import React from "react";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import LeftSidebar from "./LeftSidebar";
type midProps = {
  display: string;
  padding: string;
};
const Middle = (props: midProps) => {
  return (
    <>
      <div className="d-flex justify-content-between sidebarleft">
        <LeftSidebar display={props.display} />
        <Dashboard padding={props.padding} />
      </div>
      {/* footer component */}
      <Footer padding={props.padding} />
    </>
  );
};

export default Middle;
