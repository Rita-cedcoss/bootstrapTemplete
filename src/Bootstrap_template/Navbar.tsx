import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom position-fixed col-12">
       
    <div className="container-fluid ">
        <div className='col-3 d-flex  justify-content-between'>
        <a className="navbar-brand" href="#"><img height="30px" width="30px" src='https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/logo.png'/><span className='ms-2 fs-4 pt-2 text-primary'>NiceAdmin</span></a>
        <i className="bi bi-list toggle-sidebar-btn fs-2 fw-bold"></i>
        </div>
        <div className='col-9 d-flex justify-content-between'>
            <div className='col-4'>
            <div className="input-group mb-2 border p-1 ms-3 mt-3">
  <input type="text" className="form-control border-0" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <span className="pt-2" id="basic-addon2"><i className="bi bi-search p-2 mt-3 text-center"></i></span>
</div>
            </div>

            <div className='col-3 d-flex'>
            {/* <i className="bi bi-list toggle-sidebar-btn fs-2 fw-bold"></i> */}
            <span className='fs-4 pt-3 pe-3'><i className="bi bi-bell position-relative">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill font  bg-primary">
    9
  </span>
              </i></span>
            <span className='fs-4 pt-3 pe-3'><i className="bi bi-chat-left-text position-relative">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill font  bg-success">
    9
  </span>
              </i></span>
            <div className='pt-3  text-end'>
              <img height="50px" width="50px" className='rounded-circle' src="https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/profile-img.jpg" alt="" />
              <span className=''>K.Anderson</span>
            </div>
            </div>
    
        {/* <a className="navbar-brand" href="#"><img height="30px" width="30px" src='https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/logo.png'/><span className='ms-2 fs-4 pt-2 text-primary'>NiceAdmin</span></a> */}
        
        </div>
    </div>
  </nav>
  )
}

export default Navbar