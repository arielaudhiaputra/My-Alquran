import Layouts from "../layouts/Index"
import { useState, useEffect } from "react"
import CardLove from "../elements/CardLove";
import { Link } from "react-router-dom";

export function Love(){
    const [loveData, setLoveData] = useState([])

    useEffect(() => {
        const dataFromLocalStorage = localStorage.getItem("loveData");
        if (dataFromLocalStorage) {
            setLoveData(JSON.parse(dataFromLocalStorage));
        }
    }, []);

    let idCounter = 1;

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

                <div className="container mx-auto w-full">
                    <div className="grid grid-cols-1 gap-2 px-4 py-2 mx-auto w-full lg:w-full xl:w-[80%]">
                        {Object.entries(loveData).map(([namaLatin, nomorSurah]) =>
                        Object.entries(nomorSurah).map(([nomorSurah, ayatList]) =>
                            ayatList.map((nomorAyat) => {
                                const id = idCounter;
                                idCounter++;
                                return (
                                        <CardLove
                                            nomorSurah={nomorSurah}
                                            to={`/surah/${nomorSurah}#${nomorAyat}`}
                                            key={id}
                                            id={id}
                                            namaSurah={namaLatin}
                                            nomorAyat={nomorAyat}
                                        />
                                );
                            })
                        )
                    )}
                    </div>
                </div>
            </Layouts>
        </>
    )
}

export default Love