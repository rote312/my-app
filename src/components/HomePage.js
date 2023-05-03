import React from "react";
import { Link } from "react-router-dom";
const HomePage = ({ user }) => {
  return (
    <div>
      <h1> Hello {user}</h1>
      <nav>
        <Link to="/ShoppingList">ShoppingList</Link>
      </nav>
      <nav>
        <Link to="/LoadTableData">LoadTableData</Link>
      </nav>
    </div>
  );
};

export default HomePage;
