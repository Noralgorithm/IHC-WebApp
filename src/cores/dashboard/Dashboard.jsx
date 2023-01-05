import React from "react";
import HomePage from "./HomePage";

const Dashboard = () => {
  return (
    <div className="w-screen md:h-screen h-[1000px] flex flex-col gap-5">
      <h1 className="md:h-[8%] h-[4%] text-2xl font-bold w-full pl-[4%] text-offside-titles">
        Home
      </h1>
      <HomePage />
    </div>
  );
};

export default Dashboard;
