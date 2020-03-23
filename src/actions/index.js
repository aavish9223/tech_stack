import { libraryActionTypes } from './actions.type.js'; 

export const selectLibrary = (libararyId) => {
    return {
        type: libraryActionTypes.selectLibrary,
        payload: libararyId
    };
}

export const newLibrary = libararyId => {
    return {
        type: libraryActionTypes.newLibrary,
        payload: libararyId
    }
};


export const editLibrary = libararyId => {
    return {
        type: libraryActionTypes.editLibrary,
        payload: libararyId
    }
};

export const deleteLibrary = libararyId => {
    return {
        type: libraryActionTypes.deleteLibrary,
        payload: libararyId
    }
};

