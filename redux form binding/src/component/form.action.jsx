export const REGISTER_USER = "REGISTER_USER";

export let register = (user) => {
    return {
        type: REGISTER_USER,
        payload: user
    }
};