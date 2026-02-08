const Course = (props) => {
    const { course } = props

    return (
        <div>
            <h1>{course.name}</h1>
            {course.parts.map(part=>
                <p key={part.id}>
                    {part.name} {part.exercises}
                </p>
            )}
            <b>total of {course.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</b>
        </div>
    )
}

export default Course