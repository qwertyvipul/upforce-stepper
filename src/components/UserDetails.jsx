import React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { getLabelFromId } from '../utils';
import { USER_FORM_FIELDS, ADDRESS_FORM_FIELDS } from '../constants';

export default function UserDetails({ userData }) {
    const tableData = USER_FORM_FIELDS.concat(ADDRESS_FORM_FIELDS).map(
        (field) => (
            <TableRow key={field}>
                <TableCell>{getLabelFromId(field)}</TableCell>
                <TableCell>{userData[field]}</TableCell>
            </TableRow>
        )
    );

    return (
        <div>
            <Typography variant="h3" sx={{ color: 'rgb(46, 125, 50)' }}>
                Data added successfully
            </Typography>
            <TableContainer>
                <Table>{tableData}</Table>
            </TableContainer>
        </div>
    );
}
