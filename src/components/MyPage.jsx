import React from 'react';
import Grid from '@mui/material/Grid';
import MyFooter from './MyFooter';
import MyStepper from './MyStepper';
import UserDetails from './UserDetails';
import MyForm from './MyForm';
import { FORM_DETAILS } from '../constants';

export default function MyPage() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [userData, setUserData] = React.useState({});
    const [errorKeys, setErrorKeys] = React.useState(new Set());

    const handleDataChange = (key, value) => {
        const newData = { ...userData };
        newData[key] = value;
        // Perform "required" validation only on form submit (i.e. next button click)
        if (errorKeys.has(key)) {
            const newErrorKeys = new Set(errorKeys);
            newErrorKeys.delete(key);
            setErrorKeys(newErrorKeys);
        }
        setUserData(newData);
    };

    const handleFormSubmit = () => {
        // Clicking `Next` with invalid form and then clicking `Back` and then `Next` will clear current errors
        const newErrorKeys = new Set();
        FORM_DETAILS[activeStep].formFields.forEach((field) => {
            if (!userData[field] || userData[field] === '') {
                newErrorKeys.add(field);
            }
        });

        if (newErrorKeys.size === 0) {
            handleStepChange(1);
        }
        setErrorKeys(newErrorKeys);
    };

    const handleStepChange = React.useCallback(
        (step) => {
            setActiveStep(activeStep + step);
        },
        [activeStep]
    );

    return (
        <div>
            <Grid container spacing={2} p={2}>
                <Grid item xs={12}>
                    <MyStepper activeStep={activeStep} />
                </Grid>
                <Grid item xs={12}>
                    {activeStep === 2 ? (
                        <UserDetails userData={userData} />
                    ) : (
                        <MyForm
                            onFormSubmit={handleFormSubmit}
                            onDataChange={handleDataChange}
                            formId={FORM_DETAILS[activeStep].id}
                            formFields={FORM_DETAILS[activeStep].formFields}
                            errorKeys={errorKeys}
                            userData={userData}
                        />
                    )}
                </Grid>
                <Grid item xs={12}>
                    <MyFooter
                        onStepChange={handleStepChange}
                        activeStep={activeStep}
                    />
                </Grid>
            </Grid>
        </div>
    );
}
