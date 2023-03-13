import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-github';
import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TestResult from '../../TestResult/TestResult';
import { tasks } from '../../../../data/tasks.js';
import ListTasks from './ListTasks';

const Task = () => {
  const [editorValue, setEditorValue] = useState('');
  const [tests, setTests] = useState([]);

  const onEditorChange = (newValue) => {
    setEditorValue(newValue);
  };

  const onTestClick = () => {
    const iframe = document.getElementById('test-output');
    iframe.srcdoc = editorValue;
  };

  function runTests() {
    const tests = tasks.tests.map((test) => {
      const regex = new RegExp(test.regex);
      const passed = regex.test(editorValue);

      return {
        name: test.name,
        passed: passed,
        error: passed ? '' : test.error,
      };
    });

    setTests(tests);
  }

  return (
    <Box sx={{ p: '16px', display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      <ListTasks
        title={tasks.title}
        instruction={tasks.instruction}
        statement={tasks.statement}
        documentation1={tasks.documentation1}
        documentation2={tasks.documentation2}
      />
      <Box sx={{ flex: '1', padding: '16px' }}>
        <Typography variant="h1" component="h1" sx={{ padding: '16px' }}>
          {tasks.title}
        </Typography>
        <Typography variant="h3" sx={{ marginBottom: { xs: '8px', md: '16px' } }}>
          {tasks.statement}
        </Typography>
        <AceEditor
          mode="html"
          theme="github"
          width="100%"
          height="500px"
          value={editorValue}
          onChange={onEditorChange}
          name="editor"
          editorProps={{ $blockScrolling: true }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', margin: '16px 0' }}>
          <Button variant="contained" endIcon={<ArrowForwardIosIcon />} onClick={onTestClick}>
            Run Tests
          </Button>
        </Box>
        <TestResult tests={tests} runTests={runTests} />
      </Box>
    </Box>
  );
};

export default Task;
