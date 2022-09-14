import React, { useEffect, useState } from 'react';
import { states } from '../../data/states';
import { Formik , Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './form.css';
import { Modal } from 'modale-custom-react';
import { tableData } from "../../data/table"

function Forms() {

    const [toggle, setToggle] = useState(false)
    const [ data, setData ] = useState(null)

    const closeModal = () => {
        setToggle(false)
    }

    const validationSchema = Yup.object().shape({
        firstname: Yup.string()
            .required("Your first name is required"),
        lastname: Yup.string()
            .required("Your last name is required"),
        dateOfBirth: Yup.date()
            .required("Birth date is required"),
        startDate: Yup.date()
            .required("Start date is required"),
        street: Yup.string()
            .required("Street is required"),
        city: Yup.string()
            .required("City is required"),
        state: Yup.string()
            .required("State is required"),
        zip: Yup.number()          
            .required("Zip code is required"),
        department: Yup.string()
            .required("Department is required")
    });

    const initialValues = {
        firstname: "", 
        lastname: "", 
        startDate: "",
        department: "Sales",
        dateOfBirth: "", 
        street: "",
        city: "",
        state: "",
        zip: "",   
    }
        
    if(localStorage.length === 0) {
        console.log("init localestorage")
        localStorage.setItem("list", JSON.stringify(tableData))
    }
    
useEffect(() => {  
    let storage = JSON.parse(localStorage.getItem("list"))
        if(data !== null) {
            storage.push(data)
            localStorage.setItem("list", JSON.stringify(storage))
        }      
}, [data])
 
return(
    <>
    <Formik
        initialValues={initialValues}                  
        validationSchema={validationSchema}
        onSubmit= {( values, {resetForm}) => {
            let re = /-/gi;
            values.dateOfBirth = values.dateOfBirth.replace(re, '/')
            values.startDate = values.startDate.replace(re, '/')
            values.state = values.state
            values.zip = values.zip.toString()
            console.log(values.state)
            setData(values)
            resetForm()
            setToggle(true)           
        }}
    >
        <Form className='form' aria-label='form to add employee'>
          <label htmlFor="firstname"> First Name</label>
            <Field
                aria-label="input for first name"
                placeholder="Enter your first name"
                type="text"
                name="firstname"
            />
            <ErrorMessage 
                name="firstname"
                style={{color: "#AB1E00"}}
                component="span"
            />
          <label htmlFor="lastname">Last Name</label>
            <Field
                aria-label="input for last name"
                placeholder="Enter your last name"
                type="text"
                name= "lastname"
            />
            <ErrorMessage 
                className='error'
                name="lastname"
                style={{color: "#AB1E00"}}
                component="span"
            />                 
         <label htmlFor="dateOfBirth"> Birth Date </label>
            <Field 
                aria-label="input for birthdate"
                type="date"
                name="dateOfBirth"
            />
            <ErrorMessage 
                className='error'
                name="dateOfBirth"
                style={{color: "#AB1E00"}}
                component="span"
            />        
        <label htmlFor="startDate"> Start Date </label>
            <Field 
                aria-label="input for start date"
                type="date"
                name="startDate"               
            />
            <ErrorMessage 
                className='error'
                name="startDate"
                style={{color: "#AB1E00"}}
                component="span"
            />        
        <fieldset className="address">
            <legend>Address</legend>
                <label htmlFor="street">Street</label>
                    <Field  
                        aria-label="input street"
                        type="text"
                        name="street"
                        placeholder="Enter your street"
                    />
                    <ErrorMessage 
                        className='error'
                        name="street"
                        style={{color: "#AB1E00"}}
                        component="span"
                    />                                    
                <label htmlFor="city">City</label>
                    <Field     
                        aria-label="input for city"               
                        type="text" 
                        name="city"
                        placeholder="Enter your city"                     
                    />
                    <ErrorMessage
                        className='error' 
                        name="city"
                        style={{color: "#AB1E00"}}
                        component="span"
                    />                                                       
                <label htmlFor="state">State</label>                  
                    <Field 
                        as="select" 
                        className="select-adress"
                        aria-label="input for select state"
                        name="state"  
                        type="text"                          
                    >                             
                        {states.map((state, index) => {
                            return <option 
                                        key={index}
                                        value = {state.abbreviation}
                                     > {state.name} 
                                    </option>
                        })}                          
                    </Field>  
                    <ErrorMessage 
                        className='error'
                        name="state"
                        style={{color: "#AB1E00"}}
                        component="span"
                    />                      
                <label htmlFor="zip">Zip Code</label>
                    <Field 
                        name="zip" 
                        type="number"
                        placeholder="Enter your zip code"
                        aria-label="input for zip code"
                    />
                    <ErrorMessage 
                        className='error'
                        name="zip"
                        style={{color: "#AB1E00"}}
                        component="span"
                    />                
        </fieldset>
        <label htmlFor="department"> Department</label>
            <Field   
                as="select"         
                name="department"
                type="text"
                placeholder="Enter your street"         
            >                
                <option>Sales</option>
                <option>Marketing</option>
                <option>Engineering</option>
                <option>Human Resources</option>
                <option>Legal</option>
            </Field>          
          <button 
            className='btn-submit'
            type="submit" 
          >
            Submit
          </button>
        </Form>
    </Formik>
    {toggle 
        ?
    <Modal
        close = {closeModal}
        text = "employee Created!"
        />
    : null}
    </>
  )
}

export default Forms