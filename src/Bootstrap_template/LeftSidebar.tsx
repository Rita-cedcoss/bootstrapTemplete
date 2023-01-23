import React from 'react'
type midProps={
  display:string
}
const LeftSidebar = (props:midProps) => {
  return (
    <div className={`${props.display} border-end sidebar`}>
        <div className='col-12 bg-light pe-4 ps-4 pt-4'>
          <div className='d-flex justify-content-between  align-items-center pe-2 ps-2 pb-2' >
            <span><i className="bi bi-grid pe-2 "></i>Dashboard</span>
          </div>
          <div className='d-flex justify-content-between   align-items-center p-2' data-bs-toggle="collapse" data-bs-target="#components" aria-expanded="false" aria-controls="#components">
            <span><i className="bi bi-menu-button-wide pe-2"></i>Components</span><i className="bi bi-chevron-down ps-3"></i>
          </div>
          <div className='collapse' id='components'>
            <ul style={{listStyle:"circle"}}>
              <li className='pt-3'>Alerts</li>
              <li className='pt-3'>Accordian</li>
              <li className='pt-3'>Badges</li>
              <li className='pt-3'>Breadcrumbs</li>
              <li className='pt-3'>Buttons</li>
              <li className='pt-3'>Cards </li>
              <li className='pt-3'>Crousel</li>
              <li className='pt-3'>List Group</li>
            </ul>
          </div>
          <div className='d-flex justify-content-between   align-items-center p-2' data-bs-toggle="collapse" data-bs-target="#forms" aria-expanded="false" aria-controls="#forms">
            <span><i className="bi bi-journal-text pe-2"></i>Forms</span><i className="bi bi-chevron-down ps-3"></i>
          </div>
          <div className='collapse' id='forms'>
            <ul style={{listStyle:"circle"}}>
            <li className='pt-3'>Forms Elements</li>
              <li className='pt-3'>Forms Layout</li>
              <li className='pt-3'>Forms Editor</li>
              <li className='pt-3'>Forms Validation</li>
            </ul>
          </div>
          <div className='d-flex justify-content-between   align-items-center p-2' data-bs-toggle="collapse" data-bs-target="#Tables" aria-expanded="false" aria-controls="#Tables">
           <span> <i className="bi bi-layout-text-window-reverse pe-2"></i>Tables</span><i className="bi bi-chevron-down ps-3"></i>
          </div>
          <div className='collapse' id='Tables'>
            <ul style={{listStyle:"circle"}}>
            <li className='pt-3'>General Tables</li>
              <li className='pt-3'>Data Tables</li>   
            </ul>
          </div>
          <div className='d-flex justify-content-between   align-items-center p-2'  data-bs-toggle="collapse" data-bs-target="#chart" aria-expanded="false" aria-controls="#chart">
            <span><i className="bi bi-bar-chart pe-2"></i>Charts icons</span><i className="bi bi-chevron-down ps-3"></i>
          </div>
          <div className='collapse' id='chart'>
            <ul style={{listStyle:"circle"}}>
              <li className='pt-3'>Chart.js</li>
              <li className='pt-3'>ApexChart</li>   
              <li className='pt-3'>EChart</li>
            </ul>
          </div>
          <div className=' d-flex justify-content-between  align-items-center p-2'  data-bs-toggle="collapse" data-bs-target="#icons" aria-expanded="false" aria-controls="#icons">
           <span> <i className="bi bi-gem pe-2"></i>Icons</span><i className="bi bi-chevron-down ps-3"></i>
          </div>
          <div className='collapse' id='icons'>
            <ul style={{listStyle:"circle"}}>
              <li className='pt-3'>Bootstrap icons</li>
              <li className='pt-3'>Remix icons</li>   
              <li className='pt-3'>Boxicons</li>
            </ul>
          </div>
            <p className='pt-3'>Pages</p>
          <div className='d-flex justify-content-between   align-items-center p-2'>
            <span><i className="bi bi-person pe-2"></i>Profile</span>
          </div>
          <div className='d-flex justify-content-between   align-items-center p-2'>
            <span><i className="bi bi-question-circle pe-2"></i>F.A.Q</span>
          </div>
          <div className='d-flex justify-content-between   align-items-center p-2'>
           <span> <i className="bi bi-envelope pe-2"></i>Contact</span>
          </div>
          <div className=' d-flex justify-content-between  align-items-center p-2'>
            <span><i className="bi bi-card-list pe-2"></i>Register</span>
          </div>
          <div className=' d-flex justify-content-between  align-items-center p-2'>
            <span><i className="bi bi-box-arrow-in-right pe-2"></i>Login</span>
          </div>
          <div className='d-flex justify-content-between   align-items-center p-2'>
           <span> <i className="bi bi-dash-circle pe-2"></i>Error-404</span>
           </div>
        </div>
    </div>
  )
}

export default LeftSidebar