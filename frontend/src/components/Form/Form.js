import React, { useState } from 'react';
import { states } from '../../data/states';
import { Formik , Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import './form.css';

function Forms() {

    const [toggle, setToggle] = useState(false)
    const [ data, setData ] = useState()
    
    const closeModal = () => {
      setToggle(false)
    }

    const validationSchema = Yup.object().shape({
        firstname: Yup.string()
            .required("Your first name is required"),
        lastname: Yup.string()
            .required("Your lastname is required"),
        birth: Yup.date()
            .required("Birth date is required"),
        start: Yup.date()
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
        birth: "",
        start: "",
        street: "",
        city: "",
        state: "Alabama",
        zip: "",
        department: "Sales" 
    }

console.log(data)
  
return(

    <Formik
        initialValues={initialValues}                  
        validationSchema={validationSchema}
        onSubmit= {( values) => {
            values.birth = new Date(values.birth).toLocaleDateString()
            values.start = new Date(values.start).toLocaleDateString()
            setData(values)
        }}
    >
        <Form>

          <label htmlFor="firstname"> First Name</label>
            <Field
                placeholder="Enter your first name"
                type="text"
                name="firstname"
            />
            <ErrorMessage 
                name="firstname"
            />

          <label htmlFor="lastname">Last Name</label>
            <Field
                placeholder="Enter your last name"
                type="text"
                name= "lastname"
            />
            <ErrorMessage 
                name="lastname"
            />
                  
         <label htmlFor="birth"> Birth Date </label>
            <Field 
                type="date"
                name="birth"
            />
            <ErrorMessage 
                name="birth"
            />        

        <label htmlFor="start"> Start Date </label>
            <Field 
                type="date"
                name="start"
            />
            <ErrorMessage 
                name="start"
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
                        name="street"
                    />                                    
                <label htmlFor="city">City</label>
                    <Field                        
                        type="text" 
                        name="city"
                        placeholder="Enter your city"                     
                    />
                    <ErrorMessage 
                        name="city"
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
                        name="zip"
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
          
          <button type="submit" //disabled={isSubmitting}
          >
            Submit
          </button> 
        </Form>
    </Formik>
  )
}

export default Forms