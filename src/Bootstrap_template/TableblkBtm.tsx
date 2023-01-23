import React from 'react'

const TableblkBtm = () => {
  return (
    <div className=' col-12 d-flex flex-column p-3 rounded bg-white mt-4 shadow '>
          <div className='col-12 d-flex flex-row align-items-center justify-content-between p-3'>
            <label className='text-secondary fs-5'><span className='fs-5 txtCol'>Top Selling</span><span className='ms-1'>|</span><span className='ms-1'>Today</span></label>
            <i className='bi bi-three-dots'></i>
          </div>
          <div className='overflow-scroll'>
            <table className='p-2'>
              <tr className='bg-light fw-bold text-dark p-2'>
                <td className='p-2'>Preview</td>
                <td className='p-2'>Product</td>
                <td className='p-2'>Price</td>
                <td className='p-2'>Sold</td>
                <td className='p-2'>Revenue</td>
              </tr>
              <tr>
                <td className='p-2'><img style={{height:'50px',width:'50px'}} src='https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/product-1.jpg' alt=''/></td>
                <td className='p-2 text-primary fw-bold'>Ut inventore ipsa voluptas nulla</td>
                <td className='p-2 fw-light text-dark'>$64</td>
                <td className='p-2 text-dark fw-bold'>124</td>
                <td className='p-2 fw-light text-dark'>$5,828</td>
              </tr>
              <tr className='p-2'>
                <td className='p-2 '><img style={{height:'50px',width:'50px'}} src='https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/product-2.jpg' alt=''/></td>
                <td className='p-2 text-primary fw-bold'>Exercitationem similique doloremque</td>
                <td className='p-2 fw-light text-dark'>$46</td>
                <td className='p-2 text-dark fw-bold'>98</td>
                <td className='p-2 fw-light text-dark'>$4,508</td>
              </tr>
              <tr className='p-2'>
                <td className='p-2'><img style={{height:'50px',width:'50px'}} src='https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/product-3.jpg' alt=''/></td>
                <td className='p-2 text-primary fw-bold'>Doloribus nisi exercitationem</td>
                <td className='p-2 fw-light text-dark'>$59</td>
                <td className='p-2 text-dark fw-bold'>74</td>
                <td className='p-2 fw-light text-dark'>$4,366</td>
              </tr>
              <tr className='p-2'>
                <td className='p-2'><img style={{height:'50px',width:'50px'}} src='https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/product-4.jpg' alt=''/></td>
                <td className='p-2 text-primary fw-bold'>Ut inventore ipsa voluptas nulla</td>
                <td className='p-2 fw-light text-dark'>$64</td>
                <td className='p-2 text-dark fw-bold'>124</td>
                <td className='p-2 fw-light text-dark'>$5,828</td>
              </tr>
              <tr className='p-2'>
                <td className='p-2'><img style={{height:'50px',width:'50px'}} src='https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/product-5.jpg' alt=''/></td>
                <td className='p-2 text-primary fw-bold'>Officiis quaerat sint rerum error</td>
                <td className='p-2 fw-light text-dark'>$64</td>
                <td className='p-2 text-dark fw-bold'>124</td>
                <td className='p-2 fw-light text-dark'>$5,828</td>
              </tr>
            </table>
          </div>
        </div>  
      
  )
}

export default TableblkBtm