import React, { useState } from 'react'
import "./inputbox.css"

function FormValidation() {

    const[formData,setFormData]=useState({
        username:'',
        email:'',
        password:''
    })

    const[errors,setErrors]=useState({
        username:'',
        email:'',
        password:''
        
    })

    function handleFormChange(event){
        const {name,value}=event.target;
        console.log("name value",name,value);
       setFormData({...formData,
        [name]:value,
       })
     validateInput(name,value);
    }

    console.log(formData);

    const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


    function validateInput(getName,getValue){
        switch(getName){
            case 'username':
                setErrors(prevErrors=>({
                    ...prevErrors,
                    username : getValue.length < 3 ? "UserName must be at lease 3 character":''
                }))
                break;

                case 'email':
                    setErrors(prevErrors=>({
                        ...prevErrors,
                        email:emailRegex.test(getName) ? ' ':'Invalid Email address ! plese try to write new one'
                    }))
                    break;

                    case 'password':
                        setErrors(prevErrors=>({
                            ...prevErrors,
                          password:getValue.length<5 ? "password must be 5 characters" : ""
                        }))
                        break;
        }
    }

    function handleFormSubmit(event){
        event.preventDefault;
        const validateErrors={};

        Object.keys(formData).forEach(dataItem=>{
            validateInput(dataItem,formData[dataItem])
            if(errors[dataItem]){
                validateErrors[dataItem]=errors[dataItem];
            }
            setErrors(prevErros=>({
                ...prevErros,
                ...validateErrors
            }))

            if(Object.values(validateErrors).every(error=>error===''))
                {

                }
            else{
                console.log("erroe is there ")
            }
        })
    }

  return (
    <div>
       <h1>simple form validation</h1>
       
       <form onSubmit={handleFormSubmit} className='form-validation-container'>
            <div className="input-wrapper">
                <label htmlFor='username'>User Name</label>
                <input type="text" 
                name='username'
                placeholder='Enter your username'
                id='username'
                value={formData.username}
                onChange={handleFormChange}
                />
                 <span>{errors?.username}</span>
            </div>

            <div className="input-wrapper">
                <label htmlFor='email'>email</label>
                <input type="email" 
                name='email'
                id='email'
                placeholder='Enter your useremail'
                value={formData.email}
                onChange={handleFormChange}
                />
                 <span>{errors?.email}</span>
            </div>
            <div className="input-wrapper">
                <label htmlFor='password'>password</label>
                <input type="password" 
                name='password'
                id='password'
                placeholder='Enter your password'
                value={formData.password}
                onChange={handleFormChange}
                />
                 <span>{errors?.password}</span>
            </div>
            <button type='submit'></button>
       </form>
    </div>
  )
}
   
export default FormValidation
