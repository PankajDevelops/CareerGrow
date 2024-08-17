import React from "react";
import Typical from "react-typical";

const AnimatedText = () => {
  return (
    <div className="animated-text-container">
      <Typical
        loop={Infinity}
        wrapper="span"
        steps={[
          "Welcome to Our Job Portal !",
          3000, // Increased delay
          "Find Your Dream Job :)",
          3000,
          "Apply Now !!!",
          3000,
        ]}
      />
    </div>
  );
};

export default AnimatedText;
