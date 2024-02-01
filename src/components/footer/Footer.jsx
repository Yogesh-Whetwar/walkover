import React from 'react'
import './footer.css'
function Footer() {
  return (
    <div className='footer' >
       <div className="divf1">  
       <button className='btn6' >Table</button>
       <button className='btn7' >JSON</button>
       <button className='btn8' >Launch Campaign (356K)</button>
       <select  className='mysel' >
        <option value="">Coloumn Settings</option>
        <option value="">A</option>
        <option value="">B</option>
        <option value="">C</option>
       </select>  
       <i class="fa-solid fa-left-right mycon"></i>
       <i className="fa-solid fa-arrow-rotate-right mycon" ></i>
       <i className="fa-solid fa-ellipsis-vertical mycon"></i>
        </div>   
        <div className="divf2">
        <table>
            <tr>
                <th>S No.</th>
                <th>Contact Id</th>
                <th>Name</th>
                <th>Phone number</th>
                <th>Email</th>
                <th>Created at</th>
                <th>Updated at</th>
            </tr>
            <tr>
                <td>1</td>
                <td>26_12_23_13_45_56</td>
                <td>Devendra Patidar</td>
                <td>919898398693</td>
                <td>devendra@walkover.in</td>
                <td>21 Jan</td>
                <td>21 Jan</td>
            </tr>
            <tr>
                <td>2</td>
                <td>26_12_23_13_45_56</td>
                <td>Devendra Patidar</td>
                <td>919898398693</td>
                <td>devendra@walkover.in</td>
                <td>21 Jan</td>
                <td>21 Jan</td>
            </tr>
            <tr>
                <td>3</td>
                <td>26_12_23_13_45_56</td>
                <td>Devendra Patidar</td>
                <td>919898398693</td>
                <td>devendra@walkover.in</td>
                <td>21 Jan</td>
                <td>21 Jan</td>
            </tr>
            
            <tr>
                <td>4</td>
                <td>26_12_23_13_45_56</td>
                <td>Devendra Patidar</td>
                <td>919898398693</td>
                <td>devendra@walkover.in</td>
                <td>21 Jan</td>
                <td>21 Jan</td>
            </tr>
        </table>
        </div>
    </div>
  )
}

export default Footer
