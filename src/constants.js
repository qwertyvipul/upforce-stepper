export const USER_FORM_FIELDS = [
    'firstName',
    'middleName',
    'lastName',
    'mobileNo',
    'email',
    'birthday',
    'age',
    'bloodGroup',
    'height',
    'weight',
    'gender',
    'martialStatus',
];

export const ADDRESS_FORM_FIELDS = [
    'addressLine1',
    'addressLine2',
    'city',
    'state',
    'country',
    'pinCode',
];

export const DROPDOWN_ITEMS = {
    bloodGroup: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
    city: ['Bangalore', 'Hyderabad', 'London', 'Mumbai', 'New York', 'Pune'],
    state: ['Gujarat', 'Haryana', 'Karnataka', 'Punjab', 'Telangana'],
    country: ['India', 'USA', 'Britain', 'Australia', 'Brazil'],
};

export const RADIO_GROUPS = {
    gender: ['Male', 'Female'],
    martialStatus: ['Single', 'Married', 'Divorced', 'Widowed'],
};

export const DATE_FIELDS = new Set(['birthday']);

export const FORM_DETAILS = {
    0: {
        id: 'user-form',
        formFields: USER_FORM_FIELDS,
    },
    1: {
        id: 'address-form',
        formFields: ADDRESS_FORM_FIELDS,
    },
};
