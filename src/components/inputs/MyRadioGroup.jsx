import React from 'react';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

export default function MyRadioGroup({
    id,
    items,
    label,
    onChange,
    error,
    ...otherProps
}) {
    const radioButtons = items.map((item) => (
        <FormControlLabel
            key={item}
            value={item}
            control={<Radio />}
            label={item}
        />
    ));
    return (
        <div>
            <FormControl error={error}>
                <FormLabel id={label}>{label}</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby={label}
                    onChange={(e) => onChange(id, e.target.value)}
                    {...otherProps}
                >
                    {radioButtons}
                </RadioGroup>
                {error && (
                    <FormHelperText>{`Please select your ${label}`}</FormHelperText>
                )}
            </FormControl>
        </div>
    );
}
