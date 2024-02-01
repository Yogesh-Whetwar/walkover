import React from 'react'
import './top.css'
import Footer from '../footer/Footer';
import Rightbar from '../Rightbar';
function Top() {  

  const fun =()=>{
     
  }
  return (     
    <div className="walkover">

    <div className="yogi">

    <div  className='topmain'>
      <div className="first">
      <p  className='p1' >Default Phonebook   ID: 2345456  </p>
      <p className='p2'><i className="fa-solid fa-ellipsis-vertical dark"></i></p>  
      <hr />    

      <div className="inside">
      <p  className='p3' >356 K  </p>
      <p className='p4'>Contacts</p> 
      </div>
        
        <div className="inside2">
            <button className='btn1' onClick={fun} >+ Add Contact</button>
            <button className='btn2'>import logs</button>
            <button className='btn3'>Automations(15)</button>
        </div>


      </div>
      <div className="sec">
         
            <p className='pl' >Filter and Craete segment</p>  
          
          <div className="top2">

            <p className='p6' >Where</p>   
            <select className='select2' >
              <option value="alias">Alias</option>
     </select>
            <select className='select2' >
              <option value="alias">Select operator</option>'
              <option value="">+</option>
              <option value="">-</option>
              <option value="">*</option>
     </select>  
    
     <input type="text" placeholder='Enter a value'className='myinp2' />  
     <i className="fa-regular fa-trash-can"></i>
          </div>
          <div className="top3">
          <button className='btn4' >+ Add Conditions</button>
          </div>
      </div>
    </div>

   <Rightbar/>
    </div>  
    <Footer/>
    </div>
  )
}

export default Top;
