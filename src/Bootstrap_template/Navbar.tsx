import React from "react";
type navProps = {
  display: string;
  padding: string;
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
  setPadding: React.Dispatch<React.SetStateAction<string>>;
};
const Navbar = (props: navProps) => {
  // sidebar show and hide
  const displayOn = () => {
    if (props.display == "block") {
      props.setDisplay("none");
      props.setPadding("dasboardPadding");
    } else {
      props.setDisplay("block");
      props.setPadding("dashboard");
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom position-fixed col-12 shadow">
      <div className="container-fluid  d-flex justify-content-between">
        <div className=" col-4 col-lg-3 d-flex flex-row align-items-center  justify-content-between">
          <a className="navbar-brand" href="">
            <img
              height="30px"
              width="30px"
              src="https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/logo.png"
              alt="f"
            />
            <span className="ms-2 d-none d-sm-inline-block fs-4 pt-2 text-primary">
              NiceAdmin
            </span>
          </a>
        </div>
        <div className="col-4 d-flex flex-row align-items-center">
          <i
            className="bi bi-list toggle-sidebar-btn fs-2 fw-bold"
            onClick={displayOn}
          ></i>
          <div className="col-8 d-xl-block d-none ">
            <div className="input-group mb-2 border p-1 ms-3 mt-3 ">
              <input
                type="text"
                className="form-control border-0"
                placeholder="Search"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span className="pt-2" id="basic-addon2">
                <i className="bi bi-search p-2 mt-3 text-center"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-2  d-flex flex-row align-items-center justify-content-end">
          <div className=" d-flex flex-row align-items-center">
            <span className="fs-4 pt-3 pe-3">
              <i className="bi bi-bell position-relative">
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill font  bg-primary">
                  9
                </span>
              </i>
            </span>
            <span className="fs-4 pt-3 pe-3">
              <i className="bi bi-chat-left-text position-relative">
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill font  bg-success">
                  9
                </span>
              </i>
            </span>
            <div className="pt-3  d-flex flex-row align-items-center ">
              <img
                height="50px"
                width="50px"
                className="rounded-circle"
                src="https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/profile-img.jpg"
                alt=""
              />
              <span className="d-none d-xl-block">K.Anderson</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
