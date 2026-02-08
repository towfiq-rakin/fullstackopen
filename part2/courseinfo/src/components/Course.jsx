const Course = (props) => {
    const { courses } = props

    return (
        <div>
            {courses.map(course=>
                <div key={course.id}>
                    <h2>{course.name}</h2>
                    {course.parts.map(part=>
                        <p key={part.id}>
                            {part.name} {part.exercises}
                        </p>
                    )}
                    <b>total of {course.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</b>
                </div>
            )}
        </div>

    )
}

export default Course