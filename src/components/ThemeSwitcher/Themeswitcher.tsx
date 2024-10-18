import useLocalStorage from "./useLocalStorage"
import "./style.css"

export default function Themeswticher() {

    const[theme,setTheme] = useLocalStorage({key:'theme',defaultValue:'light'})

    function handleThemeswitch(){
        setTheme(theme === 'light'? 'dark': 'light')
        console.log(theme);
    }

    return <div className={
        theme === 'light'? "light-theme":"dark-theme"
    }>
        <h2>{theme === 'light'? 'Theme set to light':"Theme set to dark"}</h2>
        <button onClick={handleThemeswitch}>Change theme</button>
    </div>
    
}