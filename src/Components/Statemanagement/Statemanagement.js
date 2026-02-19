/*

useReducer 
    -> Statemenagement
    -> Manages Complex State logic
    -> Analogy Bank teller
    -> Takes (state, action) and return newState
    -> Local to the component it is defined in

createContext(with useContext)
    -> Data Sharing(Distribution)
    -> Eliminates "props drilling"
    -> Anology, A loudspeaker(broadcast to everyone)
    -> Provides a value to children without props
    -> Global/scoped to the Provider's children     
    */

// Use reducer
// ----------------
const { useReducer, createContext, useContext } = require("react");

const [state, dispatch] = useReducer(reducer, initialState);

function  reducer(state, action){
    switch(action.type){
        case 'increment':
            return { count: state.count +1 }
    }
}

// context API
// ----------------
const UserContext = createContext();

export function UserProvider({children}){
    const [user, setUser] = useState(null);

    return(
        <userContext.Provider value = {{user, setUser}}>
            {children}
        </userContext.Provider>
    )
}

// use:
const {user} = useContext(UserContext)