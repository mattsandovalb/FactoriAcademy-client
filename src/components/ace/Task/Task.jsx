import React, { useState, useEffect } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-github';

const Task = ({ taskId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [testCases, setTestCases] = useState([]);
  const [editorValue, setEditorValue] = useState('');

  useEffect(() => {
    fetch(`http://localhost:8000/api/tasks/${taskId}`)
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
        setTestCases(data.testCases);
      })
      .catch((error) => console.error(error));
  }, [taskId]);

  const onEditorChange = (newValue) => {
    setEditorValue(newValue);
  };

  const runTests = () => {
    const results = testCases.map((testCase) => {
      try {
        eval(`${editorValue}\n${testCase.test}`);
        return { testCase, passed: true };
      } catch (error) {
        return { testCase, passed: false, error };
      }
    });

    return results;
  };

  const renderResult = (result) => {
    if (result.passed) {
      return <span style={{ color: 'green' }}>Passed</span>;
    } else {
      return (
        <div>
          <span style={{ color: 'red' }}>Failed</span>
          <br />
          {result.error.toString()}
        </div>
      );
    }
  };

  const onTestClick = () => {
    const testResults = runTests();
    const testOutput = document.getElementById('test-output');
    testOutput.innerHTML = '';
    testResults.forEach((result) => {
      const resultElement = document.createElement('div');
      const descriptionElement = document.createElement('h4');
      const testCodeElement = document.createElement('pre');
      const resultText = renderResult(result);
      descriptionElement.innerText = result.testCase.description;
      testCodeElement.innerText = result.testCase.test;
      resultElement.appendChild(descriptionElement);
      resultElement.appendChild(testCodeElement);
      resultElement.appendChild(resultText);
      testOutput.appendChild(resultElement);
    });
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <h2>Your Solution</h2>
      <AceEditor
        mode="html"
        theme="github"
        name="html-editor"
        width="100%"
        height="500px"
        value={editorValue}
        onChange={onEditorChange}
      />
      <button onClick={onTestClick}>Test</button>
      <h2>Test Results</h2>
      <div id="test-output"></div>
    </div>
  );
};

export default Task;
