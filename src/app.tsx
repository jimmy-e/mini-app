import * as React from 'react';
import gql from 'graphql-tag';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import './index.less';

const IS_AUTHENTICATED = gql`
  query isAuthenticated {
    isAuthenticated
  }
`;

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(data: {email: $email, password: $password}) {
      id
      email
    }
  }
`;

const App: React.FC = () => {
  const [
    isAuthenticated,
    { called: authCalled, data: authData, loading: authLoading },
  ] = useLazyQuery(IS_AUTHENTICATED);
  const [
    loginUser,
    { called: loginCalled, data: loginData, loading: loginLoading },
  ] = useMutation(LOGIN_USER);

  const handleLogin = async (): Promise<void> => {
    await loginUser({
      variables: {
        email: 'jimmy@gmail.com',
        password: 'Ji$794658',
      },
    });
  };

  const handleAuthentication = (): void => isAuthenticated();

  if (authCalled && !authLoading) {
    console.log(' --- Is Authenticated Response: --- ');
    console.log(authData);
  }

  if (loginCalled && !loginLoading) {
    console.log(' --- Login Response: --- ');
    console.log(loginData);
  }

  return (
    <div className="container">
      <button
        className="button"
        type="button"
        onClick={handleLogin}
      >
        1: Login
      </button>
      <button
        className="button"
        type="button"
        onClick={handleAuthentication}
      >
        2: Is Authenticated
      </button>
    </div>
  );
};

export default App;
