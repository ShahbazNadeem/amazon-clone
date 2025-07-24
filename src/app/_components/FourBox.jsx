import React from 'react'

const FourBox = ({ data, title }) => {
    return (
        <div className="bg-white p-4 lg:p-2 shadow-sm basis-[100%] sm:basis-[47%] md:basis-[32%] lg:basis-[24%]">
            <h2 className="text-lg font-semibold mb-4">{title}</h2>
            <div className="flex flex-wrap justify-center gap-2 lg:gap-3">
                {data.map((item, index) => (
                    <div key={index} className="w-[46%]">
                        <figure className='w'>
                            <img src={item.src} alt={item.label} className="w-full h-full object-cover" />
                        </figure>
                        <p className="text-sm mt-2">{item.label}</p>
                    </div>
                ))}
            </div>

            <a href="#" className="text-blue-600 text-sm mt-4 block hover:underline">
                Explore more
            </a>
        </div>
    )
}

export default FourBox
