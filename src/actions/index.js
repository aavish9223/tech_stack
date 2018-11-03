export const selectLibrary = (libararyId) => {
    return {
        type: 'select_library',
        payload: libararyId
    };
}