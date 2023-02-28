import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

 function createData(userId, user_name, user_email, user_password, courses, total_points, start_date, finish_date) {
    return {
    userId,
    user_name,
    user_email,
    user_password,
    courses,
    total_points,
 history: [
    {
    start_date: '2023-01-05',
    finish_date: '202-01-25',
    courses:'HTML',
    total_points: 'X*100%/Y',
    }
    ],
    };
    }
    
    function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    
    return (
    <React.Fragment >
      <Typography>Users - Courses</Typography>
    <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
    <TableCell>
    <IconButton
    aria-label="expand row"
    size="small"
    onClick={() => setOpen(!open)}
    >
    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
    </IconButton>
    </TableCell>
    <TableCell component="th" scope="row">
    {row.userId}
    </TableCell>
    <TableCell align="right">{row.user_name}</TableCell>
    <TableCell align="right">{row.user_email}</TableCell>
    <TableCell align="right">{row.user_password}</TableCell>
    </TableRow>
    <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
    <Collapse in={open} timeout="auto" unmountOnExit>
    <Box sx={{ margin: 1 }}>
    <Typography variant="h6" gutterBottom component="div">
    History
    </Typography>
    <Table size="small" aria-label="purchases">
    <TableHead>
    <TableRow>
    <TableCell>Start Date</TableCell>
    <TableCell>Finish Date</TableCell>
    <TableCell align="right">Courses</TableCell>
    <TableCell align="right">Total Points</TableCell>
    </TableRow>
    </TableHead>
    <TableBody>
    {row.history.map((historyRow) => (
    <TableRow key={historyRow.start_date}>
    <TableCell component="th" scope="row">
    {historyRow.start_date}
    </TableCell>
    <TableCell>{historyRow.finish_date}</TableCell>
    <TableCell align="right">{historyRow.courses}</TableCell>
    <TableCell align="right">
      
{/* grade - progress */}

    {Math.round(historyRow.total_points * row.user_point * 100) / row.max_point}
    </TableCell>
    </TableRow>
    ))}
    </TableBody>
    </Table>
    </Box>
    </Collapse>
    </TableCell>
    </TableRow>
    </React.Fragment>
    );
    }
    
    Row.propTypes = {
    row: PropTypes.shape({
    userId: PropTypes.string.isRequired,
    user_name: PropTypes.string.isRequired,
    user_email: PropTypes.string.isRequired,
    user_password: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
    PropTypes.shape({
    start_date: PropTypes.string.isRequired,
    finish_date: PropTypes.string.isRequired,
    courses: PropTypes.number.isRequired,
    total_points: PropTypes.number.isRequired,
    }),
    ).isRequired,
    }).isRequired,
    };

const rows = [
  createData('UserName 1', 1, 'email@test.com', 1, 4.0,),
  createData('UserName 2', 2, 'email@test.com', 1, 4.3,),
  createData('UserName 3', 3, 'email@test.com', 1, 6.0,),
  createData('UserName 4', 4, 'email@test.com', 1, 4.3,),
  createData('UserName 5', 5, 'email@test.com', 1, 3.9,),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>User Name</TableCell>
            <TableCell>User_Id </TableCell>
            <TableCell align="right">E-mail</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">password</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

