export interface IMeInfo {
    "firstName": string;
    "lastName": string;
    "organisationId": string;
    "mail": string;
}

export type AppbarContextState = {
    me: IMeInfo | null;
    getMeInfo: () => void;
};

export const contextDefaultValues: AppbarContextState = {
    me: null,
    getMeInfo: () => {
    },
};
