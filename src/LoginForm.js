

import React from 'react';

function LoginForm() {
  return (
    <div className="login-form">
      <h3 style={{ border: '1px solid #000', padding: '10px' }}>Log In</h3>
      <div>
        <input type="text" placeholder="Username" />
      </div>
      <div>
        <input type="password" placeholder="Password" />
      </div>
    </div>
  );
}

export default LoginForm;