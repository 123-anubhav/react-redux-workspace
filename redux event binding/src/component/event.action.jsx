export const EATING = "EATING";
export const CODING = "CODIING";
export const SLEEPING = "SLEEPING";

export let eating = () => {
    return {
        type: EATING,
        payload: 'eating occur'
    }
};

export let coding = () => {
    return {
        type: CODING,
        payload: 'coding occur'
    }
};

export let sleeping = () => {
    return {
        type: SLEEPING,
        payload: 'sleeping occur'
    }
};
