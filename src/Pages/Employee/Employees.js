import React, { useState } from 'react';
import EmployeeForm from './EmployeeForm';
import PageHeader from '../../components/PageHeader';
import PeopleIcon from '@material-ui/icons/People';
import { InputAdornment, makeStyles, Paper, TableBody, TableCell, TableRow, Toolbar } from '@material-ui/core';
import useTable from '../../components/useTable';
import * as employeeService from '../../services/employeeService';
import Controls from '../../components/controls/Controls';
import { Search } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import Popup from '../../components/Popup';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Notification from '../../components/Notification';
import ConfirmDialog from '../../components/ConfirmDialog';

const useStyles = makeStyles(theme => ({
    pageContent:{
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput:{
      width: '75%'
    },
    newButton:{ 
      position: 'absolute',
      right: '10px'
    }

}));

const headCells = [
  {id:'fullName', label:'Employee Name'},
  {id:'email', label:'Email Address'},
  {id:'mobile', label:'Mobile Number'},
  {id:'department', label:'Department'},
  {id:'actions', label:'Actions',disableSort:'true'},
]



export default function Employees() {
    const classes=useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [records, setRecords] = useState(employeeService.getAllEmployees());
    const [filterFn, setFilterFn] = useState({fn: items => {return items; }});
    const [openPopup, setOpenPopup] = useState(false);
    const [notify, setNotify] = useState({isOpen:false,message:'',type:''});
    const [confirmDialog, setConfirmDialog] = useState({title:'',subTitle:'',isOpen:false,onDelete:null});


    const{
      TblContainer,
      TblHead,
      TblPagination,
      recordsAfterPagingAndSorting
    }=useTable(records,headCells, filterFn);

    const handleSearch = e => {
      let target = e.target;
      setFilterFn({
        fn: items => {
          if (target.value =="")
            return items 
            else 
            return items.filter(x => x.fullName.toLowerCase().includes(target.value))
        }
      })

    }
    const addOrEdit = (employee, resetForm) =>{
      if (employee.id==0)
        employeeService.insertEmployee(employee);
        else 
        employeeService.updateEmployee(employee);
      resetForm();
      setRecordForEdit(null);
      setOpenPopup(false);
      setRecords(employeeService.getAllEmployees());
      setNotify({
        isOpen:true,
        message:'Submitted Successfully',
        type:'success'
      });
    }

    const deleteEmployee = (employeeId) => {
      setConfirmDialog({
        ...confirmDialog,
        isOpen:false
      });
      employeeService.deleteEmployee(employeeId);
      setRecords(employeeService.getAllEmployees());
      setNotify({
        isOpen:true,
        message:'Deleted Successfully',
        type:'error'
      });
    }

    const openInPopUp = (item) => {
      setRecordForEdit(item);
      setOpenPopup(true);
    }
    return (
        <>
        <PageHeader
          title = "Manage Employee's"
          subTitle = "Manage Employee's in your "
          icon = {<PeopleIcon fontSize="Large"/>}
          />
          <Paper className = {classes.pageContent}>
          <Toolbar>
            <Controls.TextFieldInput
                label="Search Employees"
                className = {classes.searchInput}
                onChange = {handleSearch}
                InputProps= {{
                    startAdornment:(<InputAdornment position="start">
                      <Search/>
                    </InputAdornment>)
                  }}
              />
              <Controls.InputButton className = {classes.newButton}
                text="Add Employee"
                variant = "outlined"
                startIcon = {<AddIcon/>}
                onClick = {()=> {setOpenPopup(true); setRecordForEdit(null);}}
              />
            </Toolbar>
            <TblContainer>
              <TblHead/>
              <TableBody>
                {recordsAfterPagingAndSorting().map(item =>(
                  <TableRow key = {item.id}>
                    <TableCell>{item.fullName}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.mobile}</TableCell>
                    <TableCell>{item.department}</TableCell>
                    <TableCell>
                      <div style = {{display: 'flex'}}>
                        <Controls.ActionButton
                        color = 'primary'
                        fontSize="small"
                        onClick = {()=> openInPopUp(item)}
                        >
                          <EditIcon/>
                        </Controls.ActionButton>
                        <Controls.ActionButton
                        color = 'secondary'
                        fontSize="small"
                        onClick={()=>{
                          setConfirmDialog({
                            title:'Are you sure you want to delete?',
                            subtitle:"You can't undo this operation",
                            isOpen:true,
                            onDelete: () => deleteEmployee(item.id)
                          })
                        }
                        
                        }>
                          <DeleteIcon/>
                        </Controls.ActionButton>
                      </div>
                    </TableCell>
                  </TableRow>))
                  }
              </TableBody>
            </TblContainer>
            <TblPagination/>
          </Paper>
          <Popup
            openPopup = {openPopup}
            setOpenPopup = {setOpenPopup}
            title = "Employee Form"
          >
            <EmployeeForm
            recordForEdit={recordForEdit}
            addOrEdit= {addOrEdit}
            />
          </Popup>
          <Notification
            notify ={notify}
            setNotify={setNotify}
          />
          <ConfirmDialog
            confirmDialog= {confirmDialog}
            setConfirmDialog = {setConfirmDialog}
          />
        </>
        
    )
}
