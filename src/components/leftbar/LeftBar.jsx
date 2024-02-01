import React from 'react'
import './leftsidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function leftsidebar() {
  return (
    <div className="top">

    <div className='main2' >  
    
    <div className="main">

    <div className='heading' >Segmento </div>

       <div className='drop'>
       
<select className='selectone' >
   
  <option value=""></option>
  <option value="ph">  Phonebook name</option>

  <option value="contact">All contacts</option>

  <option value="search">Search segments</option>
  <option value="anonymous">AnonymousUsers</option>
  <option value="Inactive">Inactive</option>
  <option value="">Segment_1</option>
  <option value="">Support</option>

</select>

</div>  
<div className='cut' ><i className="fa-solid fa-arrow-left"></i></div>  
    </div>
  <div className="values">
    <ul  className='mylist' >
      <li  className='listele' > <i className="fa-solid fa-address-book"></i>Phonebook name</li>
      <li className='listele'><i className="fa-solid fa-phone"></i>All contacts</li>

      <li className='listele'><i className="fa-solid fa-magnifying-glass"></i><input type="text" id='searchele'  placeholder='Search segments'/> </li>


      <li className='listele'><i className="fa-solid fa-user"></i>AnonymousUsers</li>

      <li className='listele'><i className="fa-solid fa-person-arrow-down-to-line"></i> Inactive</li>
      <li className='listele'><i className="fa-solid fa-1"></i> Segment_1</li>
      <li className='listele'><i className="fa-brands fa-hire-a-helper"></i>Support</li>
    </ul>
  </div>

    <button  className='subbtn' >Subscription</button>  
    <div className="comp"><i class="fa-regular fa-user"></i> My Company<i class="fa-solid fa-caret-up fa-lg"></i></div>
    </div>  
    </div>
  )
}

export default leftsidebar
