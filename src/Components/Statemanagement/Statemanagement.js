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


const UserContext = createContext(null);

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


// using useReducer and contextAPI together
// ---------------------------------------------



// create context for state and dispatch
const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

// In Parent Component
const [task, dispatch: dispatchAction] = useReducer(tasksReducer, initialTasks);

// Provide them

<TasksContext.Provider value={task}>
    <TasksDispatchContext.Provider value={dispatch}>
        <TaskList/>
    </TasksDispatchContext.Provider>
</TasksContext.Provider>


// Redux toolKit

// store.js

const store = configureStore({
    reducer:{
        counter: counterReducer
    }
})

const slice = createSlice({
    name:'counter',
    initialState: {value:0},
    reducers: {
        increment: (state)=>{
            state.value +=1
        }
    }
})
export const {increment} = slice.actions;
export default slice.reducer;


// use

const count = useSelector((state)=> state.counter.value);
const dispatch = useDispatch()

dispatch(increment())

