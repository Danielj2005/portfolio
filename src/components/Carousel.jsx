


import { useState } from 'react';

function Carousel({ images, id = "carouselExample" }) {
    const [activeIndex, setActiveIndex] = useState(0);

    if (!images || images.length === 0) {
        return null;
    }

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div id={id} className="relative overflow-hidden rounded-lg">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {images.map((src, index) => (
                    <div key={index} className="flex-shrink-0 w-full">
                        <img
                            src={src}
                            alt={`Slide ${index + 1}`}
                            className="w-full object-cover"
                            style={{ height: '300px' }}
                        />
                    </div>
                ))}
            </div>
            {images.length > 1 && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 text-2xl"
                        aria-label="Previous"
                    >
                        ‹
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 text-2xl"
                        aria-label="Next"
                    >
                        ›
                    </button>
                </>
            )}
        </div>
    );
}

export default Carousel;
