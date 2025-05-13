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


const res = averageGrade({
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
});

console.log(res)