import React from "react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  const handleClick = () =>{
    navigate("/");
  };

    return (
      <div className="text-center py-6">
        <h2 className="text-xl font-bold text-green-600">Thank You for Your Feedback!</h2>
        <p className="text-xs mt-5">Go back to home page for more food or table reservation </p>
        <button onClick={handleClick} className="text-blue-500 cursor-pointer">click here</button>.
      </div>
    );
  };
  
  export default ThankYou;
  