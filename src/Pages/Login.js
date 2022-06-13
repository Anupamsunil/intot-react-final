import React, {useState}from 'react';

function Login(){



const[email,setEmail]=useState=("")
const[password,setPassword]=useState=("")
const[city,setCity]=useState=("")
const[zip,setZip]=useState=("")



    return(
        <>
        <div className='container'>
            <div className='row'>
              <div className ="col-4">  

              <form className='row g-3'>
    <div className='col-md-6'>
        <label htmlFor="inputEmail4" class="htmlForm-label">Email</label>
        <input type="email" class="htmlForm-control" id="inputEmail4" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
    </div>

    <div className='col-md-6 '>
        <label htmlFor="inputPassword4" class="htmlForm-label">Password</label>
        <input type="password" class="htmlForm-control" id="inputPassword4" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
    </div>

    <div className='col-md-6'>
        <label htmlFor="inputCity" class="htmlForm-label">City</label>
        <input type="text" class="htmlForm-control" id="inputCity" value={city} onChange={(e)=>{setCity(e.target.value)}}></input>
    </div>

    <div className='col-md-2'>
        <label htmlFor="inputZip" class="htmlForm-label">Zip</label>
        <input type="text" class="htmlForm-control" id="inputZip" value={zip} onChange={(e)=>{setZip(e.target.value)}}></input>
    </div>
    
   <div className='col-12'>
    <button type="submit" className="btn btn-primary">Login</button>
   </div>
   </form>     
                     
              </div> 
            </div>
        </div>


</>
    );
}
export default Login;
