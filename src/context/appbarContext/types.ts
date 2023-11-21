export interface IMeInfo {
    "firstName": string;
    "lastName": string;
    "organisationId": string;
    "mail": string;
}

export type AppbarContextState = {
    me: IMeInfo | null;
};

export const contextDefaultValues: AppbarContextState = {
    me: null,
};
