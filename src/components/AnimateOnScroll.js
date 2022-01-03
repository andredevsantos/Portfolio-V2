import { useState, useEffect, useRef } from 'react';

let windowSize = window.innerHeight * 1.5;

function getCurrentFrame(index) {
    return require(`../images/${index.toString().padStart(4, "0")}-min.png`);
}

const ImageCanvas = ({ scrollHeight, numFrames, width, height }) => {
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [frameIndex, setFrameIndex] = useState(0);

    function preloadImages() {
        for (let i = 1; i <= numFrames; i++) {
            const img = new Image();
            const imgSrc = getCurrentFrame(i);
            img.src = imgSrc;
            setImages((prevImages) => [...prevImages, img]);
        }
    }

    const handleScroll = () => {
        const scrollFraction = window.scrollY / (scrollHeight - window.innerHeight);
        const index = Math.min(
            numFrames - 1,
            Math.ceil(scrollFraction * numFrames)
        );

        if (index <= 0 || index > numFrames) {
            return;
        }

        setFrameIndex(index);
    };

    const renderCanvas = () => {
        const context = canvasRef.current.getContext("2d");
        context.canvas.width = width;
        context.canvas.height = height;
    };

    useEffect(() => {
        preloadImages();
        renderCanvas();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!canvasRef.current || images.length < 1) {
            return;
        }

        const context = canvasRef.current.getContext("2d");
        let requestId;

        const render = () => {
            context.clearRect(0, 0, width, height); // Clear canvas before next frame
            context.drawImage(images[frameIndex], 0, 0);
            requestId = requestAnimationFrame(render);
        };

        render();
        return () => cancelAnimationFrame(requestId);
    }, [frameIndex, images]);

    return (
        <>
            <canvas ref={canvasRef} />
        </>
    );
};

const AnimateOnScroll = () => {
    return (
        <ImageCanvas
            scrollHeight={windowSize}
            width={1000}
            height={1000}
            numFrames={60}
        />
    )
}

export default AnimateOnScroll;

// Thanks to https://codepen.io/AliKlein/pen/dyOqrEB?editors=0010