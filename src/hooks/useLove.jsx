import { useState, useEffect } from "react";

export const useLove = (nomorAyat,namaLatin, nomorSurah,) => {
    const [love, setLove] = useState(false);

    useEffect(() => {
        const loveData = JSON.parse(localStorage.getItem("loveData") || "{}");
        setLove(loveData[namaLatin]?.[nomorSurah]?.includes(nomorAyat) || false);
    }, [namaLatin, nomorAyat, nomorSurah]);

    const toggleLove = () => {
        const newLove = !love;
        setLove(newLove);
        const loveData = JSON.parse(localStorage.getItem("loveData") || "{}");
        if (!loveData[namaLatin]) {
            loveData[namaLatin] = {};
        }
        if (!loveData[namaLatin][nomorSurah]) {
            loveData[namaLatin][nomorSurah] = [];
        }
        const index = loveData[namaLatin][nomorSurah].indexOf(nomorAyat);
        if (newLove) {
            if (index === -1) {
                loveData[namaLatin][nomorSurah].push(nomorAyat);
            }
        } else {
            if (index !== -1) {
                loveData[namaLatin][nomorSurah].splice(index, 1);
            }
        }
        // Remove the Surah group if the array is empty
        if (loveData[namaLatin][nomorSurah].length === 0) {
            delete loveData[namaLatin][nomorSurah];
            if (Object.keys(loveData[namaLatin]).length === 0) {
                delete loveData[namaLatin];
            }
        }
        localStorage.setItem("loveData", JSON.stringify(loveData));
    };

    return { love, toggleLove };
};

export default useLove