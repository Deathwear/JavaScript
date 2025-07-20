// --- Lecture (29) : For-Each Loops ---
// The forEach() method executes a provided function once for each array element.

const coding = ["JavaScript", "Python", "Ruby", "Swift", "Java"];

// Using forEach with an array
coding.forEach((language, index) => {
  console.log(`Language at index ${index} is ${language}`);
});



// Using forEach with an array of objects
const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : "js",
    },
    {
        languageName : "java",
        languageFileName : "java",
    },
    {
        languageName : "python",
        languageFileName : "py",
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
});