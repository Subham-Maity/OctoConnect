"use client";

import React from "react";
import {useEffect, useState} from "react";
import {motion} from "framer-motion"; // Import framer-motion
import {BsFillArrowUpCircleFill, BsFillArrowRightCircleFill} from "react-icons/bs"; //

// Define an interface for your props
interface BackToTopProps {
    disabled: boolean;
    left: number;
    right: number;
    delay: number;
}


const BackToTop: React.FC<Partial<BackToTopProps>> = (props) => {
    const {disabled, left, right, delay} = props;
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [opacity, setOpacity] = useState<number>(1);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY; // Use window.scrollY instead of window.pageYOffset
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const percentage = (position / maxScroll) * 100;
            setScrollPosition(percentage);
            setOpacity(1);
        };


        let timeout: NodeJS.Timeout;

        const handleScrollEnd = () => {
            setOpacity(1);
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                const interval = setInterval(() => {
                    setOpacity((prevOpacity) => {
                        if (prevOpacity <= 0.1) {
                            clearInterval(interval);
                            return 0;
                        }
                        return prevOpacity - 0.1;
                    });
                }, 100);
            }, delay || 1000);
        };

        const handleWheel = () => {
            setOpacity(1);
            handleScrollEnd();
        };

        const handleTouchMove = () => {
            setOpacity(1);
            handleScrollEnd();
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("wheel", handleWheel);
        window.addEventListener("touchmove", handleTouchMove);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, [delay]);

    const scrollToTop = () => {
        setIsClicked(true);
        window.scrollTo({top: 0, behavior: "smooth"});
        setTimeout(() => {
            setIsClicked(false);
        }, delay || 1000);
    };

    // Check if disabled prop is true
    if (disabled) {
        // Return null to render nothing
        return null;
    }

    return (
        <div
            className={`fixed bottom-4 z-50`}
            style={{opacity, left, right}}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
        >
            <motion.button
                className="relative flex items-center justify-center px-3 py-2 border border-gray-200 dark:border-gray-600 bg-gray-600 dark:bg-stone-900 text-white rounded-full hover:bg-gray-900 focus:outline-none sm:text-xs"
                onClick={scrollToTop}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
            >
                <div className="flex items-center">
                    <div className="mr-2">
                        {isClicked ? (
                            <BsFillArrowUpCircleFill size={24}/>
                        ) : (
                            <BsFillArrowRightCircleFill size={24}/>
                        )}
                    </div>
                    <div className="mr-2 hidden sm:block">
                        <span className="text-sm hover:underline">Back to Top</span>
                    </div>
                    <div className="w-20 mr-2">
                        <div className="relative h-2 rounded-full bg-gray-800">
                            <div
                                className="absolute left-0 top-0 h-full bg-gray-400 rounded-full"
                                style={{width: `${scrollPosition}%`}}
                            ></div>
                        </div>
                    </div>
                    <div>
            <span className="text-sm font-medium text-gray-400">
              {`${Math.floor(scrollPosition)}%`}
            </span>
                    </div>
                </div>
            </motion.button>
        </div>
    );
};

BackToTop.defaultProps = {
    disabled: true,
    left: undefined,
    right: 4,
    delay: undefined,
};

export default BackToTop;


