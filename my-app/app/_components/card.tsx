/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import kadai from '../images/kadailanri.webp';
import sakito from '../images/sakito.webp';
import vtalk from '../images/v-talk.webp';

export default function Card() {
    return (
        <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-indigo-100 w-full">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">My PortFolio</h2>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">~Created~</p>
        </div>


        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <a className="group" href="#">
            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                <Image className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src={kadai} alt="Image Description" />
            </div>

            <div className="mt-7">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                Task Management
                </h3>
                <p className="mt-3 text-gray-800 dark:text-neutral-200">
                Produce professional, reliable streams easily leveraging Prelines innovative broadcast studio
                </p>
                <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
                Read more
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </p>
            </div>
            </a>


            <a className="group" href="#">
            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                <Image className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src={vtalk} alt="Image Description" />
            </div>

            <div className="mt-7">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                V-talk
                </h3>
                <p className="mt-3 text-gray-800 dark:text-neutral-200">
                Optimize your in-person experience with best-in-className capabilities like badge printing and lead retrieval
                </p>
                <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
                Read more
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </p>
            </div>
            </a>

            <a className="group" href="#">
            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                <Image className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src={sakito} alt="Image Description" />
            </div>

            <div className="mt-7">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                SAKITO
                </h3>
                <p className="mt-3 text-gray-800 dark:text-neutral-200">
                Optimize your in-person experience with best-in-className capabilities like badge printing and lead retrieval
                </p>
                <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
                Read more
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </p>
            </div>
            </a>

        </div>
        </div>
    );
}