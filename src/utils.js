const idLabelMemo = {};

/**
 * Utility to get formatted Label from Id. For eg. `addressLine1` -> `Address Line 1`
 * @param {String} id
 * @returns
 */
export const getLabelFromId = (id) => {
    if (idLabelMemo[id]) return idLabelMemo[id];
    const spacedId = id.replace(/([A-Z0-9])/g, ' $1');
    const formattedId = spacedId.charAt(0).toUpperCase() + spacedId.slice(1);
    idLabelMemo[id] = formattedId;
    return formattedId;
};
