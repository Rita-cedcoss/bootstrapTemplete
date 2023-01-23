import React from 'react'

const Tableblock = () => {
  return (
    <>
    <div className='col-12 d-flex flex-column p-3 rounded bg-white mt-4 shadow '>
          <div className='col-12 d-flex flex-row align-items-center justify-content-between p-3'>
            <label className='text-secondary fs-5'><span className='fs-5 txtCol'>Recent Sales</span><span className='ms-1'>|</span><span className='ms-1'>Today</span></label>
            <i className='bi bi-three-dots'></i>
          </div>
          <div className='col-12 d-flex flex-row col-md-10 justify-content-between align-items-center'>
            <div className='col-5 p-1 m-2  d-flex flex-row'>
              <select className='border-1 p-1 rounded'>
                <option>10</option>
                <option>212</option>
                <option>23</option>
              </select>
            </div>
            <input placeholder='search...' className='p-1 col-6'/>
          </div>
          <div className='overflow-scroll'>
            <table className='table'>
              <tr>
                <td className='fw-bold bg-light p-2'>#</td>
                <td className='fw-bold bg-light p-2'>Customer</td>
                <td className='fw-bold bg-light p-2'>Product</td>
                <td className='fw-bold bg-light p-2'>Price</td>
                <td className='fw-bold bg-light p-2'>Status</td>
              </tr>
              <tr>
                <td className='p-2 fw-bold '>#2644</td>
                <td className='p-2 fw-light'>Angus Grady</td>
                <td className='p-2 text-primary'>Ut voluptatem id earum et</td>
                <td className='p-2 fw-light'>$67</td>
                <td className='p-2 '><span className="badge bg-danger rounded-pill">Rejected</span></td>
              </tr>
              <tr>
                <td className='p-2 fw-bold '>#2644</td>
                <td className='p-2 fw-light'>Raheem Lehner</td>
                <td className='p-2 text-primary'>Sunt similique distinctio</td>
                <td className='p-2 fw-light'>$165	</td>
                <td className='p-2 '><span className="badge bg-success rounded-pill">Approved</span></td>
              </tr>
              <tr>
                <td className='p-2 fw-bold '>#2644</td>
                <td className='p-2 fw-light'>Angus Grady</td>
                <td className='p-2 text-primary'>At praesentium minu</td>
                <td className='p-2 fw-light'>$67</td>
                <td className='p-2 '><span className="badge bg-success rounded-pill">Approved</span></td>
              </tr>
              <tr>
                <td className='p-2 fw-bold '>#2457</td>
                <td className='p-2 fw-light'>Brandon Jacob</td>
                <td className='p-2 text-primary'>At praesentium minu</td>
                <td className='p-2 fw-light'>$67</td>
                <td className='p-2 '><span className="badge bg-warning rounded-pill">Pending</span></td>
              </tr>
              <tr>
                <td className='p-2 fw-bold '>#2644</td>
                <td className='p-2 fw-light'>Angus Grady</td>
                <td className='p-2 text-primary'>Ut voluptatem id earum et</td>
                <td className='p-2 fw-light'>$67</td>
                <td className='p-2 '><span className="badge bg-success rounded-pill">Approved</span></td>
              </tr>
            </table>
          </div>
          <hr/>
          <label className='fw-light p-2'>Showing 1 to 5 of 5 entries</label>
        </div>
       {/* <div className='col-11 mt-3 m-auto rounded shadow'> */}
       
       {/* </div> */}
       </>

  )
}

export default Tableblock