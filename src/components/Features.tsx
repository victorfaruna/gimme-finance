import Image from "next/image";

export default function Features() {
    return (
        <section
            id="features"
            className="bg-color-main featires-container w-full px-[var(--x-padding)] py-[4rem] flex gap-5 flex-wrap "
        >
            <div className="feature-item w-full  item-1 flex flex-col md:flex-row bg-gradient-to-br shadow-lg shadow-color-1/[0.09] from-purple-50 to-purple-100 rounded-[1rem] md:rounded-[2rem] overflow-hidden">
                <div className="left w-[80%] md:w-[50%] flex flex-col gap-4 [padding:40px_0_40px_40px] md:[padding:60px_0_60px_60px]">
                    <p className="text-[0.8rem] md:text-[1rem] tracking-[2px] text-color-3 uppercase font-medium">
                        Engage
                    </p>
                    <p className="text-[1.3rem] md:text-[3.5rem] font-bold leading-none text-color-1">
                        Effortless Payments
                        <br /> & Transfers
                    </p>
                    <p className="text-[0.7rem] md:text-[1.3rem] text-color-1/70 font-medium">
                        Swap, Withdraw, Send money, and make payments with ease
                        using your favourite currency and stable coins.
                    </p>

                    <button className="mt-4 md:mt-[250px] self-start text-[0.9rem] cursor-pointer font-bold flex items-center gap-1">
                        Get started
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-[1] items-end">
                    <Image
                        className="w-full"
                        src="/images/showcase-1.webp"
                        alt=""
                        width={1080}
                        height={720}
                    />
                </div>
            </div>

            <div className="feature-item w-full md:w-[35%] item-2 rounded-[1rem] md:rounded-[2rem] overflow-hidden bg-red-300">
                <Image
                    className="w-full h-full object-cover"
                    src="/images/showcase-2.webp"
                    alt=""
                    width={720}
                    height={1080}
                />
            </div>

            <div className="feature-item flex-[1] item-3 flex flex-col md:flex-row bg-gradient-to-br shadow-2xl shadow-color-1/10 from-purple-50 to-blue-100 rounded-[1rem] md:rounded-[2rem] overflow-hidden">
                <div className="left w-[80%] md:w-[50%] flex flex-col gap-4 [padding:40px_0_40px_40px] md:[padding:60px_0_60px_60px]">
                    <p className="text-[0.8rem] md:text-[1rem] tracking-[2px] text-color-3 uppercase font-medium">
                        Level Up
                    </p>
                    <p className="text-[1.3rem] md:text-[3.5rem] font-bold leading-none text-color-1">
                        Decetralized Marketplace
                    </p>
                    <p className="text-[0.7rem] md:text-[1.3rem] text-color-1/70 font-medium">
                        Global decentralised B2B & B2C platform for merchants
                        and the emerging digital asset economy.
                    </p>

                    <button className="mt-4 md:mt-[250px] self-start text-[0.9rem] cursor-pointer font-bold flex items-center gap-1">
                        Get started
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-[1] items-end">
                    <Image
                        className="w-full"
                        src="/images/showcase-3.webp"
                        alt=""
                        width={1080}
                        height={720}
                    />
                </div>
            </div>

            <div
                className="feature-item w-full  item-1 flex flex-col md:flex-row bg-gradient-to-br shadow-2xl shadow-color-1/10 from-purple-50 to-yellow-100
       rounded-[1rem] md:rounded-[2rem] overflow-hidden"
            >
                <div className="left w-[80%] md:w-[60%] flex flex-col gap-4 [padding:40px_0_40px_40px] md:[padding:60px_0_60px_60px]">
                    <p className="text-[0.8rem] md:text-[1rem] tracking-[2px] text-color-3 uppercase font-medium">
                        Secured
                    </p>
                    <p className="text-[1.3rem] md:text-[3.5rem] font-bold leading-none text-color-1">
                        Secure Transactions with Tokenization & NFTs
                    </p>
                    <p className="text-[0.7rem] md:text-[1.3rem] text-color-1/70 font-medium">
                        Gimme uses security measures such as tokinization and
                        NFT to protect customer data and prevent fraud.
                    </p>

                    <button className="mt-4 md:mt-[250px] self-start text-[0.9rem] cursor-pointer font-bold flex items-center gap-1">
                        Get started
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-[1] items-end">
                    <Image
                        className="w-full"
                        src="/images/showcase-4.webp"
                        alt=""
                        width={1080}
                        height={1080}
                    />
                </div>
            </div>
        </section>
    );
}
