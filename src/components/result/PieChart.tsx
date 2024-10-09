interface PieChartProps {
  percent: number
}

const PieChart: React.FC<PieChartProps> = ({percent}) => {
  return (
    <div className="result_content">
      <div className="pie-chart">
        <div className="pie-chart-color pie-all">
          <div className="pie-chart-inner">
            <span className="center">{percent}%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PieChart
