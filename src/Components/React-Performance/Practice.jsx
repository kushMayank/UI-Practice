import { useEffect, useRef, useState } from "react"



export function DebounceSearch(){
    const [ searchText, setSearchText] = useState("")

    const debouncedSearchText = useDebounce(searchText, 500)

    useEffect(()=>{
        console.log("debounce search :", debouncedSearchText)
    })

    return (
        <input style={{border: '1px solid grey'}} value={searchText} type="text" onChange={(e)=>setSearchText(e.target.value)}></input>
    )
}

function useDebounce(searchText, delay){

    const [debouncedSearchText, setDebouncedSearchText]= useState(searchText);

    useEffect(()=>{
        const timeoutId = setInterval(()=>{
            setDebouncedSearchText(searchText)
        }, delay);

        return ()=> clearTimeout(timeoutId)
    }, [searchText])

    return debouncedSearchText
}


export function ThrottleButton(){

    const throllelApiCall = useThrottle(()=> {
        console.log("api call")
    }, 1000)

    return <>
         <button style={{backgroundColor: '#f2f4f9'}} onClick={throllelApiCall}>Click me</button>   
    </>
}

function useThrottle(fn, delay){
    let lastCall  = useRef(0);

    return (...args) =>{
        const now = Date.now();
        if(now - lastCall.current>= delay){
            lastCall.current = now
            fn(...args)
        }
    }

}