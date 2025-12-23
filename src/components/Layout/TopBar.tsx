import React from 'react';
import { Icon } from '@iconify/react';
import mailOutline from '@iconify/icons-ion/mail-outline';
import Image from 'next/image';

const TopBar = () => {
    return (
        <div className="flex bg-section dark:bg-darkmode py-2 text-xs font-medium text-secondary dark:text-gray-300 hidden md:block border-b border-border/50 dark:border-dark_border">
            <div className="flex max-w-screen-xl mx-auto justify-end items-center gap-8 px-4 sm:px-6 lg:px-8">
                <span className="tracking-wide">CALL FOR 24/7 SUPPORT</span>
                <a href="mailto:info@compatible-solutions.com" className="flex items-center gap-2 hover:text-primary transition-colors duration-200">
                    <Icon icon={mailOutline} className="text-lg text-primary" />
                    <span className="uppercase">Email Us</span>
                </a>
                <a href="tel:+919999999999" className="flex items-center gap-2 hover:text-primary transition-colors duration-200">
                    <span className="text-base leading-none">
                        <Image src="/images/svgs/india.svg" alt="India" width={20} height={20} />
                    </span>
                    <span className="font-semibold">+91 9999999999</span>
                </a>
            </div>
        </div>
    );
};

export default TopBar;
