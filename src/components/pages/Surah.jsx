import axios from 'axios'
import { useState, useEffect } from 'react'
import Layouts from "../layouts/Index"
import CardSurah from '../elements/CardSurah';
import { Link } from 'react-router-dom';

export function Surah(){
    const [surahs, setSurah] = useState([]);
    const [searchQuery, setSearchQuery] = useState("")

    const getQuran = async ()=> {
      const response = await axios('https://equran.id/api/v2/surat')
      setSurah(response.data.data)
    }

    useEffect(() => {
      getQuran();
    }, [])


    const filterSurah = surahs.filter((data) => {
        return data.namaLatin.toLowerCase().includes(searchQuery.toLowerCase());
    })

    return (
        <>
            <Layouts>
                <div className="container mx-auto w-full">
                    <div className="grid grid-cols-1 text-center px-4 py-2 mx-auto w-full lg:w-full xl:w-[80%] gap-4 mb-10">
                        <h1 className="text-center text-2xl md:text-2xl lg:text-3xl font-bold dark:text-white">بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ</h1>
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold dark:text-white">Baca Al-Quran dan Tafsir Ayat Dengan Mudah Bersama MyAlquran</h1>
                    </div>

                    <div className="grid grid-cols-1 text-center px-4 py-2 mx-auto w-full lg:w-[70%] xl:w-[50%] gap-4 mb-8">
                        <Link to='/doa-harian' className="shadow-xl rounded-lg py-5 px-2 border-4 border-sky-600 hover:bg-sky-600 hover:border-yellow-500 hover:text-white">
                            <div className="flex justify-center">
                                <h1 className="font-semibold text-md md:text-lg text-center dark:text-white">Kumpulan Doa Harian</h1>
                            </div>
                        </Link>
                        {/* <Link to='love' className="shadow-xl rounded-lg py-5 px-2 border-4 border-sky-600 hover:bg-sky-600 hover:border-yellow-500 hover:text-white">
                            <div className="flex justify-center">
                                <h1 className="font-semibold text-md md:text-lg text-center dark:text-white">Ayat Favorit</h1>
                            </div>
                        </Link> */}
                    </div>

                    <div className="grid grid-cols-1 text-center px-4 py-2 mx-auto w-full lg:w-full xl:w-[80%] gap-4 mb-6">
                        <h1 className="text-2xl font-semibold underline dark:text-white">Daftar Surah</h1>
                        <input
                            type="search"
                            placeholder="🔍 Cari Surah"
                            className="border-2 border-sky-500 bg-slate-50 dark:bg-transparent w-full px-3 py-2 rounded-md"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="grid grid-cols-12 gap-2 px-4 py-2 mx-auto w-full lg:w-full xl:w-[80%]">
                        {filterSurah.map((surah) =>
                            <div className="col-span-12 md:col-span-6 lg:col-span-4" key={surah.nomor}>
                                <Link to={`/surah/${surah.nomor}`}>
                                    <CardSurah
                                        key={surah.nomor}
                                        noSurah={surah.nomor}
                                        namaSurah={surah.namaLatin}
                                        artiSurah={surah.arti}
                                        tempatTurun={surah.tempatTurun}
                                        jumlahAyat={surah.jumlahAyat}
                                    />
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </Layouts>
        </>
    )
}

export default Surah