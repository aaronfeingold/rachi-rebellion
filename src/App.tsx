import './App.css';
import Carousel from './components/Carousel';
import TestimonyContainer from './containers/TestimonyContainer';
import { HeartIcon, HomeIcon, BookOpenIcon, HandThumbUpIcon } from '@heroicons/react/24/solid';
import presidentRanchi from './assets/president_ranchi.jpeg';
import spookyRanchi from './assets/spooky_ranchi.jpeg';
import ranchiAdmiringRanchi from './assets/ranchi_admiring_ranchi.jpeg';
import ranchiSleepy from './assets/ranchi_sleepy.jpeg';
import ranchiDuende from './assets/ranchi_duende.jpeg';

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
            <div className="w-[75%] m-auto pt-5 pb-5">
                <TestimonyContainer testimonies={testimonies} />
            </div>
        </>
    )

}

export default App;
