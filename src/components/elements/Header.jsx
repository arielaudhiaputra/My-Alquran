import { useRef, useState } from "react"
import { Link } from 'react-router-dom';

import Play from "../icons/Play"
import Pause from "../icons/Pause"
import Book from  "../icons/Book"

export function AudioPaused() {
    return (
        <>
            <Play></Play>
            <span>Putar Audio</span>
        </>
    );
}
export function AudioPlayed() {
    return (
        <>
            <Pause></Pause>
            <span>Hentikan Audio</span>
        </>
    );
}




export function Header({nomor, namaSurah, namaSurahLatin, jumlahAyat, tempatTurun, arti, audioFull}){
    const [audioStatus, setAudioStatus] = useState(false);
    const audioRef = useRef();

    function toggleAudio() {

        if (audioStatus) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }

        setAudioStatus(!audioStatus);
    }

    function handleAudioEnded() {
        setAudioStatus(false);
    }

    return (
        <>
            <div className="shadow-xl rounded-xl w-full h-full border-4 border-sky-600">
                <div className="flex flex-col justify-center gap-2 py-6">
                    <div className="flex justify-center items-center mx-auto w-full gap-4  px-3">
                        <div className="bg-sky-600 font-bold p-3 h-9 w-9 flex items-center justify-center rounded-full">
                            <span className="font-semibold text-base text-white">{nomor}</span>
                        </div>
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">{namaSurahLatin}</h1>
                        <span className="rounded-full mt-2 bg-yellow-600 h-[6px] w-[6px]"></span>
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">{namaSurah}</h1>
                    </div>
                    <div className="flex justify-center items-center mx-auto w-full gap-6 px-3">
                        <h1 className="font-semibold text-sm md:text-base">{tempatTurun}</h1>
                        <h1 className="font-semibold text-sm text-center md:text-lg">{arti}</h1>
                        <span className="font-semibold text-sm md:text-base">{jumlahAyat}</span>
                    </div>
                    <div className="flex justify-center items-center mx-auto w-full gap-4 mt-2 px-3">
                        <button onClick={toggleAudio} className="flex text-sm justify-center items-center py-1 md:py-2 px-4 bg-slate-300 text-black font-bold rounded-xl gap-2">
                            {audioStatus ? <AudioPlayed/>: <AudioPaused/>}
                        </button>
                        <audio ref={audioRef} src={audioFull} onEnded={handleAudioEnded} />

                        <Link to={`/tafsir/${nomor}`}>
                            <button className="flex justify-center text-sm items-center gap-2 py-1 md:py-2 px-4 bg-slate-300 text-black font-bold rounded-xl">
                                <Book></Book>
                                <span>Buka Tafsir</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header