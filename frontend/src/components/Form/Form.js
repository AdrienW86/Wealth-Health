import React, { useEffect, useState } from 'react';
import { states } from '../../data/states';
import { Formik , Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './form.css';
import Modal from '../Modal/Modal';

import { tableData} from "../../data/table"

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
        state: "Alabama",
        zip: "",   
    }

         
    if(localStorage.length === 0) {
        console.log("init localestorage")
        localStorage.setItem("list", JSON.stringify(tableData))
    }
    
useEffect(() => {  
    let storage = JSON.parse(localStorage.getItem("list"))
    console.log(storage)
        if(data === null) {
            console.log("que dalle")               
        }else{
            storage.push(data)
            console.log(storage)
            localStorage.setItem("list", JSON.stringify(storage))
        }      
}, [data])
 

console.log(data)
return(
    <>
    <Formik
        initialValues={initialValues}                  
        validationSchema={validationSchema}
        onSubmit= {( values, {resetForm}) => {
            values.dateOfBirth = new Date(values.dateOfBirth).toLocaleDateString()
            values.startDate = new Date(values.startDate).toLocaleDateString()
            values.zip = values.zip.toString()
            setData(values)
            resetForm()
            setToggle(true)           
        }}
    >
        <Form className='form'>
          <label htmlFor="firstname"> First Name</label>
            <Field
                placeholder="Enter your first name"
                type="text"
                name="firstname"
            />
            <ErrorMessage 
                name="firstname"
                style={{color: "#AB1E00 "}}
                component="span"
            />
          <label htmlFor="lastname">Last Name</label>
            <Field
                placeholder="Enter your last name"
                type="text"
                name= "lastname"
            />
            <ErrorMessage 
                className='error'
                name="lastname"
                style={{color: "#AB1E00 "}}
                component="span"
            />                 
         <label htmlFor="dateOfBirth"> Birth Date </label>
            <Field 
                type="date"
                name="dateOfBirth"
            />
            <ErrorMessage 
                className='error'
                name="dateOfBirth"
                style={{color: "#AB1E00 "}}
                component="span"
            />        
        <label htmlFor="startDate"> Start Date </label>
            <Field 
                type="date"
                name="startDate"               
            />
            <ErrorMessage 
                className='error'
                name="startDate"
                style={{color: "#AB1E00 "}}
                component="span"
            />        
        <fieldset className="address">
            <legend>Address</legend>
                <label htmlFor="street">Street</label>
                    <Field  
                        type="text"
                        name="street"
                        placeholder="Enter your street"
                    />
                    <ErrorMessage 
                        className='error'
                        name="street"
                        style={{color: "#AB1E00 "}}
                        component="span"
                    />                                    
                <label htmlFor="city">City</label>
                    <Field                        
                        type="text" 
                        name="city"
                        placeholder="Enter your city"                     
                    />
                    <ErrorMessage
                        className='error' 
                        name="city"
                        style={{color: "#AB1E00 "}}
                        component="span"
                    />                                                       
                <label htmlFor="state">State</label>                  
                    <Field as="select" 
                        name="state"  
                        type="text"   
                        placeholder="Enter your state"                       
                    >                             
                        {states.map((state, index) => {
                            return <option key={index}> {state.name} </option>
                        })}                          
                    </Field>     
                 
                <label htmlFor="zip">Zip Code</label>
                    <Field 
                        name="zip" 
                        type="number"
                        placeholder="Enter your zip code"
                    />
                    <ErrorMessage 
                        className='error'
                        name="zip"
                        style={{color: "#AB1E00 "}}
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
        />
    : null}
    </>
  )
}

export default Forms