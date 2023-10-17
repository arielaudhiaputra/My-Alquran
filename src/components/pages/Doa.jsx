import axios from "axios"
import { useState, useEffect } from "react"
import Layouts from "../layouts/Index"
import CardDoa from "../elements/CardDoa";
import { Link } from "react-router-dom";

export function Doa(){
    const [doas, setDoa] = useState([]);
    const [searchQuery, setSearchQuery] = useState("")

    const getDoa = async() => {
        const response = await axios('https://equran.id/api/doa');
        setDoa(response.data);
    }

    useEffect(() => {
        getDoa();
    }, []);

    const filterDoa = doas.filter((data) => {
        return data.nama.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <>
            <Layouts>
                <nav className="flex mb-8 mx-auto -mt-8 justify-center sticky top-20 w-[30%] md:w-[16%] lg:w-[12%] rounded-xl border-4 border-sky-600 text-sky-600 py-1 px-5 font-bold bg-white" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 justify-center md:space-x-3">
                        <li className="inline-flex items-center">
                            <Link to="/" className="inline-flex items-center text-sm font-bold">
                                <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                                </svg>
                                Home
                            </Link>
                        </li>
                    </ol>
                </nav>

                <div className="container mx-auto w-full">
                    <div className="grid grid-cols-1 text-center px-4 py-2 mx-auto w-full lg:w-full xl:w-[80%] gap-4 mb-6">
                        <h1 className="text-2xl font-semibold underline">Daftar Doa-Doa Harian</h1>
                        <input
                            type="search"
                            placeholder="🔍 Cari Doa"
                            className="border-2 border-sky-500 bg-slate-50 dark:bg-transparent w-full px-3 py-2 rounded-md"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="grid grid-cols-12 gap-2 px-4 py-2 mx-auto w-full lg:w-full xl:w-[80%]">
                            {filterDoa.map((doa) =>
                                <Link to={`/doa-harian/${doa.id}`} className="col-span-12 md:col-span-6 lg:col-span-4" key={doa.id}>
                                    <CardDoa
                                        id={doa.id}
                                        namaDoa={doa.nama}
                                    />
                                </Link>
                            )}
                    </div>
                </div>
            </Layouts>
        </>
    )
}

export default Doa