import React from "react";

const PasswordStrengthIndicator = ({ password = "" }) => {
  const getPasswordStrength = () => {
    const passwordLength = password.length;
    if (passwordLength < 1) {
      return "";
    } else if (passwordLength < 4) {
      return "Very Weak";
    } else if (passwordLength < 8) {
      return "Weak";
    } else if (passwordLength < 12) {
      return "Poor";
    } else if (passwordLength < 16) {
      return "Medium";
    } else if (passwordLength < 20) {
      return "Strong";
    } else {
      return "Very Strong";
    }
  };

  const passwordStrength = getPasswordStrength();

  let strengthColor = "";

  if (passwordStrength === "Very Weak") {
    strengthColor = "#FF0000";
  } else if (passwordStrength === "Weak") {
    strengthColor = "#DC143C";
  } else if (passwordStrength === "Poor") {
    strengthColor = "#FF8C00";
  } else if (passwordStrength === "Medium") {
    strengthColor = "#B8860B";
  } else if (passwordStrength === "Strong") {
    strengthColor = "#32CD32";
  } else if (passwordStrength === "Very Strong") {
    strengthColor = "#228B22";
  }

  if (!passwordStrength) return <></>;

  return (
    <div className="password-strength">
      Strength:{" "}
      <span style={{ fontWeight: "bold", color: strengthColor }}>
        {passwordStrength}
      </span>
    </div>
  );
};

export default PasswordStrengthIndicator;
