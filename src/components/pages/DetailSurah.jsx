import axios from 'axios'
import { useState, useEffect } from 'react'
import Layouts from "../layouts/Index"
import { useParams } from 'react-router-dom'
import CardAyat from '../elements/CardAyat'
import Header from '../elements/Header'
import { Link } from 'react-router-dom';

export function DetailSurah(){
    const [surahs, setSurahs] = useState([]);
    const [audio, setAudio] = useState([]);
    const [ayats, setAyats] = useState([]);
    const {id} = useParams();

    const getQuran = async() => {
        const response = await axios('https://equran.id/api/v2/surat/' + id);
        setAudio(response.data.data.audioFull)
        setSurahs(response.data.data)
        setAyats(response.data.data.ayat)
    }


    useEffect(() => {
        getQuran();
    }, [])



    return (
        <>
            <Layouts>
                <nav className="flex mb-8 mx-auto -mt-8 justify-center sticky top-20 w-[28%] md:w-[20%] lg:w-[10%] border-4 rounded-xl border-sky-600 text-sky-600 py-1 px-5 font-bold bg-white" aria-label="Breadcrumb">
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

                <div className="container mx-auto w-full mt-6">
                    <div className="grid grid-cols-1 px-3 mx-auto w-full">
                        <Header
                            key={surahs.nomor}
                            nomor={surahs.nomor}
                            namaSurah={surahs.nama}
                            namaSurahLatin={surahs.namaLatin}
                            jumlahAyat={surahs.jumlahAyat}
                            tempatTurun={surahs.tempatTurun}
                            arti={surahs.arti}
                            audioFull={audio["05"]}
                        />
                    </div>
                </div>

                <div className="container mx-auto w-full mt-3">
                    <div className="grid grid-cols-1 px-3 mx-auto py-5 w-full">
                        <div className="shadow-xl rounded-xl w-full h-full border-4 border-sky-600">
                            <div className="flex justify-center py-9 px-3">
                                <h1 className="text-end text-2xl md:text-3xl lg:text-4xl font-bold">بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ</h1>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container mx-auto w-full mt-2">
                    <div className="grid grid-cols-1 gap-5 px-3 mx-auto w-full">
                            {ayats.map((ayat) =>
                                <CardAyat
                                    namaLatin={surahs.namaLatin}
                                    namaSurah={surahs.nama}
                                    nomorSurah={surahs.nomor}
                                    key={ayat.nomorAyat}
                                    id={ayat.nomorAyat}
                                    nomorAyat={ayat.nomorAyat}
                                    ayat={ayat.teksArab}
                                    teksLatin={ayat.teksLatin}
                                    teksIndonesia={ayat.teksIndonesia}
                                    audio={ayat.audio}
                                />
                            )}
                    </div>
                </div>

                <div className="container mx-auto mt-6">
                    <div className="grid grid-1 px-3">
                        <div className="flex justify-between w-full py-4 px-5 gap-2 shadow-xl rounded-xl border-4 border-sky-600">
                            <div className="text-start font-bold text-black">
                                {surahs.suratSebelumnya && (
                                    <Link to={`/surah/${surahs.suratSebelumnya.nomor}`} onClick={() => window.location.href = `/surah/${surahs.suratSebelumnya.nomor}`} >
                                        <button className='px-4 py-2 rounded-md bg-slate-300 text-sm md:text-md border-2' type='button'>
                                            {`< ${surahs.suratSebelumnya.namaLatin}`}
                                        </button>
                                    </Link>
                                )}
                            </div>

                            <div className="text-end font-bold text-black">
                                {surahs.suratSelanjutnya && (
                                    <Link to={`/surah/${surahs.suratSelanjutnya.nomor}`} onClick={() => window.location.href = `/surah/${surahs.suratSelanjutnya.nomor}`}>
                                        <button className='px-4 py-2 rounded-md bg-slate-300 text-sm md:text-md' type='button'>
                                            {`${surahs.suratSelanjutnya.namaLatin} >`}
                                        </button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </Layouts>
        </>
    )
}

export default DetailSurah