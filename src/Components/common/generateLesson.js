export const generateLesson = (initialUnits = "", numberOfUnits = 60, unitsForSpace = 4) => {
    let generatedLesson = "";

    if (initialUnits[0].length > 1) {
        for (let i = 0; i < numberOfUnits; i++) {
            let randomWord = initialUnits[Math.floor(Math.random() * initialUnits.length)];
            generatedLesson += " " + randomWord;
        }
        return generatedLesson.slice(1);
    } else {
        for (let i = 0; i < numberOfUnits; i++) {
            let generateLetter = initialUnits[Math.floor(Math.random() * initialUnits.length)];
            generatedLesson += generateLetter;

            // RegEx delete all already created spaces
            if (generatedLesson.replace(/ /g, '').length % unitsForSpace === 0) {
                generatedLesson += " ";
            }
        }
        return generatedLesson;
    }

}