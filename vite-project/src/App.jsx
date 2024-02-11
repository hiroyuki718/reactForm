import React, { useState } from 'react';
import SignUpForm from './components/SignUpForm';

import Authenticate from './components/Authenticate';

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="App">
      <h1>JWT Authentication Example</h1>
      <SignUpForm setToken={setToken} />
      {token && <Authenticate token={token} />}
    </div>
  );
}

export default App;
