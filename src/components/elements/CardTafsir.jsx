export function CardTafsir({ayat, teks}){
    return (
        <>
            <div className="shadow-xl border-4 border-sky-600 px-4 py-6 rounded-xl mx-auto justify-center w-full h-full">
                <div className="flex flex-row justify-start gap-4 w-full">
                    <div className="bg-sky-600 p-3 h-9 w-9 flex items-center justify-center rounded-full">
                        <span className="font-bold text-base text-white">{ayat}</span>
                    </div>
                    <p className='text-base'>{teks}</p>
                </div>
            </div>
        </>
    )
}

export default CardTafsir