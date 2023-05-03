import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = ({ handleLogin }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // עריכת בדיקת תקינות שם משתמש וסיסמה (למשל, אורך מינימלי, חוקיות תווים וכו')
    if (user === "" || password === "") {
      setError("שם משתמש וסיסמה הם שדות חובה");
    } else {
      // קריאה ל-API לבדיקת התחברות
      // אם התחברות מוצלחת, קריאה לפונקציה handleLogin שקיבלנו כפרופס ומעדכנת את המצב isLoggedIn ל-true
      handleLogin(user, password);
    }
  };

  return (
    <div className="login-page">
      <h2>דף כניסה</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">שם משתמש:</label>
          <input
            type="text"
            id="username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">סיסמה:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="btn">
          התחבר
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
