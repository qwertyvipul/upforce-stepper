import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function MyDropdown({
    id,
    items,
    label,
    onChange,
    error,
    ...otherProps
}) {
    return (
        <div>
            <Autocomplete
                disablePortal
                options={items}
                onChange={(_, v) => {
                    onChange(id, v);
                }}
                renderInput={(params) => (
                    <TextField
                        error={error}
                        id={id}
                        {...params}
                        label={label}
                        helperText={error && `${label} is a required field`}
                    />
                )}
                {...otherProps}
            />
        </div>
    );
}
