export const PrepareMessage = (message: string): Record<string, string> => {
    return { message };
};

export const PrepareResponse = (key: string, value: any): Record<string, any> => {
    return { [key]: value };
};
