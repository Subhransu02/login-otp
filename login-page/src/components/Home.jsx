import React from "react";

const Home = ({ signOut, user }) => {
  return (
    <div className="wrapper">
      {user ? (
        <>
          <h1 className="main-heading">Welcome 👋, {user.phoneNumber}</h1>
          <button className="main-button" id="signOut" onClick={signOut}>
            Sign Out
          </button>
        </>
      ) : (
        <h1 className="main-heading">Welcome 👋</h1>
      )}
    </div>
  );
};

export default Home;
