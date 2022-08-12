import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import { Dropdown } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
import { useForm } from 'react-hook-form';
import { states } from '../../data/states';
import "react-datepicker/dist/react-datepicker.css";
import './form.css';

function Form() {

    const [toggle, setToggle] = useState(false)

    const [startDate, setStartDate] = useState(new Date())


    const value ='custom-id'
    

   console.log(states[0])

    const closeModal = () => {
      setToggle(false)
    }

    const onSubmit = data => {
       console.log(data)
       setToggle(true)
    }

    const onErrors = errors => console.error(errors)
    const { register, handleSubmit, reset, formState: {errors}} = useForm()

  return (
    <form 
        className ="form"
        onSubmit ={handleSubmit(onSubmit, onErrors)}
        id="create-employee"
    >
        <label htmlFor="first-name">First Name</label>
        <input 
            type="text" 
            id="first-name" 
            {...register('firstName', {required: "firstname is required"})}
        />
        {errors?.firstName && <p style={{ color: 'red', margin: 0}}>{errors.firstName.message}</p>}

        <label htmlFor="last-name">Last Name</label>
        <input 
            type="text" 
            id="last-name" 
            {...register('lastName', {required: "lastname is required"})}
        />
         {errors?.lastName && <p style={{ color: 'red', margin: 0}}>{errors.lastName.message}</p>}

        <label htmlFor="date-of-birth">Date of Birth</label>
        <DatePicker 
            id="date-of-birth"
            selected={startDate} 
            onChange={(date) => setStartDate(date)}
        />

        <label htmlFor="start-date">Start Date</label>
        <input id="start-date" type="text" />

            <fieldset className="address">
                <legend>Address</legend>
                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" />

                    <label htmlFor="state">State</label>
                   

                    <Dropdown
                        placeholder={states[0].name}
                        className="state"
                        options={states}
                        value = {value}
                        matcher ={(item, val) => {
                            return item.id === val
                        }}
                        onChange ={(value) => console.log('changer', value)}
                        onSelect= {(value) => console.log('selected', value)}
                        onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
                        onOpen={() => console.log('open!')}
                    />

                   

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" />
            </fieldset>

        <label htmlFor="department">Department</label>
        <select name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
         </select>

         <button 
            type='submit'
        >
            Save
        </button>
    </form>
  )
}
export default Form