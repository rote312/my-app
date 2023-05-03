import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import ShoppingList from "./components/SoppingList";
import LoadTableData from "./components/LoadTableData";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useState("");

  const handleLogin = async (user, password) => {
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: user, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setAccessToken(data.accessToken);
        setIsLoggedIn(true);
        setUser(user);
      } else {
        throw new Error("Failed to login");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setAccessToken("");
    setUser("");
    setPassword("");
  };

  const handleRegister = async (user, password) => {
    try {
      const response = await fetch("/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: user, password }),
      });
      if (response.ok) {
        console.log("User created successfully");
      } else {
        console.log("Failed to create user");
      }
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  return (
    <Router>
      <div>
        <NavBar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      </div>

      <Routes>
        <Route
          path="/login"
          element={
            !isLoggedIn ? (
              <LoginPage handleLogin={handleLogin} />
            ) : (
              <Navigate to="/HomePage" replace />
            )
          }
        />
        <Route
          path="/signup"
          element={<SignupPage handleRegister={handleRegister} />}
        />
        <Route
          path="/HomePage"
          element={
            isLoggedIn ? (
              <HomePage
                user={user}
                password={password}
                accessToken={accessToken}
                handleLogout={handleLogout}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/HomePage" replace />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/ShoppingList"
          element={isLoggedIn ? <ShoppingList /> : <Navigate to="/login" />}
        />

        <Route
          path="/LoadTableData"
          element={isLoggedIn ? <LoadTableData /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;

// import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Link,
//   Navigate,
// } from "react-router-dom";
// import LoginPage from "./components/LoginPage";
// import SignupPage from "./components/SignupPage";
// import HomePage from "./components/HomePage";

// // App component
// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if user is logged in
//   // const [setLoggedIn] = useState(false);

//   // const [password] = useState("");
//   // const [setAccessToken] = useState("");
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [user, setUser] = useState("");
//   const [password, setPassword] = useState("");
//   const [accessToken, setAccessToken] = useState("");

//   // Function to handle login
//   // פונקציה להתמוטטות בהתחברות
//   const handleLogin = async () => {
//     try {
//       const response = await fetch("/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name: user, password }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         // מעדכון משתנים באמצעות קישורם לפועלים המתאימים
//         setAccessToken(data.accessToken);
//         setLoggedIn(true);
//         setUser({ user: "exampleuser" });
//       } else {
//         // מטפל בשגיאות באופן מסודר ומחזיר הודעה מספציפית
//         throw new Error("Failed to login");
//       }
//     } catch (error) {
//       console.error("Error logging in:", error);
//     }
//   };

//   // const handleLogin = async () => {
//   //   try {
//   //     const response = await fetch("/login", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify({ name: user, password }),
//   //     });
//   //     if (response.ok) {
//   //       const data = await response.json();
//   //       setAccessToken(data.accessToken);
//   //       setLoggedIn(true);
//   //       setUser({ user: "exampleuser" });
//   //     } else {
//   //       console.log("Failed to login");
//   //     }
//   //   } catch (error) {
//   //     console.error("Error logging in:", error);
//   //   }
//   // };

//   const handleLogout = () => {
//     // Logic for handling logout
//     setIsLoggedIn(false);
//     setUser(null);
//   };

//   // Function to handle user registration
//   const handleRegister = async () => {
//     try {
//       const response = await fetch("/createUser", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name: user, password }),
//       });
//       if (response.ok) {
//         console.log("User created successfully");
//       } else {
//         console.log("Failed to create user");
//       }
//     } catch (error) {
//       console.error("Error registering:", error);
//     }
//   };

//   return (
//     <Router>
//       <nav>
//         {/* Display navigation links */}
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           {/* Show login and logout links based on isLoggedIn state */}
//           {!isLoggedIn ? (
//             <>
//               <li>
//                 <Link to="/login">Login</Link>
//               </li>
//               <li>
//                 <Link to="/signup">Signup</Link>
//               </li>
//             </>
//           ) : (
//             <li>
//               <button onClick={handleLogout}>Logout</button>
//             </li>
//           )}
//         </ul>
//       </nav>
//       <Routes>
//         {/* Route for login page */}
//         <Route
//           path="/login"
//           element={<LoginPage handleLogin={handleLogin} />}
//         />
//         {/* Route for signup page */}
//         <Route
//           path="/signup"
//           element={<SignupPage handleRegister={handleRegister} />}
//         />
//         {/* Route for home page */}
//         <Route
//           exact
//           path="/"
//           element={
//             isLoggedIn ? <HomePage user={user} /> : <Navigate to="/login" />
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
