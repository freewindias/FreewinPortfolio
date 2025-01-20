import React from 'react'

export const SectionHeader = ({
    title,
    eyebrow,
    description,
}: {
    title: string;
    eyebrow: string;
    description: string;
}) => {
    return (
        <>
            <div className='flex justify-center'>
                <p className='text-xl lg:text-2xl uppercase font-semibold tracking-widest bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text'>
                    {eyebrow}
                </p>
            </div>
            <h2 className='font-serif text-3xl md:text-5xl lg:text-7xl text-center mt-6'>
                {title}
            </h2>
            <p className='text-center md:text-lg lg:text-2xl text-black/70 mt-4 max-w-md mx-auto'>
                {description}
            </p>
        </>
    )
}
