import React from 'react';

export const generateLesson = (initialLetters) => {

    let generatedLesson = '';

    for (let i = 0; i < 40; i++) {
        let generateLetter = initialLetters[Math.floor(Math.random() * initialLetters.length)];
        generatedLesson += generateLetter;

    }
        return generatedLesson;
    }