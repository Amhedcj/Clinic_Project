function setNestedState(state: any, path: String, value: any) {
    const keys = path.split('.');
    let current = state;

    for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];

        // If the key does not exist or is not an object, create an empty object
        if (!current[key] || typeof current[key] !== 'object') {
            // This allows new props to be added if they do not exist, this is not desired here
            // current[key] = {};

            console.error(`Invalid prop path '<obj>.${path}' at '${key}'. Make sure to all properties exist and omit root obj name in prop path.`);
            break;
        }

        current = current[key];
    }

    // Set the value at the final key, ONLY IF that key already exists
    if (keys[keys.length - 1] in current) {
        current[keys[keys.length - 1]] = value;
    }
    else {
        console.error(`Non existent prop '${keys[keys.length - 1]}'`);
    }

    return { ...state }; // Return a new state object
};

function setNestedStateArr(state: any, paths: String[], values: any[]) {
    let newState = structuredClone(state);

    for (let i = 0; i < paths.length; i++) {
        newState = { ...newState, ...setNestedState(structuredClone(newState), paths[i], values[i]) };
    }

    return newState;
}

export {
    setNestedState,
    setNestedStateArr
};