import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MyTextField({
    id,
    label,
    text,
    onChange,
    error,
    ...otherProps
}) {
    return (
        <div>
            <Box>
                <TextField
                    error={error}
                    id={id}
                    label={label}
                    variant="outlined"
                    value={text}
                    onChange={(e) => onChange(id, e.target.value)}
                    helperText={error && `${label} is a required field`}
                    sx={{ width: '100%' }}
                    {...otherProps}
                />
            </Box>
        </div>
    );
}
