

const initialState = {
    rides: [{
        firstName: 'Harry',
        lastName: 'Spain',
        pickUp: '123 Mian',
        dropOff: '124 Main',
    }]
}

const rootReducer = (state = initialState, action) => {



    switch (action.type) {
        case "ADD_RIDE":
            return { ...state, rides: [...state.rides, action.payload] };
        case "REMOVE_RIDE":
            console.log("HERE 2")
            console.log(action.payload)
            var newState =  {
                ...state,
                rides: [
                    ...state.rides.slice(0, action.payload),
                    ...state.rides.slice(action.payload + 1)
                ]
            }
            console.log(newState)
            return newState;
        default:
            return state;
    }
}

export default rootReducer;