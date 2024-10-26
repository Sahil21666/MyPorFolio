import React, { useEffect, useState } from 'react';

const TypingEffect = () => {
    const words = ["Web Developer"]; 
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
    const typingSpeed = 150; // typing speed in ms
    const pauseTime = 1000; // time to pause before changing words

    useEffect(() => {
        const typingInterval = setInterval(() => {
            setText((prev) => {
                if (prev.length < words[index].length) {
                    return words[index].substring(0, prev.length + 1);
                } else {
                    clearInterval(typingInterval);
                    setTimeout(() => {
                        setIndex((prev) => (prev + 1) % words.length);
                        setText('');
                    }, pauseTime);
                    return prev;
                }
            });
        }, typingSpeed);

        return () => clearInterval(typingInterval);
    }, [index, typingSpeed, pauseTime, words]);

    return (
        <span className="text-pink-500">{text}</span>
    );
};

export default TypingEffect;