"use client";
import Image from "next/image";
import Link from "next/link";

import BrandImg from "@/public/assets/logo-cv-dark.svg";
import { cn } from "@/lib/utils";

type Props = {
    light?: boolean;
    className?: string;
} & React.HTMLProps<HTMLAnchorElement>;

export default function Brand({ light, className, ...props }: Props) {
    return (
        <Link {...props} href="/" className={cn(`flex font-bold text-2xl f-poppins`, className ?? "")}>
            {/* <Image alt="brand" src={BrandImg} className="w-auto" /> */}
            <svg className="w-auto inline-block" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M45.2585 75.9784C44.7084 76.0275 44.2577 75.578 44.255 75.0257L44.2126 66.561C44.2098 66.0087 44.6627 65.572 45.1959 65.4282C45.915 65.2343 46.5977 64.8282 47.2438 64.2099C47.9326 63.4147 48.299 62.4728 48.343 61.384L48.2294 38.6734C48.2244 37.6838 47.799 36.7211 46.9532 35.7852C46.3882 35.2258 45.7368 34.854 44.9991 34.6698C44.4796 34.5401 44.0503 34.1159 44.0476 33.5805L44.005 25.0732C44.0022 24.521 44.4482 24.0676 44.9997 24.0961C50.0006 24.3542 53.8358 26.775 56.5054 31.3584C57.9529 33.8746 58.6824 36.2955 58.6941 38.621L58.8077 61.3316C58.8359 66.9722 56.3583 71.1904 51.3748 73.9862C49.2662 75.1385 47.2274 75.8026 45.2585 75.9784Z"
                    className={`${light ? "fill-white" : "fill-black"}`}
                />
                <path
                    d="M27 6.11881C27 6.05319 27.0532 6 27.1188 6V6C33.6806 6 39 11.3194 39 17.8812V75.8812C39 75.9468 38.9468 76 38.8812 76V76C32.3194 76 27 70.6806 27 64.1188V6.11881Z"
                    className={`${light ? "fill-white" : "fill-black"}`}
                />
            </svg>
        </Link>
    );
}
