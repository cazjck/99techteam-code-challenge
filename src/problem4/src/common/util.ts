export const formatError = (error: any): any => {
    if (typeof error === 'string') {
        return error;
    } else if (typeof error === 'object') {
        if (error instanceof Error) {
            return error;
        }
        try {
            return JSON.stringify(error);
        } catch (err) {
            return error;
        }
    }
    return error;
};