import {useEffect, useState} from 'react'

interface CreditItemProps {
  credit: number
  text: string
  line?: boolean
  red?: boolean
  animated?: boolean
}

const CreditItem: React.FC<CreditItemProps> = ({
  credit,
  text,
  line = false,
  red = false,
  animated = false
}) => {
  const [animatedCredit, setAnimatedCredit] = useState(0)

  useEffect(() => {
    const duration = 1500
    const steps = 100
    const increment = credit / steps
    let current = 0

    const interval = setInterval(() => {
      current += increment
      if (current >= credit) {
        setAnimatedCredit(credit)
        clearInterval(interval)
      } else {
        setAnimatedCredit(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(interval)
  }, [credit])

  return (
    <div className="result_content">
      <div
        className={`result_content_number 
          ${line && 'result_content_line'} ${red && 'rednumber'}`}>
        {animated ? animatedCredit : credit}
      </div>
      <div className="result_content_info">{text}</div>
    </div>
  )
}

export default CreditItem
