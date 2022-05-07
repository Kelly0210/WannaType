export const generateLesson = (initialLetters = 'initial', levelOfDifficulty = 120, spacesBetweenWords = 4) => {
    let generatedLesson = '';

    for (let i = 0; i < levelOfDifficulty; i++) {
        let generateLetter = initialLetters[Math.floor(Math.random() * initialLetters.length)];
        generatedLesson += generateLetter;

        // RegEx delete all already created spaces
        if (generatedLesson.replace(/ /g, '').length % spacesBetweenWords === 0) {
            generatedLesson += ' ';
        }

    }
    return generatedLesson;
}