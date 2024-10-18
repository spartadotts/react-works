import { useEffect, useState } from "react";

interface HookProps{
    key: string;
    defaultValue: string;
}

export default function useLocalStorage({key,defaultValue}: HookProps){
    const [input, setInput] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem(key) || JSON.stringify(defaultValue))
        } catch (e) {
            console.log(e)
            return defaultValue;
        }
    });

    useEffect(() => {
        localStorage.setItem(key,JSON.stringify(input));

    },[key,input]);

    return [input,setInput];
}