const averageGrade = (person) => {
    if (!person.grades.length) {
        return 0;
    }

    let totalScore = 0;

    for (let grade of person.grades) {
        if (Number.isInteger(grade.score)) {
            totalScore += grade.score;
        }
    }

    return totalScore / person.grades.length;
}
const averageGrade2 = (person) => {
    if (!person.grades.length) {
        return 0;
    }

    const totalScore = person.grades.reduce((acc, grade) => { return acc + (Number.isInteger(grade.score) ? grade.score : 0); }, 0);

    return totalScore / person.grades.length;
};

console.log(averageGrade({
    name: 'Chill Student',
    grades: [
        {
            name: 'Math',
            score: 1,
        },
        {
            name: 'Science',
            score: 5,
        },
        {
            name: 'Invalid Name',
            score: null,
        },
        {
            name: 'Invalid Subject',
            score: undefined,
        },
        {
            name: 'Biology',
            score: 10,
        },
    ]
}));

console.log(averageGrade2({
    name: 'Chill Student',
    grades: [
        {
            name: 'Math',
            score: 1,
        },
        {
            name: 'Science',
            score: 5,
        },
        {
            name: 'Invalid Name',
            score: null,
        },
        {
            name: 'Invalid Subject',
            score: undefined,
        },
        {
            name: 'Biology',
            score: 10,
        },
    ]
}));