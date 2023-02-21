import React from 'react';
import Grid from '@mui/material/Grid';
import MyDateField from './inputs/MyDateField';
import MyDropdown from './inputs/MyDropdown';
import MyRadioGroup from './inputs/MyRadioGroup';
import MyTextField from './inputs/MyTextField';
import { getLabelFromId } from '../utils';
import { DATE_FIELDS, DROPDOWN_ITEMS, RADIO_GROUPS } from '../constants';

export default function MyForm({
    onFormSubmit,
    onDataChange,
    formId,
    formFields,
    errorKeys,
    userData,
}) {
    const handleDataChange = (key, value) => {
        onDataChange(key, value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onFormSubmit();
    };

    // TODO: Remove grid wrapper repetition
    const inputFields = formFields.map((key) => {
        if (DATE_FIELDS.has(key)) {
            return (
                <Grid item sm={6} xs={12} key={key}>
                    <MyDateField
                        id={key}
                        label={getLabelFromId(key)}
                        text={userData[key] || ''}
                        onChange={handleDataChange}
                        error={errorKeys.has(key)}
                    />
                </Grid>
            );
        }

        if (key in DROPDOWN_ITEMS) {
            return (
                <Grid item sm={6} xs={12} key={key}>
                    <MyDropdown
                        items={DROPDOWN_ITEMS[key]}
                        id={key}
                        label={getLabelFromId(key)}
                        value={userData[key] || null}
                        onChange={handleDataChange}
                        error={errorKeys.has(key)}
                    />
                </Grid>
            );
        }

        if (key in RADIO_GROUPS) {
            return (
                <Grid item sm={6} xs={12} key={key}>
                    <MyRadioGroup
                        items={RADIO_GROUPS[key]}
                        id={key}
                        label={getLabelFromId(key)}
                        value={userData[key] || ''}
                        onChange={handleDataChange}
                        error={errorKeys.has(key)}
                    />
                </Grid>
            );
        }

        return (
            <Grid item sm={6} xs={12} key={key}>
                <MyTextField
                    id={key}
                    label={getLabelFromId(key)}
                    text={userData[key] || ''}
                    onChange={handleDataChange}
                    error={errorKeys.has(key)}
                />
            </Grid>
        );
    });

    return (
        <div>
            <form onSubmit={onSubmit} id={formId}>
                <Grid container spacing={2}>
                    {inputFields}
                </Grid>
            </form>
        </div>
    );
}
