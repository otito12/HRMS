import { FormControl, FormLabel, Grid, makeStyles, RadioGroup, TextField } from '@material-ui/core';
import { ControlPointSharp } from '@material-ui/icons';
import React, {useState,useEffect} from 'react';
import Controls from '../../components/controls/Controls';
import {useForm, Form} from '../../components/useForm';
import * as employeeService from '../../services/employeeService';

const genderItems = [
    {id:'male',title:'Male'},
    {id:'female',title:'Female'},
    {id:'other',title:'Other'}
]

const initialFValues = {
    id:0,
    fullName:'',
    email:'',
    mobile: '',
    city:'',
    gender:'male',
    department:'',
    hireDate:new Date(),
    isPermanent:false

}

export default function EmployeeForm(props) {

    const{addOrEdit, recordForEdit} = props 
    
    const validate = (fieldValues = values) => {
        let temp = {...errors}
        if('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName?"":"This field is required"
        if('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email)?"":"Email is not valid"
        if('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length>9?"":"Minimum 10 numbers required"
        if('department' in fieldValues)
        temp.department = fieldValues.department.length!=0?"":"This field is required"
        setErrors({
            ...temp
        })

        if(fieldValues == values) 
            return Object.values(temp).every(x => x =="")
    } 

    // Initialize userFrom 
    const{
        values,
        setValues,
        errors,
        setErrors,
        resetForm,
        handleInputChange
    }=useForm(initialFValues,true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()){
            addOrEdit(values,resetForm); 
        }
            
    }

    useEffect(() => {
        if(recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    },[recordForEdit])

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.TextFieldInput
                        name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        onChange = {handleInputChange}
                        error={errors.fullName}
                    />
                    <br/>
                    <Controls.TextFieldInput
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange = {handleInputChange}
                        error={errors.email}
                    />
                    <Controls.TextFieldInput
                        label="Mobile"
                        name="mobile"
                        value={values.mobile}
                        onChange = {handleInputChange}
                        error={errors.mobile}
                    />
                    <Controls.TextFieldInput
                        label="City"
                        name="city"
                        value={values.city}
                        onChange = {handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroupInput
                        label="Gender"
                        name="gender"
                        value={values.gender}
                        onChange = {handleInputChange}
                        items = {genderItems}
                    />
                    <br/>
                    <Controls.SelectInput
                        label="Department"
                        name = "department"
                        value={values.department}
                        onChange = {handleInputChange}
                        items = {employeeService.getDepartmentCollection()}
                        error={errors.department}
                    />
                    <Controls.DatePicker
                        label="Hire Date?"
                        name = "hireDate"
                        value={values.hireDate}
                        onChange = {handleInputChange}
                    />
                    <Controls.CheckInput
                        label="Is Permanent?"
                        name = "isPermanent"
                        value={values.isPermanent}
                        onChange = {handleInputChange}
                    />
                    <div>
                    <Controls.InputButton
                            text="Submit"
                            type="submit"
                        />
                    <Controls.InputButton
                        text="Reset"
                        color="default"
                        onClick={resetForm}
                        />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}
