import React, { useState } from 'react';
import './App.css';
import { ArrowLongLeftIcon, ArrowLongRightIcon, HeartIcon, HomeIcon, BookOpenIcon, HandThumbUpIcon } from '@heroicons/react/24/solid';
import presidentRanchi from './assets/president_ranchi.jpeg';
import spookyRanchi from './assets/spooky_ranchi.jpeg';
import ranchiAdmiringRanchi from './assets/ranchi_admiring_ranchi.jpeg';
import ranchiSleepy from './assets/ranchi_sleepy.jpeg';
import ranchiDuende from './assets/ranchi_duende.jpeg';

interface Testimony {
    message: string;
    emoji: React.ForwardRefExoticComponent<
      Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
        title?: string | undefined;
        titleId?: string | undefined;
      } & React.RefAttributes<SVGSVGElement>
    >;
}

interface TestimonyCardProps {
    testimony: Testimony;
}

const TestimonyCard: React.FC<TestimonyCardProps> = ({testimony}) => {
    return (
        <div>
            <p>{testimony.message}</p>
            {React.createElement(testimony.emoji)}
        </div>
    )
}

interface TestimonyGridProps {
    testimonies: Testimony[];
}

const TestimonyGrid: React.FC<TestimonyGridProps> = ({testimonies}) => {
    const testimonyCards = testimonies.map((testimony) => <TestimonyCard testimony={testimony} />);

    return (
        <div className="grid grid-cols-4 gap-4">
            {testimonyCards}
        </div>
    )
}

interface CarouselProps {
    slides: string[];
}

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
        return <img className="object-scale-down" key={i} src={s} alt={`Slide ${i}`} />;
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
                    className="flex transition ease-out duration-400"
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

function App() {
    const slides: string[] = [
        presidentRanchi,
        spookyRanchi,
        ranchiAdmiringRanchi,
        ranchiSleepy,
        ranchiDuende
    ];

    const testimonies = [
        {
            message: "this dog is the smartest",
            emoji: BookOpenIcon
        },
        {
            message: "ranchi is too cute",
            emoji: HeartIcon
        },
        {
            message: "i want my ranchi",
            emoji: HomeIcon
        },
        {
            message: "she's such a good girl",
            emoji: HandThumbUpIcon
        }
    ];

    return (
        <>
            <div className="h-screen w-[60%] m-auto pt-5 pb-5">
                <Carousel slides={slides} />
            </div>
            <div className="h-screen w-[60%] m-auto pt-5 pb-5">
                <TestimonyGrid testimonies={testimonies} />
            </div>
        </>
    )

}

export default App;
