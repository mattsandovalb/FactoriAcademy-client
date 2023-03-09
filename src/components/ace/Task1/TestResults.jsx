import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

function TestResults(props) {
  const { tests } = props;

  const allTestsPassed = tests.every((test) => test.passed);

  return (
    <Box mt={4}>
      {allTestsPassed ? (
        <Typography variant='h3' color='primary'>Congratulations, you passed all tests!</Typography>
      ) : (
        <Box>
          <Typography variant='h3' color='error'>Sorry, you need to fix the following tests:</Typography>
          <List sx={{ mt: 2 }}>
            {tests.map((test) => (
              <ListItem key={test.name} sx={{ py: 1 }}>
                <ListItemText
                  primary={test.name}
                  secondary={test.passed ? 'Passed' : 'Failed'}
                  primaryTypographyProps={{ fontWeight: test.passed ? 'bold' : 'normal' }}
                  secondaryTypographyProps={{ color: test.passed ? 'success.main' : 'error.main' }}
                />
                {!test.passed && (
                  <Box sx={{ mt: 1 }}>
                    <Typography variant='body2'>Error:</Typography>
                    <Typography variant='body2' color='error'>{test.error}</Typography>
                  </Box>
                )}
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
}

export default TestResults;
