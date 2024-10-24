import { useRef } from 'react';
import Cards from '../Components/Cards.jsx';
import Home from '../Components/Home.jsx';

export default function HomePage() {
    const cardsRef = useRef(null);

    const scrollToCards = () => {
        if (cardsRef.current) {
            // Custom slow scroll behavior
            const topOffset = cardsRef.current.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: topOffset,
                behavior: 'smooth'
            });

            // Optional: Adjust the duration of the scroll (slightly slower)
            let scrollDuration = 1500; // 1.5 seconds
            setTimeout(() => {
                // You can add an additional callback after scroll completion if needed
            }, scrollDuration);
        }
    };

    return (
        <>
            <Home onLearnMoreClick={scrollToCards} />
            <div ref={cardsRef}>
                <Cards />
            </div>
        </>
    );
}
