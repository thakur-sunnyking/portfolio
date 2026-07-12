import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggle = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggle);

        return () => window.removeEventListener("scroll", toggle);
    }, []);

    return (
        visible && (
            <button
                onClick={() =>
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    })
                }
                className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 transition"
            >
                <FaArrowUp />
            </button>
        )
    );
};

export default ScrollTop;