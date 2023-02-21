import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { FORM_DETAILS } from '../constants';

export const MyFooter = React.memo(({ activeStep, onStepChange }) => {
    const nextButtonProps =
        activeStep === 2
            ? { disabled: true }
            : {
                  type: 'submit',
                  form: FORM_DETAILS[activeStep].id,
              };

    return (
        <div>
            <Stack direction="row" spacing={2}>
                <Button
                    variant="contained"
                    onClick={() => onStepChange(-1)}
                    disabled={activeStep === 0}
                >
                    Back
                </Button>
                <Button variant="contained" {...nextButtonProps}>
                    Next
                </Button>
            </Stack>
        </div>
    );
});

export default MyFooter;
