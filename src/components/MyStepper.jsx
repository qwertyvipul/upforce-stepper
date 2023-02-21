import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = ['user information', 'address details', 'thank you'];

export default function MyStepper({ activeStep }) {
    return (
        <div>
            <Grid display="flex" justifyContent={'center'} container>
                <Grid item xs={8}>
                    <Box sx={{ width: '100%' }}>
                        <Stepper alternativeLabel activeStep={activeStep}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label.toUpperCase()}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}
