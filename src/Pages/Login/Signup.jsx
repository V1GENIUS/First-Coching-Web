import React from 'react'
import Navbar from '../../Components/Navbar'
function Signup() {
  return (
    <div>
       <Navbar/>
      <form className="form">
        <ul>
        <h2> Signup page</h2>
        <br/>
        <br/>
        <label className='lable'>Name  :    <input type='name'>
        </input> </label>
        <br/>
        <br/>
        <label className='lable'>number  : <input type='number'>
        </input> </label>
        <br/>
        <br/>
        <label className='lable'>email  :<input type='email'>
        </input> </label>
        <br/>
        <br/>
        <button className='submit'>Submit </button>
        </ul>
      </form>
    </div>
  )
}

export default Signup