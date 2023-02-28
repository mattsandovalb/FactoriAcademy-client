import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, clases, formador, amount) {
  return { id, date, name, clases, formador, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Javascript',
    'Rocio',
    95,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'Javascript',
    'Andres',
    70,
  ),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Html', 'David', 25),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'Css',
    'Rocio',
    45,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Html',
    'Andres',
    10,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Fecha Inscripcion</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Clase</TableCell>
            <TableCell>Formador Acargo</TableCell>
            <TableCell align="right">%</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell><Link to={row.name}>{row.name}</Link></TableCell>
              <TableCell>{row.clases}</TableCell>
              <TableCell>{row.formador}</TableCell>
              <TableCell align="right">{row.amount}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}