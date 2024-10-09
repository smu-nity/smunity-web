interface ResultContentProps {
  credit: number
  text: string
  line?: boolean
  red?: boolean
}

const ResultContent: React.FC<ResultContentProps> = ({
  credit,
  text,
  line = false,
  red = false
}) => {
  return (
    <div className="result_content">
      <div
        className={`result_content_number 
          ${line && 'result_content_line'} ${red && 'rednumber'}`}>
        {credit}
      </div>
      <div className="result_content_info">{text}</div>
    </div>
  )
}

export default ResultContent
