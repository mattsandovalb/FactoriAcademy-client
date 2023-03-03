import React from "react";
import {Typography} from '@mui/material'

function TestResults(props) {
  const { tests } = props;

  // Check if all tests passed
  const allTestsPassed = tests.every((test) => test.passed);

  return (
    <div>
      {allTestsPassed && (
        <Typography variant='h3'>Congratulations, you passed all tests!</Typography>
      )}
      {!allTestsPassed && (
        <div>
          <Typography variant='h3'>Sorry, you need to fix the following tests:</Typography>
          <ul>
            {tests.map((test) => (
              <li key={test.name}>
                {test.name}: {test.passed ? "Passed" : "Failed"}
                {!test.passed && (
                  <div>
                    <p>Error:</p>
                    <pre>{test.error}</pre>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TestResults;
