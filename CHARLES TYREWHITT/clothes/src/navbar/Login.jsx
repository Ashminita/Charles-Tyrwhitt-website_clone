
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import axios from 'axios'; 
// import axios from 'axios'; 
// import './Login.css';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate(); 

//   const handleLogin = async (e) => {
//     e.preventDefault();
    
//     try {

      
//       const response = await axios.post('http://localhost:3000/login', { email, password });
      
     
//       if (response.data.success) {
//         setMessage('Login successful!');
//         setTimeout(() => {
//           navigate('/'); 
//         }, 2000); 

//       const response = await axios.post('http://localhost:5000/login', { email, password });
      
      
//       if (response.data.success) {
//         setMessage('Login successful!');
//         setTimeout(() => {
//           navigate('/'); 
//         }, 2000); 
//       } else {
//         setMessage('Invalid email or password. Please try again.');
//       }
//     } catch (error) {
//       console.error('There was an error during login:', error);
//       setMessage('There was an error during login. Please try again.');
//      }
//     }
//   };

//   const handleCreateAccount = () => {
//     navigate('/create-account'); 
//   };

//   return (
//     <div className="login-container">
//       <div className="login-section">
//         <h1>My account</h1>
//         {message && <p className="login-message">{message}</p>}
//         <form onSubmit={handleLogin}>
//           <div className="input-group">
//             <label>Email address</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="input-group">
//             <label>Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="login-button">Log in</button>
//           <a href="/forgot-password" className="forgot-password">Forgotten your password?</a>
//         </form>
//       </div>
//       <div className="new-customer-section">
//         <h2>New customers</h2>
//         <p>Set up an account with us and you will be able to:</p>
//         <ul>
//           <li>Check order status</li>
//           <li>Save multiple addresses to your address book</li>
//           <li>Set your size and monogramming preferences</li>
//         </ul>
//         <button onClick={handleCreateAccount} className="create-account-button">Create an account now</button>
//       </div>
//     </div>
//   );
// }

// export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios'; 
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      
      if (response.data.success) {
        setMessage('Login successful!');
        setTimeout(() => {
          navigate('/'); 
        }, 2000); 
      } else {
        setMessage('Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error('There was an error during login:', error);
      setMessage('There was an error during login. Please try again.');
    }
  };

  const handleCreateAccount = () => {
    navigate('/create-account'); 
  };

  return (
    <div className="login-container">
      <div className="login-section">
        <h1>My account</h1>
        {message && <p className="login-message">{message}</p>}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Log in</button>
          <a href="/forgot-password" className="forgot-password">Forgotten your password?</a>
        </form>
      </div>
      <div className="new-customer-section">
        <h2>New customers</h2>
        <p>Set up an account with us and you will be able to:</p>
        <ul>
          <li>Check order status</li>
          <li>Save multiple addresses to your address book</li>
          <li>Set your size and monogramming preferences</li>
        </ul>
        <button onClick={handleCreateAccount} className="create-account-button">Create an account now</button>
      </div>
    </div>
  );
}

export default Login;
