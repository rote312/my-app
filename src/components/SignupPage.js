import React, { useState } from "react";
import "./SignupPage.css"; // קובץ ה-css המכיל את עיצוב הדף

const SignupPage = ({ handleRegister }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // עריכת בדיקת תקינות שם משתמש וסיסמה (למשל, אורך מינימלי, חוקיות תווים, התאמה בין סיסמאות וכו')
    if (user === "" || password === "" || confirmPassword === "") {
      setError("שם משתמש, סיסמה ואישור סיסמה הם שדות חובה");
    } else if (password !== confirmPassword) {
      setError("סיסמה ואישור סיסמה אינם תואמים");
    } else {
      // קריאה ל-API לבדיקת הרשמה
      // אם הרשמה מוצלחת, קריאה לפונקציה handleSignup שקיבלנו כפרופס ומעדכנת את המצב isLoggedIn ל-true
      handleRegister(user, password);
    }
  };

  return (
    <div className="signup-page">
      <h2>דף הרשמה</h2>
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
        <div className="form-group">
          <label htmlFor="confirmPassword">אישור סיסמה:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="btn">
          הרשם
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
