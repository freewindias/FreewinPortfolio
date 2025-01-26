import React, { PropsWithChildren } from 'react'
// import grainImage from "@/assets/images/grain.jpg"
import { twMerge } from 'tailwind-merge'

export const ReCard = ({ className, children }: PropsWithChildren<{
    className?: string;
}>) => {
    return (
        <>
            <div className={twMerge("bg-gray-200 rounded-3xl z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after: outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none",className)}>
                {/* <div 
                    className="inset-0 -z-10 opacity-5"
                    style={{
                        backgroundImage: `url(${grainImage.src})`,
                    }}
                ></div> */}
                {children}
            </div>
        </>
    )
}
