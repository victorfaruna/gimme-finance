import React from "react";

const WhatWeDo = () => {
    return (
        <div className="w-full bg-color-1 text-color-main px-[1rem] py-[2rem] lg:px-[6rem] lg:py-[7rem] flex flex-col items-center gap-8">
            <div className="t flex flex-col gap-4">
                <p
                    style={{
                        wordSpacing: "0.8rem",
                    }}
                    className="text-center leading-none uppercase font-bold text-[1.5rem] lg:text-[3rem] font-clash-display"
                >
                    Built for Everyday Essential Payments
                </p>
                <p className="text-[0.8rem] lg:text-[1rem] text-color-main/80 text-center">
                    We are building a financial inclusive world with everyone,
                    for everyone using blockchain and Ai.
                </p>

                <div className="flex gap-5 justify-center items-center flex-wrap">
                    <button className="item hover:cursor-pointer w-[150px] border border-color-main/50 rounded-[2.5rem] p-5 flex items-center justify-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-apple"
                            viewBox="0 0 16 16"
                        >
                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                        </svg>
                        <p className="text-[1rem] cursor-pointer">App store</p>
                    </button>
                    <button className="item hover:cursor-pointer w-[150px] border border-color-main/50 rounded-[2.5rem] p-5 flex items-center justify-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-google-play"
                            viewBox="0 0 16 16"
                        >
                            <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27" />
                        </svg>
                        <p className="text-[1rem]">Play store</p>
                    </button>
                </div>
            </div>
            <div className="w-[90%] bg-color-main/30 rounded-[1rem] lg:rounded-[2rem] h-[70vh] overflow-hidden">
                <iframe
                    src="https://www.youtube.com/embed/ReANUqdjeP4?t=5"
                    title="Gimme app demo"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                ></iframe>
            </div>
        </div>
    );
};

export default WhatWeDo;
