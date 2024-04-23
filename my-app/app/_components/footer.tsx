import React from 'react';
import { BxBxlGithub } from './icon/github-icon';
import { LogosSlackIcon } from './icon/slack-icon';
import { Fa6BrandsXTwitter } from './icon/x-icon';

export default function Footer() {
    return (
    <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-white">
        <div className="text-center">
            <div>
                <a className="flex-none text-3xl font-semibold text-black dark:text-white">Hakuei</a>
            </div>
            <div className="mt-3">
                <p className="text-gray-500 dark:text-neutral-500">I am rookie engineer</p>
                <p className="text-gray-500 dark:text-neutral-500">Under icons are my account link</p>
            </div>
            <div className="mt-5 space-x-8">
                <a className="size-8 inline-flex justify-center items-center" href="https://github.com/Thakuei">
                    <BxBxlGithub className="flex-shrink-0 size-9" />
                </a>
                <a className="size-8 inline-flex justify-center items-center" href="https://twitter.com/Alpha606786241">
                    <Fa6BrandsXTwitter className="flex-shrink-0 size-9" />
                </a>
            </div>
        </div>
    </footer>
    );
}