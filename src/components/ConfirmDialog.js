import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, makeStyles, Typography } from '@material-ui/core'
import { NotListedLocation, NotListedLocationOutlined } from '@material-ui/icons';
import React from 'react'
import Controls from './controls/Controls';

const useStyles = makeStyles(theme => ({
    dialog: {
        padding:theme.spacing(2),
        position:'absolute',
        top:theme.spacing(5)
    },
    dialogTitle:{
        textAlign:'center'
    },
    dialogContent:{
        textAlign:'center'
    },
    dialogAction:{
        justifyContent:'center'
    },
    titleIcon:{
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.secondary.main,
        '&:hover':{
            backgroundColor: theme.palette.secondary.light,
            cursor: 'default'
        },
        '& .MuiSvgIcon-root':{
            fontSize: '8rem'
        }

    }
}));

export default function ConfirmDialog(props) {

    const{ confirmDialog, setConfirmDialog} = props;
    const classes =useStyles();
    return (
        <Dialog open={confirmDialog.isOpen} classes={{paper:classes.dialog}}>
            <DialogTitle className={classes.dialogTitle}>
                <IconButton disableRipple className={classes.titleIcon}>
                    <NotListedLocationOutlined/>
                </IconButton>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <Typography
                variant="h6">
                    {confirmDialog.title}
                </Typography>
                <Typography
                variant="subtitle">
                    {confirmDialog.subtitle}
                </Typography>
            </DialogContent>
            <DialogActions className={classes.dialogAction}>
                <Controls.InputButton
                text="Yes"
                color="default"
                onClick = {confirmDialog.onDelete}
                />
                <Controls.InputButton
                text="No"
                color="secondary"
                onClick = {()=> setConfirmDialog({...confirmDialog,isOpen:false})}
                />
            </DialogActions>
        </Dialog>
            
        
    )
}
