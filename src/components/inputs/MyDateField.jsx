import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MyDateField({
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
                    defaultValue={text}
                    onChange={(e) => onChange(id, e.target.value)}
                    helperText={error && `${label} is a required field`}
                    sx={{ width: '100%' }}
                    type="date"
                    InputLabelProps={{
                        shrink: true, // Shrinks the placeholder to top
                    }}
                    {...otherProps}
                />
            </Box>
        </div>
    );
}
