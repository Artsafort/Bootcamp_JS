export const mapAccountFromApiToViewModel = account => {
return {
    ...account,
    alias: account.name,
    };
};

export const mapAccountFromtViewModelToApi = account => {
    return {
        ...account,
        name: account.alias,
    };
};