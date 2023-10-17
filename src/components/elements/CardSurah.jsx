export function CardSurah({noSurah, namaSurah, artiSurah, tempatTurun, jumlahAyat }) {

    return (
        <>
            <div className="flex shadow-xl hover:bg-sky-600 hover:text-white rounded-xl w-full px-4 py-3 h-full justify-center mx-auto hover:border-yellow-500 border-4 border-sky-600 gap-1">
                <div className="bg-sky-400 font-bold p-3 h-8 w-8 flex items-center justify-center rounded-full">
                    <span className="font-semibold text-base text-white">{noSurah}</span>
                </div>
                <div className="flex justify-between w-full gap-3">
                    <div className="w-full">
                        <h1 className="font-semibold text-xl">{namaSurah}</h1>
                        <h2 className="font-light text-xs">{artiSurah}</h2>
                    </div>

                    <div className="flex flex-col items-end justify-center w-full">
                        <p className="font-normal text-sm">{tempatTurun}</p>
                        <p className="font-normal text-sm">{`${jumlahAyat} Ayat`}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CardSurah