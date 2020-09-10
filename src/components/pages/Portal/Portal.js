import React, { useState } from "react";

// Styles
import "./Documents.css";

// Components
import Documents from "./Documents";
import DocumentsEmployees from "./DocumentsEmployees";
import DocumentsProtection from "./DocumentsProtection";

const Portal = () => {
  const [isCorrect, setIsCorrect] = useState(false);

  function submitForm() {
    setIsCorrect(true);
  }

  return (
    <div className="container">
      <div className="page--civiliancomplaint">
        <h2>Welcome to Police Department Portal Page</h2>
        <p>
          In the following you can submit an Official Police Complaint against
          an officer, please fill all the details as accurate as possible.
        </p>
        {/* Police Complaint */}
      </div>

      <div className="page--officersportal">
        <h2>Police Database</h2>
        <p>
          If you're a fellow colleagues, you can access the database by logging
          in with according password
        </p>
      </div>
      {!isCorrect ? (
        <DocumentsProtection submitForm={submitForm} />
      ) : (
        <DocumentsEmployees />
      )}
    </div>
  );
};

export default Portal;
