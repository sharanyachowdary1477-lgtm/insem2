import { useState } from "react";
import "./App.css";

function App() {
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!/^[0-9]{10}$/.test(mobile)) {
      setMessage("Enter a valid 10-digit number");
    } else {
      setMessage("OTP sent");
    }
  };

  return (
    <div className="container">
      <h2>Mobile Number Verification</h2>

      <input
        type="text"
        placeholder="Enter mobile number"
        value={mobile}
        onChange={(e) => {
          setMobile(e.target.value);
          setMessage("");
        }}
      />

      <button onClick={handleSubmit}>
        Submit
      </button>

      <p className={message === "OTP sent" ? "success" : "error"}>
        {message}
      </p>
    </div>
  );
}

export default App;