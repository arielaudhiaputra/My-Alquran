import axios from "axios"
import { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"

export function CardLove({id, namaSurah, nomorAyat, to}){


    return (
        <>

            <NavLink to={to} className="flex flex-row items-center shadow-xl hover:bg-sky-600 hover:text-white rounded-xl w-full px-4 py-3 h-full mx-auto hover:border-yellow-500 border-4 border-sky-600 gap-2">
                <div className="bg-sky-400 font-bold p-3 h-8 w-8 flex items-center justify-center rounded-full">
                    <span className="font-semibold text-base text-white">{id}</span>
                </div>

                <div className="flex">
                    <h1 className="font-bold dark:text-white">{namaSurah} : {nomorAyat}</h1>
                </div>
            </NavLink>
        </>
    )
}

export default CardLove