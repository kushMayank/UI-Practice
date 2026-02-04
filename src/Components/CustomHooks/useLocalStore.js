const { useState, useEffect } = require("react");

export function useLocalStore(key, initialValue){
    const [state, setState] = useState(()=>{
        try{
            const raw = localStorage.getItem(key);
            return raw !== null ? JSON.parse(raw): (typeof initialValue === 'function' ? initialValue(): initialValue)
        }
        catch{
            return  typeof initialValue === 'function' ? initialValue(): initialValue
        }
        }
    )

    useEffect(()=>{
        try{
            localStorage.setItem(key, JSON.stringify(state));
        } catch{}
    }, [key, state])

    const remove = ()=>{
        try {localStorage.removeItem(key);} catch{}
        setState(typeof initialValue === 'function'? initialValue(): initialValue)
    }

    return [state, setState, remove]
}