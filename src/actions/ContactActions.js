export const addContact = (newData) => {
    console.log('adding action', newData)
    return {
            type: 'ADD_CONTACT',
            payload: newData,
    }
};

export const editContact = (editedData) => {

    console.log('editting action', editedData)
    return {
        type: 'EDIT_CONTACT',
        payload: editedData,
    }
};

export const searchContact = (searchText) => {

    console.log('seraching action', searchText)
    return {
        type: 'SEARCH_CONTACT',
        payload: searchText,
    }
};

export const resetContact = (isResetting) => {

    console.log('resetting action', isResetting)
    return {
        type: 'RESET_CONTACT',
        payload: isResetting,
    }
};