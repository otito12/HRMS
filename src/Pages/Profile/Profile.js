import React from 'react';
import { useAuth0 , withAuthenticationRequired} from '@auth0/auth0-react';
import Loading from '../../components/Loading';
import {Paper, Typography, makeStyles} from '@material-ui/core';
import Controls from '../../components/controls/Controls';
import EditIcon from '@mui/icons-material/Edit';

const useStyles = makeStyles(theme => ({
  root:{
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    width: '70%',
    wordWrap: 'break-word',
    padding:theme.spacing(4),
    margin:theme.spacing(5)
  },
  profilePicture:{
    width:'150px', 
    margin:theme.spacing(2)
  }


}));

function Profile() {

  const classes = useStyles();
    const {
        isLoading,
        isAuthenticated,
        error,
        user,
        loginWithRedirect,
        logout,
      } = useAuth0();

    if (isAuthenticated) {
        return (
          <>
          <div
          style={{display:'flex',justifyContent:'center'}}>
            <Paper
              className={classes.root}
              >
                <img src={user.picture} 
                 className={classes.profilePicture}
                 alt="Logo" />
                
                <Typography
                
                >{user.nickname}</Typography>
                <Typography
                
                >{user.email}</Typography>
                <Typography
                
                >Email Verified: {JSON.stringify(user.email_verified)}</Typography>
              
              <Controls.ActionButton
                  variant="outlined"
                  color="primary"
                  style={{margin:"20px"}}
                >
                  Edit Employee Profile
                  <EditIcon
                   style={{margin:'5 5 5 15'}}
                  />
                </Controls.ActionButton>              
              </Paper>
          </div>
          <Typography>{JSON.stringify(user)}</Typography>
          </>
        );
      }else {
    return <button onClick={loginWithRedirect}>Log in</button>;
  }
}

export default withAuthenticationRequired(Profile, {
    // onRedirecting: () => <Loading />,
  });