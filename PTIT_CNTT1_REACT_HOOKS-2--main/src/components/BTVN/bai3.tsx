import React, { useState, useCallback } from "react";

export default function Bai3() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback((e: React.FormEvent) => {

    e.preventDefault();
    console.log({
      email,
      password,
    });

  }, [email, password]);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };


  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    < >
      <form onSubmit={handleSubmit}>

        <div>
          <label>Email</label><br />
          <input 
            type="email" 
            value={email} 
            onChange={handleEmailChange} 
          />
        </div>

        <div>
          <label>Password</label><br />
          <input 
            type="password" 
            value={password} 
            onChange={handlePasswordChange} 
          />
        </div>

        <button type="submit" >
          Submit
        </button>
      </form>
    </>
  );
}
