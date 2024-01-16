import React from "react";

const Home = () => {
  return (
    <div>
      <center>
        <h1 className="mb-3 text-danger">Please start Server </h1>
        <h4 className="text-success">npx json-server db.json --port 5000</h4>
      </center>
    </div>
  );
};

export default Home;
