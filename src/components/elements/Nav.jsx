import { useState, useEffect } from 'react'
import DarkIcon from '../icons/DarkIcon';
import SunIcon from '../icons/SunIcon';
import { Link } from 'react-router-dom';

export function Nav(){
    const [theme, setTheme] = useState(localStorage.getItem("theme"));
    useEffect(() => {
        if (theme === "dark") {
            localStorage.setItem("theme", theme);
            const localTheme = localStorage.getItem("theme");
            document.documentElement.classList.add(localTheme)
        } else {
            localStorage.setItem("theme", theme);
            const localTheme = localStorage.getItem("theme");
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    const handleToggle = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <>
        <div className="navbar fixed top-0 text-white py-3 bg-sky-600 w-full">
            <div className="container mx-auto w-full">
                <div className="flex justify-between w-full px-5">
                    <Link to='/' className="btn btn-ghost normal-case text-2xl md:text-3xl hover:bg-sky-700">MyAlquran</Link>
                    <button onClick={handleToggle}>
                        {theme === "dark" ? <SunIcon className="w-10 h-10 dark:text-white"/> : <DarkIcon  className="w-10 h-10"/>}
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Nav