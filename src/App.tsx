import { useState } from 'react';
import './App.css';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/solid';
import presidentRanchi from './assets/president_ranchi.jpeg';
import spookyRanchi from './assets/spooky_ranchi.jpeg';
import ranchiAdmiringRanchi from './assets/ranchi_admiring_ranchi.jpeg';

interface CarouselProps {
    slides: string[];
}

function Carousel ({ slides }: CarouselProps) {
    const [current, setCurrent] = useState(0);

    const previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1)
    }

    const nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1)
    }

    return (
            <div className="overflow-hidden relative">
                <div
                    className={`flex transition east-out duration-400`}
                    style ={{
                        transform: `translateX(-${current * 100}]%)`
                    }}
                >
                    {slides.map((s, i) => {
                        return <img key={i} src={s} alt={`Slide ${i}`}/>;
                    })}
                </div>

                <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
                    <button onClick={previousSlide}>
                        <ArrowLongLeftIcon />
                    </button>
                    <button onClick={nextSlide}>
                        <ArrowLongRightIcon />
                    </button>
                </div>
            </div>
    )
}

function App() {
    const slides: string[] = [
        presidentRanchi,
        spookyRanchi,
        ranchiAdmiringRanchi,
    ];

    return (
        <div className="w-[60%] m-auto pt-11">
            <Carousel slides={slides} />
        </div>
    )

}

export default App;
