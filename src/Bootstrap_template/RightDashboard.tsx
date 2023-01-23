import React from "react";
import DonutChart from "./Donutchart";
import RadarChart from "./Radarchart";

const RightDashboard = () => {
  return (
    <div className='col-lg-4 col-md-12 d-flex flex-column mt-3 ms-2'>
    <div className='col-11 bg-white d-flex flex-column shadow ms-3 rounded '>
      <div className='col-12 d-flex flex-row align-items-center justify-content-between p-3'>
        <label className='text-secondary fs-5'><span className='fs-5 txtCol'>Recent Activity</span><span className='ms-1'>|</span><span className='ms-1'>Today</span></label>
        <i className='bi bi-three-dots'></i>
      </div>
      <div className='d-flex flex-row p-3 col-12'>
        <div className='d-flex flex-column col-3 text-secondary'>
          <p className='ms-2'>32 min</p>
          <p className='ms-2 mt-5'>56 min</p>
          <p className='ms-2 mt-5'>2 hrs</p>
          <p className='ms-2 mt-5'>1 day</p>
          <p className='ms-2 mt-5'>2 days</p>
          <p className='ms-2 mt-5'>4 weeks</p>
        </div>
        <div className='col-1 d-flex flex-column align-items-center'>
          <i className="bi bi-circle-fill text-success"></i>
          <p  className='fs-2 text-secondary fw-light'>|</p >
          <i className="bi bi-circle-fill text-danger"></i>
          <p  className='fs-2 text-secondary fw-light'>|</p >
          <i className="bi bi-circle-fill text-primary"></i>
          <p  className='fs-2 text-secondary fw-light'>|</p >
          <i className="bi bi-circle-fill text-info"></i>
          <p  className='fs-2 text-secondary fw-light'>|</p >
          <i className="bi bi-circle-fill text-warning"></i>
          <p  className='fs-2 text-secondary fw-light'>|</p >
          <i className="bi bi-circle-fill text-secondary"></i>
          <p  className='fs-2 text-secondary fw-light'>|</p >
        </div>
        <div className='col-8 fSize d-flex flex-column align-items-center fw-light text-secondary'>
          <p>Quia quae rerum explicabo officiis beatae</p>
          <p className='mt-4'>Voluptatem blanditiis blanditiis eveniet</p>
          <p className='mt-5'>Voluptates corrupti molestias voluptatem</p>
          <p className='mt-4'>Tempore autem saepe occaecati voluptatem tempore</p>
          <p className='mt-5'>Est sit eum reiciendis exercitationem</p>
        </div>
      </div>
    </div>
    {/* radar chart */}
    <div className='col-11 bg-white d-flex flex-column shadow mt-4 ms-3 rounded'>
      <div className='col-12 d-flex flex-row align-items-center justify-content-between p-3'>
        <label className='text-secondary fs-5'><span className='fs-5 txtCol'>Budget Report</span><span className='ms-1'>|</span><span className='ms-1'>This Month</span></label>
        <i className='bi bi-three-dots'></i>
      </div>
      <div className='p-3'>
         <RadarChart/>
      </div>
    </div>
    {/* Doughnut chart */}
    <div className='col-11 bg-white d-flex flex-column shadow mt-4 ms-3 rounded'>
      <div className='col-12 d-flex flex-row align-items-center justify-content-between p-3'>
        <label className='text-secondary fs-5'><span className='fs-5 txtCol'>Website Traffic</span><span className='ms-1'>|</span><span className='ms-1'>Today</span></label>
        <i className='bi bi-three-dots'></i>
      </div>
      <div className='p-3'>
        <DonutChart/>
      </div>
    </div>
    <div className='col-11 bg-white d-flex flex-column shadow mt-4 ms-3 rounded'>
      <div className='col-12 d-flex flex-row align-items-center justify-content-between p-3'>
        <label className='text-secondary fs-5'><span className='fs-5 txtCol'>Website Traffic</span><span className='ms-1'>|</span><span className='ms-1'>Today</span></label>
        <i className='bi bi-three-dots'></i>
      </div>
      <div className='d-flex flex-row col-12 p-3 justify-content-between'>
        <img src='https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/news-1.jpg' alt='' className='rounded' style={{height:'50px',width:'80px'}}/>
        <div className='d-flex flex-column ms-4 fSize'>
          <label className='txtCol'>Nihil blanditiis at in nihil autem</label>
          <label className='text-secondary'>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</label>
        </div>
      </div>
      <div className='d-flex flex-row col-12 p-3 justify-content-between'>
        <img src='https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/news-2.jpg' alt='' className='rounded' style={{height:'50px',width:'80px'}}/>
        <div className='d-flex flex-column ms-4 fSize'>
          <label className='txtCol'>Quidem autem et impedit</label>
          <label className='text-secondary'>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</label>
        </div>
      </div>
      <div className='d-flex flex-row col-12 p-3 justify-content-between'>
        <img src='https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/news-3.jpg' alt='' className='rounded' style={{height:'50px',width:'80px'}}/>
        <div className='d-flex flex-column ms-4 fSize'>
          <label className='txtCol'>Id quia et et ut maxime similique occaecati ut</label>
          <label className='text-secondary'>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</label>
        </div>
      </div>
      <div className='d-flex flex-row col-12 p-3 justify-content-between'>
        <img src='https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/news-4.jpg' alt='' className='rounded' style={{height:'50px',width:'80px'}}/>
        <div className='d-flex flex-column ms-4 fSize'>
          <label className='txtCol'>Laborum corporis quo dara net para</label>
          <label className='text-secondary'>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</label>
        </div>
      </div>
      <div className='d-flex flex-row col-12 p-3 justify-content-between'>
        <img src='https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/news-5.jpg' alt='' className='rounded' style={{height:'50px',width:'80px'}}/>
        <div className='d-flex flex-column ms-4 fSize'>
          <label className='txtCol'>Et dolores corrupti quae illo quod dolor</label>
          <label className='text-secondary'>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</label>
        </div>
      </div>
    </div>
  </div>
  );
};

export default RightDashboard;
