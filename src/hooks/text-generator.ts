import { PHRASES } from "@/utils/constants";
import { useEffect, useState } from "react";

const useGenerateText = () => {

    const [displayedText, setDisplayedText] = useState("");
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentPhrase = PHRASES[phraseIndex];

        const handleTyping = () => {
            if (!isDeleting) {
                if (charIndex < currentPhrase.length) {
                    setDisplayedText(currentPhrase.slice(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            } else if (charIndex > 0) {
                setDisplayedText(currentPhrase.slice(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            } else {
                setIsDeleting(false);
                setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
            }
        };

        const timeout = setTimeout(handleTyping, isDeleting ? 50 : 150);
        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, phraseIndex]);

    return {
        displayedText
    }
}

export default useGenerateText;