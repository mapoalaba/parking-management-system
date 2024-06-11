import React, { useState } from 'react';
import axios from 'axios';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    password2: '',
    phone: '',
    address: '',
    name: '',
    birthdate: '',
    carModel: '',
    carNumber: '',
    verificationCode: ''
  });

  const [usernameChecked, setUsernameChecked] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);

  const { username, password, password2, phone, address, name, birthdate, carModel, carNumber, verificationCode } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const checkUsername = async () => {
    try {
      const res = await axios.post('http://localhost:3001/api/auth/check-username', { username });
      console.log('checkUsername response:', res);  // 응답 확인
      if (res.data.exists) {
        alert('Username already exists');
      } else {
        setUsernameChecked(true);
        alert('Username is available');
      }
    } catch (err) {
      console.error('Error checking username:', err.response ? err.response.data : err.message);
      alert('Failed to check username');
    }
  };

  const sendVerificationCode = async () => {
    try {
      await axios.post('http://localhost:3001/api/auth/verify-phone', { phone });
      setVerificationSent(true);
      alert('Verification code sent');
    } catch (err) {
      console.error('Error sending verification code:', err.response ? err.response.data : err.message);
      alert('Failed to send verification code');
    }
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      alert('Passwords do not match');
    } else if (!usernameChecked) {
      alert('Please check if the username is available');
    } else {
      const newUser = {
        username,
        password,
        phone,
        address,
        name,
        birthdate,
        carModel,
        carNumber,
        verificationCode
      };

      try {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        };

        const body = JSON.stringify(newUser);

        const res = await axios.post('http://localhost:3001/api/auth/register', body, config);
        console.log('register response:', res);
        alert('Registration successful');
      } catch (err) {
        console.error('Error registering user:', err.response ? err.response.data : err.message);
        alert('Registration failed');
      }
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <div>
          <input type="text" placeholder="Username" name="username" value={username} onChange={onChange} required />
          <button type="button" onClick={checkUsername}>Check Username</button>
        </div>
        <div>
          <input type="password" placeholder="Password" name="password" value={password} onChange={onChange} required />
        </div>
        <div>
          <input type="password" placeholder="Confirm Password" name="password2" value={password2} onChange={onChange} required />
        </div>
        <div>
          <input type="text" placeholder="Phone Number" name="phone" value={phone} onChange={onChange} required />
          <button type="button" onClick={sendVerificationCode} disabled={verificationSent}>Send Verification Code</button>
        </div>
        <div>
          <input type="text" placeholder="Verification Code" name="verificationCode" value={verificationCode} onChange={onChange} required />
        </div>
        <div>
          <input type="text" placeholder="Address" name="address" value={address} onChange={onChange} required />
        </div>
        <div>
          <input type="text" placeholder="Name" name="name" value={name} onChange={onChange} required />
        </div>
        <div>
          <input type="date" placeholder="Birthdate" name="birthdate" value={birthdate} onChange={onChange} required />
        </div>
        <div>
          <input type="text" placeholder="Car Model" name="carModel" value={carModel} onChange={onChange} required />
        </div>
        <div>
          <input type="text" placeholder="Car Number" name="carNumber" value={carNumber} onChange={onChange} required />
        </div>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default RegisterPage;
