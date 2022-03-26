import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'
import './App.css';

function App({signOut,user}) {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Login</h1>
        <p>
         Hey {user.username} welcome
        </p>
        <button onClick={signOut}>Sign out</button>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
