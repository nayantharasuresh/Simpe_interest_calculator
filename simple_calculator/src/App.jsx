
import './App.css'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { isValidElement } from 'react';



function App() {
  const [amount, setAmount]=useState("")
  const [rate,setRate]=useState("")
  const [year,setYear]=useState("")
  const [interest,setIntrest]=useState(0)
  console.log(interest);
  

  const [isInvalidPrinciple,setIsInvalidPrinciple]=useState(false)
  const [isInvalidRate,setIsInvalidRate]=useState(false)
  const [isInvalidYear,setIsInvalidYear]=useState(false)
  console.log(amount, rate, year);

  const validaregex=/^[0-9]*.?[0-9]+$/
  

  const validateInput=(e)=>{
    console.log(e);

    const {name, value}=e.target
    console.log(name, value);

    if(name=='principle'){
      setAmount(value)
    }
    else if(name=='rate'){
      setRate(value)
    }
    else{
      setYear(value)
    }
   if( validaregex.test(value) || value==""){
    if(name=='principle'){
      setIsInvalidPrinciple(false)
    }
   }
   else{
    if(name=='principle'){
      setIsInvalidPrinciple(true)
    }
   }

   if( validaregex.test(value) || value==""){
    if(name=='rate'){
      setIsInvalidRate(false)
    }
   }
   else{
    if(name=='rate'){
      setIsInvalidRate(true)
    }
   }

   if( validaregex.test(value) || value==""){
    if(name=='year'){
      setIsInvalidYear(false)
    }
   }
   else{
    if(name=='year'){
      setIsInvalidYear(true)
    }
   }
  }
  const handleCalculate=(e)=>{
    e.preventDefault()

    console.log("Calculate simple intrest");
    if(amount && rate && year){
     setIntrest( (amount*rate*year)/100)
    }
    else{
      alert("please enter the field completely")
    }
    
  }
  const handleReset=()=>{
    setAmount("")
    setRate("")
    setYear("")
    setIntrest(0)
    isInvalidPrinciple(false)
    isInvalidRate(false)
    isInvalidYear(false)

  }
  

  return (

    <>

<div className='bg-black d-flex text-align-center align-items-center justify-content-center' style={{height:'100vh',width:'100%'}}>
        <div className='bg-light rounded p-5' style={{width:'500px',height:'650px'}}>
          <h1>Simple Interest Calculator</h1>
          <p> calculate your simple interest easily</p>
          <div className=' text-light bg-warning rounded d-flex flex-column align-items-center justify-content-center' style={{height:'150px'}}>
            <h1 style={{fontsize:'50px'}}>₹ &nbsp;{interest}</h1>
            <h1>total simple interest</h1>
            
          </div>
          <form>
          <div className='mt-5' >
          <TextField onChange={validateInput} value={amount || ""} name='principle' id="principle_amount" label="Amount" variant="outlined" className='w-100 mb-3' />
          {isInvalidPrinciple &&
          <div className='fw-bold  text-danger mb-2'>Invalid principle Amount</div>}
          <TextField onChange={validateInput} value={rate || ""} name='rate' id="intrest_rate" label="Rate" variant="outlined" className='w-100 mb-3' />
          {isInvalidRate &&
          <div className='fw-bold  text-danger mb-2'>Invalid principle Rate</div>}
          <TextField onChange={validateInput} value={year || ""} name='year' id="time_period" label="Year" variant="outlined" className='w-100 mb-3' />
          {isInvalidYear &&
          <div className='fw-bold  text-danger mb-2'>Invalid principle Year</div>}
          </div>
          <Stack direction="row" spacing={2}>
           <button type='submit' onClick={handleCalculate} disabled={isInvalidPrinciple || isInvalidRate || isInvalidYear} className=' btn-border w-50 bg-dark text-light' variant="contained">Calculate</button>
               <button onClick={handleReset} className=' btn-border  w-50' variant="outlined">Reset</button>
 
</Stack>
          </form>
        </div>
      </div>
      
    </>
  )
}

export default App
