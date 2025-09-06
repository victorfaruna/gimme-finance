"use client";
import Image from "next/image";
import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
const DATA = [
    {
        question: "What is Gimme?",
        answer: "Gimme is a blockchain-based decentralised market place for seamless microtransaction payments piloting in the 168+ university campuses in Nigeria with an average of 20k students and 1k+ merchants making and accepting at least 3 transactions daily.",
    },
    {
        question: "How does the wallet work?",
        answer: "Gimme is a wallet that allows you to send and receive payments. You can send payments to anyone in NGN, USD and Crypto (Stablecoins)",
    },
    {
        question: "Is my money safe on Gimme?",
        answer: "Gimme uses blockchain technology to ensure that your transactions are secure and private. We use the latest encryption technology to protect your data and keep your transactions private.",
    },
    {
        question: "What can I pay for with Gimme?",
        answer: "Airtime & data top-ups, Utility bills, Subscriptions (streaming, services, etc.)Transfers to other Gimme users or Nigerian bank accounts",
    },
];
const FAQ = () => {
    return (
        <div className="w-screen p-[2rem] lg:p-[7rem] bg-color-1/5 font-clash-display relative overflow-hidden flex flex-col lg:flex-row gap-[2rem] justify-between">
            <div className="left w-full lg:w-[40%] flex ">
                <Image
                    src="/images/qm.webp"
                    alt="FAQ"
                    className="w-[300px] absolute z-[-1] top-[1rem] object-contain flex-shrink-0 opacity-[0.1]"
                    width={1000}
                    height={1000}
                />
                <p className="text-[2rem] lg:text-[5rem] font-semibold leading-none text-color-1/80 ">
                    Some frequently asked questions
                </p>
            </div>
            <div className="right w-full lg:w-[40%]">
                <Accordion type="single" collapsible>
                    {DATA.map((item, index) => (
                        <AccordionItem
                            value={`item-${index}`}
                            key={index}
                            className="w-full "
                        >
                            <AccordionTrigger className="text-[0.9rem] lg:text-[1.5rem]">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-[0.6rem] lg:text-[0.8rem]">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
};

export default FAQ;
