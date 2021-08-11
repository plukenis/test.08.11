data = [
    {
        name: 'Jonas',
        marks: [10, 2, 8, 4, 6]
    },
    {
        name: 'Maryte',
        marks: [3, 7, 9, 5]
    },
    {
        name: 'Petras',
        marks: [7, 7, 7]
    },
    {
        name: 'Ona',
        marks: [10, 9, 8, 7, 6]
    },
]


function student_lowest_grade(student) {
    lowest_grade_so_far = student["marks", 0]

    for (mark in student["marks", 1])
        if (mark < lowest_grade_so_far)
            lowest_grade_so_far = mark

    return lowest_grade_so_far
}

function student_highest_grade(student) {
    highest_grade_so_far = student['marks', 0]

    for (mark in student['marks', 1])
        if (mark > highest_grade_so_far)
            highest_grade_so_far = mark

    return highest_grade_so_far
}

function student_average(student) {
    sum_of_marks = 0
    for (mark in student['marks'])
        sum_of_marks = sum_of_marks + mark
    
    return sum_of_marks / data.length
}

function summarize_marks(data) {
    summary = []
    for (student in data)
        summary.push(
            {
                'name': student['name'],
                'lowest_mark': student_lowest_grade(student),
                'highest_mark': student_highest_grade(student),
                'average_mark': student_average(student)
            }
        )
    return summary
}

function find_worst_students(summary) {
    lowest_performing_students = []
    lowest_mark_of_all = summary[0]['lowest_mark']
    
    for (student in summary)
        if (student['lowest_mark'] <= lowest_mark_of_all)
            lowest_mark_of_all = student['lowest_mark']

    for (student in summary)
        if (student['lowest_mark'] == lowest_mark_of_all)
            lowest_performing_students.push(student['name'])

    return lowest_performing_students, lowest_mark_of_all
}

function find_best_students(summary) {
    best_performing_students = []
    best_average_of_all = summary[0]['highest_mark']
    
    for (student in summary)
        if (student['highest_mark'] >= best_average_of_all)
            best_average_of_all = student['highest_mark']

    for (student in summary)
        if (student['highest_mark'] == best_average_of_all)
            best_performing_students.push(student['name'])
    
    return best_performing_students, best_average_of_all
}

function find_worst_student_average(summary) {
    worst_performing_students = []
    worst_average_of_all = summary[0]['average_mark']
    
    for (student in summary)
        if (student['average_mark'] <= worst_average_of_all)
            worst_average_of_all = student['average_mark']
    
    for (student in summary)
        if (student['average_mark'] == worst_average_of_all)
            worst_performing_students.push(student['name'])

    return worst_performing_students, worst_average_of_all
}

function find_best_student_average(summary) {
    best_performing_students = []
    best_mark_of_all = summary[0]['average_mark']
    
    for (student in summary)
        if (student['average_mark'] >= best_mark_of_all)
            best_mark_of_all = student['average_mark']

    for (student in summary)
        if (student['average_mark'] == best_mark_of_all)
            best_performing_students.push(student['name'])
    
    return best_performing_students, best_mark_of_all
}

function find_students_with_mark(data, mark_of_interest) {
    students_with_mark_of_interest = []
    for (student in data)
        for (mark in student['marks'])
            if (mark == mark_of_interest)
                students_with_mark_of_interest.append(student['name'])
    
    return students_with_mark_of_interest, mark_of_interest
}

function find_students_without_mark(data, mark_of_interest) {
    students_without_mark_of_interest = []
    for (student in data)
        mark_of_interest_found = False

        for (mark in student['marks'])
            if (mark == mark_of_interest)
                mark_of_interest_found = True

        if (mark_of_interest_found = False)
            students_without_mark_of_interest.push(student['name'])

    return students_without_mark_of_interest, mark_of_interest
}

summary = summarize_marks(data)

let lowest_performing_students, lowest_mark = find_worst_students(summary)
console.log('Lowest mark {lowest_mark} for students {lowest_performing_students}')

let best_performing_students, best_mark = find_best_students(summary)
console.log('Highest mark {best_mark} for students {best_performing_students}')

let lowest_performing_students_avg, worst_average = find_worst_student_average(summary)
console.log('Lowest mark average {worst_average} for students {lowest_performing_students_avg}')

let best_performing_students_avg, best_average = find_best_student_average(summary)
console.log('Highest mark average {best_average} for students {best_performing_students_avg}')

let students_with_mark_of_interest, mark_of_interest = find_students_with_mark(data, mark_of_interest=8)
console.log('Students with mark {mark_of_interest}: {students_with_mark_of_interest}')

let students_without_mark_of_interest, mark_of_interest = find_students_without_mark(data, mark_of_interest=7)
console.log('Students without mark {mark_of_interest}: {students_without_mark_of_interest}')