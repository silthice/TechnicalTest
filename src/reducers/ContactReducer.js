import data from '../screens/data.json';

const INITIAL_STATE = {
    contactList: data, foundList: []
};

const contactsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_CONTACT': {
            const {
                contactList,
            } = state;

            //console.log(action)
            contactList.push(action.payload)


            const newState = {
                ...state
            }

            return newState;
        }

        case 'EDIT_CONTACT': {
            const {
                contactList,
            } = state;

            //console.log('state', state.contactList)
            console.log('action', action)

            if (action.payload.idx) {
                contactList[action.payload.idx].firstName = action.payload.firstName
                contactList[action.payload.idx].lastName = action.payload.lastName
                contactList[action.payload.idx].email = action.payload.email
                contactList[action.payload.idx].phone = action.payload.phone
            }

            const newState = {
                ...state
            };

            return newState;
        }

        case 'SEARCH_CONTACT': {

            let found = false

            const {
                contactList, foundList
            } = state;

            //console.log(contactList)

            contactList.forEach((c) => {
                //console.log(c)
                let name = c.firstName + " " + c.lastName
                name = name.toLowerCase()
                //console.log(name)
                //console.log(c)

                if (name.includes(action.payload.toLowerCase())) {
                    console.log('found', c)
                    foundList.push(c)
                    found = true
                }


            })

            //if (found == true && foundList.length > 0) {
            //    console.log(foundList)
            //    console.log(foundList.length)
            //    //return foundList
            //}

            const newState = {
                ...state
            };

            return newState

            console.log(newState.foundList)
        }

        case 'RESET_CONTACT': {
            let {
                contactList, foundList
            } = state;

            foundList = []

            const newState = {
                contactList,
                foundList
            }

            console.log('newState', newState)

            return newState
        }

        default:
            return state
    }
};

export default contactsReducer;