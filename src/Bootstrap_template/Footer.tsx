import React from "react";
type midProps = {
  padding: string;
};
const Footer = (props: midProps) => {
  return (
    <div className={`col-12 p-2 ${props.padding} padleft border-top mt-5 pt-4`}>
      <p className="text-center heading">
        © Copyright NiceAdmin. All Rights Reserved
      </p>
      <p className="fs-6 text-center text-color">Designed by BootstrapMade</p>
    </div>
  );
};

export default Footer;
