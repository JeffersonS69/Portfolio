import { useEffect, useState } from "react";

export const useScrollDirection = () => {
    const [direction, setDirection] = useState<"up" | "down">("down");

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollDirection = () => {
            const scrollY = window.scrollY;
            setDirection(scrollY > lastScrollY ? "down" : "up");
            lastScrollY = scrollY;
        };

        window.addEventListener("scroll", updateScrollDirection);
        return () => window.removeEventListener("scroll", updateScrollDirection);
    }, []);

    return direction;
};
