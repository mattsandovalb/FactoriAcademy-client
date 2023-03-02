import React from "react";

function TestResults(props) {
  const { tests } = props;

  // Check if all tests passed
  const allTestsPassed = tests.every((test) => test.passed);

  return (
    <div>
      {allTestsPassed ? (
        <p>Congratulations, you passed all tests!</p>
      ) : (
        <div>
          <p>Sorry, you need to fix the following tests:</p>
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
