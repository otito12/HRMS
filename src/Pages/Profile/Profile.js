import React from 'react';
import { useAuth0 , withAuthenticationRequired} from '@auth0/auth0-react';
import Loading from '../../components/Loading';

function Profile() {

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
          <div>
            {JSON.stringify(user)}
          </div>
        );
      }else {
    return <button onClick={loginWithRedirect}>Log in</button>;
  }
}

export default withAuthenticationRequired(Profile, {
    // onRedirecting: () => <Loading />,
  });