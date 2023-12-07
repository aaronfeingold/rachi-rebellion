import React, { useState } from 'react';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/solid';
import { CarouselProps } from '../models/carousel';

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
    const [current, setCurrent] = useState(0);

    const previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1)
    };

    const nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1)
    };

    const images = slides.map((s, i) => {
        return <img key={i} src={s} alt={`Slide ${i}`} />;
    });

    const circleDivs = [];

    for (let i = 0; i < slides.length; i++) {
        circleDivs.push(
            <div
                onClick={()=>{
                    setCurrent(i)
                }}
                key={"circle" + i}
                className={`rounded-full w-5 h-5 ${i === current ? "bg-white" : "bg-gray-500"}`}
            >
            </div>
        )
    }

    return (
            <div className="h-full overflow-hidden relative">
                <div
                    className="flex transition ease-in-out duration-700"
                    style ={{
                        transform: `translateX(-${current * 100}%)`
                    }}
                >
                    {images}
                </div>

                <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
                    <button onClick={previousSlide}>
                        <ArrowLongLeftIcon className="h-5 w-5 text-blue-500"/>
                    </button>
                    <button onClick={nextSlide}>
                        <ArrowLongRightIcon className="h-5 w-5 text-blue-500"/>
                    </button>
                </div>
                <div className="absolute bottom-0 py-4 flex justify-center gap-10 w-full">
                    {circleDivs}
                </div>
            </div>
    )
}

export default Carousel;
