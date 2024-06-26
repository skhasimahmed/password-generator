import "./App.css";
import { useState } from "react";
import usePasswordGenerator from "./hooks/use-password-generator";
import PasswordStrengthIndicator from "./components/StrengthChecker";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";

export default function App() {
  const [length, setLength] = useState(8);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase", state: true },
    { title: "Include Lowercase", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);

  const [copied, setCopied] = useState(false);

  const handleCheckboxChange = (i) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[i].state = !updatedCheckboxData[i].state;
    setCheckboxData(updatedCheckboxData);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const { password, errorMessage, generatePassword } = usePasswordGenerator();

  return (
    <>
      <nav className="navbar">
        <>
          <span
            style={{
              color: "black",
            }}
          >
            Fast
          </span>
          <span style={{ color: "red" }}>
            Pass...|<sup>&reg;</sup>
          </span>
        </>
      </nav>
      <div className="App">
        <div className="container">
          <div
            style={{
              color: "white",
              position: "relative",
              textAlign: "center",
              fontSize: "28px",
              marginBottom: "50px",
            }}
          >
            {/* <h1 className="app-heading">
              <span
                style={{
                  color: "black",
                }}
              >
                Fast
              </span>
              <span style={{ color: "red" }}>
                Pass...|<sup>&reg;</sup>
              </span>
            </h1> */}
          </div>
          {/* Password Text and Copy */}
          {password && (
            <div className="header">
              <div className="title">{password}</div>
              <Button
                text={copied ? "Copied" : "copy"}
                onClick={handleCopy}
                customClass="copyBtn"
              />
            </div>
          )}

          {/* Character Length */}
          <div className="charlength">
            <span>
              <label>Character Length</label>
              <label>{length}</label>
            </span>
            <input
              type="range"
              min="2"
              max="25"
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
                generatePassword(checkboxData, e.target.value);
              }}
            />
          </div>

          {/* Checkboxes */}
          <div className="checkboxes">
            {checkboxData.map((checkbox, index) => {
              return (
                <Checkbox
                  key={index}
                  title={checkbox.title}
                  onChange={() => handleCheckboxChange(index)}
                  state={checkbox.state}
                />
              );
            })}
          </div>

          {/* Strength */}
          <PasswordStrengthIndicator password={password} />

          {/* Error Handling */}
          {errorMessage && <div className="errorMessage">{errorMessage}</div>}

          {/* Generate Button */}
          <Button
            text="Generate Password"
            onClick={() => generatePassword(checkboxData, length)}
            customClass="generateBtn"
          />
        </div>
      </div>
    </>
  );
}
