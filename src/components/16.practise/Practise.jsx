import React, { useEffect, useState } from 'react'

import { fetchDataFromApi } from './api';

function Practise() {

  useEffect(()=>{
    apiTesting()
  },[])

  const apiTesting=()=>{
    fetchDataFromApi('./movie/popular').
    then((res)=>{
       console.log(res);
    })
  }

    const[previous,setPrevious]=useState('hello chai pello');
    const arr=[10,20,30];
    const user=[{10:"manager"},{20:"waiter"},{2:"ceo"}];
  return (
    <div>
    {
      
      user[0][10]?(
        user[0][10]==="manager"?(
          user[0][20]==="waiter"?(
            <p>you are really bad</p>
          ):
          <p>you should not worry 
            {arr[0]} hy
          </p>
        ):
        <p>bharat mata ki jay</p>
      ):
        <p>relly weeeee</p>
    }
  </div>
  )
}

export default Practise;


//how to write conditions in jsx

//not need of braces for condition
//statement of condtion inside ()
//for every ? there should :