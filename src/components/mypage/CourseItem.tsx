interface Course {
  year: string
  semester: string
  name: string
  number: string
  type: string
  domain?: string
  credit: number
}

interface CourseItemProps {
  course: Course
}

const CourseItem: React.FC<CourseItemProps> = ({course}) => {
  return (
    <tr>
      <td className="grade_table_td">{course.year}</td>
      <td className="grade_table_td">{course.semester}</td>
      <td className="grade_table_td">{course.number}</td>
      <td className="grade_table_td">{course.name}</td>
      <td className="grade_table_td">{course.type}</td>
      <td className="grade_table_td">{course.domain ? course.domain : ''}</td>
      <td className="grade_table_td" style={{borderRight: '0px'}}>
        {course.credit}
      </td>
    </tr>
  )
}

export default CourseItem
