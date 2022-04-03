import React from 'react';

export const generateLesson = (initialLetters = 'Please, reload page', levelOfDifficulty = 120) => {
    let generatedLesson = '';
    let spacesBetweenWords = 4;

    switch (levelOfDifficulty) {
        case 'easy': levelOfDifficulty = 120;
            spacesBetweenWords = 4;
            break;
        case 'average': levelOfDifficulty = 240;
            spacesBetweenWords = 6;
            break;
        case 'hard': levelOfDifficulty = 480;
            spacesBetweenWords = 8;
            break;
    }

    for (let i = 0; i < levelOfDifficulty; i++) {
        let generateLetter = initialLetters[Math.floor(Math.random() * initialLetters.length)];
        generatedLesson += generateLetter;

        // RegEx delete all alredy created spaces
        if (generatedLesson.replace(/ /g, '').length % spacesBetweenWords === 0) {
            generatedLesson += ' ';
        }

    }
    return generatedLesson;
}