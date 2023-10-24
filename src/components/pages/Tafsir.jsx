import axios from 'axios'
import { useState, useEffect } from 'react'
import Layouts from "../layouts/Index"
import { useParams } from 'react-router-dom'
import CardTafsir from '../elements/CardTafsir';
import Book from  "../icons/Book"
import { Link } from 'react-router-dom';

export function Tafsir(){
    const {id} = useParams();
    const [tafsirs, setTafsirs] = useState([]);
    const [surahs, setSurahs] = useState([]);


    const getTafsir = async() => {
        const response = await axios('https://equran.id/api/v2/tafsir/' + id)
        setTafsirs(response.data.data.tafsir)
        setSurahs(response.data.data)
    }


    useEffect(()=>{
        getTafsir();
    }, []);

    return (
        <>
           <Layouts>
                <nav className="flex mb-8 mx-auto -mt-8 justify-center sticky top-20 w-[60%] md:w-[30%] lg:w-[20%] border-4 rounded-xl border-sky-600 text-sky-600 py-1 px-5 font-bold bg-white" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 justify-center md:space-x-3">
                        <li className="inline-flex items-center">
                            <Link to="/" className="inline-flex items-center text-sm font-bold">
                                <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
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
                                <Link to={`/surah/${surahs.nomor}`} className="ml-1 text-sm font-bold hover:text-blue-600 md:ml-2">Kembali</Link>
                            </div>
                        </li>
                    </ol>
                </nav>

                <div className="container mx-auto">
                    <div className="grid grid-1 px-4">
                        <div className="shadow-xl rounded-xl w-full h-full border-4 border-sky-600">
                            <div className="flex flex-col justify-center gap-2 py-6">
                                <div className="flex justify-center items-center mx-auto w-full gap-4  px-3">
                                    <div className="bg-sky-600 font-bold p-3 h-9 w-9 flex items-center justify-center rounded-full">
                                        <span className="font-semibold text-base text-white">{surahs.nomor}</span>
                                    </div>
                                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold dark:text-white">{surahs.namaLatin}</h1>
                                    <span className="rounded-full mt-2 bg-yellow-600 h-[6px] w-[6px]"></span>
                                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold dark:text-white">{surahs.nama}</h1>
                                </div>
                                <div className="flex justify-center items-center mx-auto w-full gap-6 px-3">
                                    <h1 className="font-semibold text-base dark:text-white">{surahs.tempatTurun}</h1>
                                    <h1 className="font-semibold text-lg dark:text-white">{surahs.arti}</h1>
                                    <span className="font-semibold text-base dark:text-white">{surahs.jumlahAyat}</span>
                                </div>
                                <div className="flex justify-center items-center mx-auto w-full gap-4 mt-2 px-3">
                                    <Link to={`/surah/${surahs.nomor}`}>
                                        <button className="flex justify-center items-center gap-2 py-2 px-4 bg-slate-300 text-black font-bold rounded-xl">
                                            <Book></Book>
                                            <span>Buka Surah</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto mt-5">
                    <div className="grid grid-1 px-4 gap-5">
                        {tafsirs.map((tafsir) =>
                        <CardTafsir
                                key={tafsir.ayat}
                                ayat={tafsir.ayat}
                                teks={tafsir.teks}
                        />
                        )}
                    </div>
                </div>
           </Layouts>
        </>
    )
}

export default Tafsir