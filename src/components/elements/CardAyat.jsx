import Play from "../icons/Play"
import Pause from "../icons/Pause"
import { useState } from "react"
import { useRef } from "react"
import LoveIn from "../icons/LoveIn"
import LoveOut from "../icons/LoveOut"
import { useLove } from "../../hooks/useLove"


export function CardAyat({nomorAyat, ayat, teksLatin, teksIndonesia, audio, namaLatin, nomorSurah, id}){

    const {love, toggleLove} = useLove(nomorAyat, namaLatin, nomorSurah)
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
            <div id={id} className="shadow-xl border-4 border-sky-600 px-4 py-6 rounded-xl mx-auto justify-center w-full h-full">
                <div className="flex justify-between w-full">
                    <div className="bg-sky-600 p-3 h-9 w-9 flex items-center justify-center rounded-full">
                        <span className="font-bold text-base text-white">{nomorAyat}</span>
                    </div>
                    <div className="flex gap-2">
                        <button className="" onClick={toggleAudio}>
                            {audioStatus ? <Pause/> : <Play/>}
                        </button>
                        <audio ref={audioRef} src={audio["05"]} onEnded={handleAudioEnded} />
                        <button className="" onClick={toggleLove}>
                            {love ? <LoveIn/> : <LoveOut/>}
                        </button>
                    </div>
                </div>
                <div className="flex flex-col mt-7 w-full">
                    <h1 className="text-end font-bold text-xl md:text-2xl lg:text-3xl">{ayat}</h1>
                    <h1 className="text-start text-orange-600 text-sm md:text-base lg:text-lg mt-5">{teksLatin}</h1>
                    <span className="w-full h-[3px] rounded-xl bg-slate-700"></span>
                    <h1 className="text-start text-sm md:text-base lg:text-lg">{teksIndonesia}</h1>
                </div>
            </div>
        </>
    )
}

export default CardAyat