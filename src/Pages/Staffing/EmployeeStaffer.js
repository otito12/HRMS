import React from 'react';
import PageHeader from '../../components/PageHeader';
import WorkIcon from '@mui/icons-material/Work';


export default function EmployeeStaffer() {
    return (
        <>
        <PageHeader
          title = "Employee Staffer"
          subTitle = "Staff Employee's on projects in your organization"
          icon = {<WorkIcon fontSize="Large"/>}
          />
        </>
    )
}
