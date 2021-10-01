import {
  Container,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  makeStyles,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import { ControlPointSharp } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import Controls from "../../components/controls/Controls";
import { useForm, Form } from "../../components/useForm";
import * as employeeService from "../../services/employeeService";
import Models from "../../Models/Models";
import Constants from "../../Models/Constants";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const genderItems = Constants.genders;

const initialFValues = Models.userModel;

const useStyles = makeStyles((theme) => ({
  griditem: {
    "&.MuiGrid-item": {
      justifyContent: "flex-end",
    },
  },
  inputWidth: {
    width: "95%",
  },
}));

export default function EmployeeForm(props) {
  const { addOrEdit, recordForEdit } = props;

  const classes = useStyles();

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required";
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid";
    if ("mobile" in fieldValues)
      temp.mobile =
        fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required";
    if ("department" in fieldValues)
      temp.department =
        fieldValues.department.length != 0 ? "" : "This field is required";
    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  // Initialize userFrom
  const { values, setValues, errors, setErrors, resetForm, handleInputChange } =
    useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  };

  useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit]);

  const [currentPage, setCurrentPage] = useState(0);
  const maxPage = 2;

  const handleNext = () => setCurrentPage(currentPage + 1);
  const handlePrev = () => setCurrentPage(currentPage - 1);

  return (
    <Form onSubmit={handleSubmit} style={{ height: "500px" }}>
      <Grid container direction="column" justifyContent="space-around">
        {/* ----------Page 0 General information ------------*/}
        {currentPage === 0 && (
          <Grid container>
            <Grid item xs={12} style={{ marginBottom: "10px" }}>
              <Typography variant="h6">General Information</Typography>
            </Grid>
            <br />
            <Grid item xs={6}>
              <Controls.TextFieldInput
                name="fullName"
                label="Full Name"
                value={values.fullName}
                onChange={handleInputChange}
                error={errors.fullName}
              />
              <Controls.TextFieldInput
                name="lastName"
                label="Last Name"
                value={values.lastName}
                onChange={handleInputChange}
                error={errors.lastName}
              />
              <Controls.TextFieldInput
                name="taxNo"
                label="Tax Number"
                value={values.taxNo}
                onChange={handleInputChange}
                error={errors.taxNo}
              />
            </Grid>
            <Grid item xs={6}>
              <Controls.RadioGroupInput
                label="Gender"
                name="gender"
                value={values.gender}
                onChange={handleInputChange}
                items={genderItems}
              />
              <br />
              <Controls.DatePicker
                label="Date of Birth"
                name="dob"
                value={values.dob}
                onChange={handleInputChange}
              />
              <Controls.CheckInput
                label="Is Permanent?"
                name="isPermanent"
                value={values.isPermanent}
                onChange={handleInputChange}
              />
            </Grid>
            <Divider
              style={{
                width: "100%",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            />
            <Grid item xs={12} style={{ marginBottom: "10px" }}>
              <Typography variant="h6">Contact Information</Typography>
            </Grid>
            <br />
            <Grid item xs={6}>
              <Controls.TextFieldInput
                label="Email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
                error={errors.email}
              />
              <Controls.TextFieldInput
                label="Mobile"
                name="mobile"
                value={values.mobile}
                onChange={handleInputChange}
                error={errors.mobile}
              />
            </Grid>
            <Grid item xs={6}>
              <Controls.TextFieldInput
                label="Address"
                name="address"
                value={values.address}
                onChange={handleInputChange}
              />
              <Controls.TextFieldInput
                label="City"
                name="city"
                value={values.city}
                onChange={handleInputChange}
              />
            </Grid>

            <Divider
              style={{
                width: "100%",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            />
            <Grid item xs={12} style={{ marginBottom: "10px" }}>
              <Typography variant="h6">Tell us about you</Typography>
            </Grid>
            <Grid item xs={12}>
              <Controls.TextFieldInput
                name="aboutMe"
                label="About Me"
                value={values.aboutMe}
                onChange={handleInputChange}
                error={errors.aboutMe}
                style={{ width: "90%" }}
                multiline
                rows={4}
              />
            </Grid>
            <Grid container xs={12}>
              <Grid item xs={6}>
                <Controls.TextFieldInput
                  label="Skills"
                  name="skills"
                  value={values.skills}
                  onChange={handleInputChange}
                  error={errors.skills}
                />
              </Grid>
              <Grid item xs={6}>
                <Controls.TextFieldInput
                  label="Languages"
                  name="languages"
                  value={values.languages}
                  onChange={handleInputChange}
                  error={errors.languages}
                />
              </Grid>
            </Grid>
          </Grid>
        )}

        {/*------------- Page 1 Company information--------------- */}
        {currentPage === 1 && (
          <Grid container>
            <Grid item xs={12} style={{ marginBottom: "10px" }}>
              <Typography variant="h6">Company Information</Typography>
            </Grid>
            <br />
            <Grid item xs={6}>
              <Controls.TextFieldInput
                label="Job Title"
                name="jobTitle"
                value={values.jobTitle}
                onChange={handleInputChange}
                error={errors.jobTitle}
              />
              <Controls.SelectInput
                label="Department"
                name="department"
                value={values.department}
                onChange={handleInputChange}
                items={employeeService.getDepartmentCollection()}
                error={errors.department}
              />
              <Controls.SearchDrop
                // pull from employee service
                inputLabel="Manager"
                options={["Tim", "Jones"]}
              />
            </Grid>
            <Grid item xs={6}>
              <Controls.DatePicker
                label="Hire Date?"
                name="hireDate"
                value={values.hireDate}
                onChange={handleInputChange}
              />
              <Controls.SelectInput
                label="Office Location"
                name="officeLocation"
                value={values.officeLocation}
                onChange={handleInputChange}
                items={employeeService.getDepartmentCollection()}
                error={errors.officeLocation}
              />
            </Grid>
            <Divider
              style={{
                width: "100%",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            />
            <Grid item xs={12} style={{ marginBottom: "10px" }}>
              <Typography variant="h6">Projects</Typography>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                <Controls.CheckInput
                  label="Is Staffed?"
                  name="isStaffed"
                  value={values.isStaffed}
                  onChange={handleInputChange}
                />
                <Controls.SearchDrop
                  // pull from project service
                  inputLabel="Current Project"
                  options={["Tim", "Jones"]}
                />
              </Grid>
              <Grid item xs={12}>
                <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                  <Controls.AccordionDisplay
                    sx={{ width: "90%" }}
                    sectionTitle="Previous Projects"
                    // render list of previous projects
                    //pull from project service
                  >
                    <Divider
                      style={{
                        width: "100%",
                        marginBottom: "10px",
                        marginTop: "10px",
                      }}
                    />
                    <Grid
                      container
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Grid item>
                        <Typography variant="subtitle1">
                          Project name
                        </Typography>
                        <Typography variant="subtitle2">Client name</Typography>
                        <Typography variant="body2">Project Manager</Typography>
                        <Typography variant="body2">
                          Project Location
                        </Typography>
                        <Typography variant="body2">
                          Stand and end Date
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Controls.ActionButton variant="text">
                          View
                        </Controls.ActionButton>
                      </Grid>
                    </Grid>

                    <Divider
                      style={{
                        width: "100%",
                        marginBottom: "10px",
                        marginTop: "10px",
                      }}
                    />
                    <Grid
                      container
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Grid item>
                        <Typography variant="subtitle1">
                          Project name
                        </Typography>
                        <Typography variant="subtitle2">Client name</Typography>
                        <Typography variant="body2">Project Manager</Typography>
                        <Typography variant="body2">
                          Project Location
                        </Typography>
                        <Typography variant="body2">
                          Stand and end Date
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Controls.ActionButton variant="text">
                          View
                        </Controls.ActionButton>
                      </Grid>
                    </Grid>
                  </Controls.AccordionDisplay>
                </div>
              </Grid>
            </Grid>
          </Grid>
        )}

        {/*------------- Page 2 User Account Setup--------------- */}
        {currentPage === 2 && (
          <Grid container>
            <Grid item xs={12} style={{ marginBottom: "10px" }}>
              <Typography variant="h6">User Account Setup</Typography>
            </Grid>
            <br />
            <Grid item xs={6}>
              <Controls.TextFieldInput
                label="Employee username"
                name="jobTitle"
                value={values.jobTitle}
                onChange={handleInputChange}
                error={errors.jobTitle}
              />
              <Controls.TextFieldInput
                label="Confirm employee username"
                name="jobTitle"
                value={values.jobTitle}
                onChange={handleInputChange}
                error={errors.jobTitle}
              />

              <Controls.TextFieldInput
                label="Employee Password"
                name="jobTitle"
                value={values.jobTitle}
                onChange={handleInputChange}
                error={errors.jobTitle}
              />

              <Controls.TextFieldInput
                label="Confirm Employee Password"
                name="jobTitle"
                value={values.jobTitle}
                onChange={handleInputChange}
                error={errors.jobTitle}
              />
              <Divider
                style={{
                  width: "80%",
                  margin: "10px",
                }}
              />
              <Controls.SelectInput
                // pull from employee service
                label="Employee Role"
                name="employeeRole"
                value={values.employeeRole}
                onChange={handleInputChange}
                items={employeeService.getDepartmentCollection()}
                error={errors.employeeRole}
              />
            </Grid>
          </Grid>
        )}

        {/* Buttons */}
        <Grid
          container
          xs={12}
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-end"
          style={{ marginTop: "25px", marginBottom: "25px" }}
        >
          <Grid item>
            {currentPage > 0 && (
              <Controls.InputButton
                text="Previous"
                color="default"
                onClick={() => handlePrev()}
              ></Controls.InputButton>
            )}
            {currentPage < maxPage && (
              <Controls.InputButton
                text="Next"
                color="default"
                onClick={() => handleNext()}
              ></Controls.InputButton>
            )}
            {currentPage === maxPage && (
              <Controls.InputButton text="Submit" type="submit" />
            )}
            <Controls.InputButton
              text="Reset"
              color="default"
              onClick={resetForm}
            />
          </Grid>
        </Grid>
      </Grid>
    </Form>
  );
}
