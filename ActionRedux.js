export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const addCount = () => {
    return { type: INCREMENT };
};

export const minCount = () => {
    return { type: DECREMENT };
};
