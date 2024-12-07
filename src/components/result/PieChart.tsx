import React, {useState, useEffect, useRef} from 'react'

interface PieChartProps {
  percent: number
}

const PieChart: React.FC<PieChartProps> = ({percent}) => {
  const [animatedPercent, setAnimatedPercent] = useState(0)
  const pieChartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let i = 1
    const max = percent
    const interval = setInterval(() => {
      if (i <= max) {
        if (pieChartRef.current) {
          pieChartRef.current.style.background = `conic-gradient(rgba(0, 102, 255, 0.1) 0%, rgba(0, 102, 255, 1) ${i}%, rgb(232, 235, 242) ${i}%, rgb(232, 235, 242) 100%)`
        }
        i++
      } else {
        clearInterval(interval)
      }
    }, 20)
  }, [percent])

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < percent) {
        setAnimatedPercent(i)
        i++
      } else {
        setAnimatedPercent(percent)
        clearInterval(interval)
      }
    }, 15)
    return () => clearInterval(interval)
  }, [percent])

  return (
    <div className="result_content">
      <div className="pie-chart">
        <div ref={pieChartRef} className="pie-chart-color">
          <div className="pie-chart-inner">
            <span className="center">{animatedPercent}%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PieChart
