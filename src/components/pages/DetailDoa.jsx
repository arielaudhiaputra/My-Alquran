import Layouts from "../layouts/Index"
import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export function DetailDoa(){
    const [doaHarian, setDoaHarian] = useState([])
    const {id} = useParams()

    const getDoaHarian = async() => {
        const response = await axios('https://equran.id/api/doa/' + id)
        setDoaHarian(response.data)
    }

    useEffect(() => {
        getDoaHarian()
    }, [])

    return (
        <>
            <Layouts>
                <nav className="flex mb-8 mx-auto justify-center -mt-8 sticky top-20 w-[60%] md:w-[30%] lg:w-[20%] border-4 rounded-xl border-sky-600 text-sky-600 py-1 px-5 font-bold bg-white" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 justify-center md:space-x-3">
                        <li className="inline-flex items-center">
                            <Link to="/" className="inline-flex items-center text-sm font-bold">
                                <svg className="w-3 h-3 mr-2.5" ariaidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                                </svg>
                                Home
                            </Link>
                        </li>

                        <li>
                            <div className="flex items-center">
                                <svg className="w-3 h-3 text-black mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                </svg>
                                <Link to="/doa-harian" className="ml-1 text-sm font-bold hover:text-blue-600 md:ml-2 night:hover:text-white">Kembali</Link>
                            </div>
                        </li>
                    </ol>
                </nav>

                <div className="container mx-auto w-full">
                    <div className="grid grid-1 mx-auto px-4 py-3 w-full lg:w-full xl:w-[80%]">
                        <div className="shadow-xl rounded-lg flex justify-center border-4 border-sky-600 px-6 py-4 gap-6  hover:bg-sky-600 hover:text-white  hover:border-yellow-500">
                            <h1 className="text-center text-2xl md:text-3xl font-bold dark:text-white">
                                {doaHarian.nama}
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto w-full">
                    <div className="grid grid-1 mx-auto px-4 py-3 w-full lg:w-full xl:w-[80%]">
                        <div className="shadow-xl rounded-lg flex flex-col border-4 border-sky-600 px-6 py-8 gap-6">
                            <div className="flex flex-col gap-3">
                                <h1 className="text-end font-bold text-3xl md:text-4xl dark:text-white">{doaHarian.ar}</h1>
                                <h1 className="text-start font-semibold text-lg dark:text-white">{doaHarian.tr}</h1>
                            </div>
                            <div className="flex flex-col">
                                <h1 className="font-bold text-lg dark:text-white">Artinya :</h1>
                                <h1 className="text-start font-medium text-md md:text-lg dark:text-white">{doaHarian.idn}</h1>
                            </div>
                            <div className="flex flex-col">
                                <h1 className="font-bold text-md md:text-lg dark:text-white">Tentang :</h1>
                                <h1 className="text-start font-medium text-md md:text-lg dark:text-white">{doaHarian.tentang}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </Layouts>
        </>
    )
}

export default DetailDoa