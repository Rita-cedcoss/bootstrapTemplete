import React from 'react'
import LineChart from './Linechart'
import TableblkBtm from './TableblkBtm'
import Tableblock from './Tableblock'

const LeftDashboard = () => {
  return (
    <div className='col-12 col-md-12 col-lg-8  '>
      {/* revenue and sales block */}
      <div className='col-12 d-flex justify-content-around'>
        <div className='col-5 rounded shadow'>
            <div className='d-flex justify-content-between ps-3 pe-3'>
            <p className='mt-3 fs-4 '><span className='heading'>Sales|</span><span className='text-secondary'>today</span></p> 
            <p className='mt-3'><i className='bi bi-three-dots'></i></p>
            </div>
            <div className='d-flex ps-4'><span><i className="bi bi-cart fs-2 text-color"></i></span>
             <div className='ps-4'>
                <h3 className='heading'>145</h3>
                <p><span className='text-success'>12%</span> <span className='text-secondary'>increase</span></p>
             </div>
            </div>
        </div>
        <div className='col-5   rounded shadow'>
            <div className='d-flex justify-content-between ps-3 pe-3'>
            <p className='mt-3 fs-4 '><span className='heading'>Sales|</span><span className='text-secondary'>today</span></p> 
            <p className='mt-3'><i className='bi bi-three-dots'></i></p>
            </div>
            <div className='d-flex ps-4'><span><i className="bi bi-currency-dollar fs-2 text-color"></i></span>
             <div className='ps-4'>
                <h3 className='heading'>145</h3>
                <p><span className='text-success'>8%</span> <span className='text-secondary'>increase</span></p>
             </div>
            </div>
        </div>  
      </div>
      {/* customers block */}
      <div className='col-11 mt-3 m-auto   rounded shadow'>
            <div className='d-flex justify-content-between ps-3 pe-3'>
            <p className='mt-3 fs-4 '><span className='heading'>Custormers|</span><span className='text-secondary'>this year</span></p> 
            <p className='mt-3'><i className='bi bi-three-dots'></i></p>
            </div>
            <div className='d-flex ps-4'><span><i className="bi bi-people fs-2 text-color"></i></span>
             <div className='ps-4'>
                <h3 className='heading'>1244</h3>
                <p><span className='text-danger'>12%</span> <span className='text-secondary'>increase</span></p>
             </div>
            </div>
      </div>
      <div className='col-11 mt-3 m-auto   rounded shadow'>
        <LineChart/>
      </div>
      <div className='col-11 mt-3 m-auto rounded shadow'>
      <Tableblock/>
      </div>
      <div className='col-11 mt-3 m-auto rounded shadow'>
       <TableblkBtm/>
      </div>

    </div>
  )
}

export default LeftDashboard