import React from 'react'
import LeftDashboard from './LeftDashboard'
import RightDashboard from './RightDashboard'
type midProps={
    padding:string
  }
const Dashboard = (props:midProps) => {
  return (
    <div className={`col-12 p-2 ${props.padding} padleft`}>
      <div className='ps-5 pt-4'>
        <h3>Dashboard</h3>
        <p>Home<span className='ps-2 pe-2'>/</span>Dashboard</p>
      </div>
      {/* sales and reveneu */}
      <div className='d-flex flex-column flex-lg-row'>
        <LeftDashboard/>
        <RightDashboard/>
      </div>
    </div>
  )
}

export default Dashboard