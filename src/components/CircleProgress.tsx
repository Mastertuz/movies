import type React from "react"

interface CircularProgressProps {
  progress: number
  size?: number
  strokeWidth?: number
  circleColor?: string
  progressColor?: string
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  progress,
  size = 100,
  strokeWidth = 10,
  circleColor = "#e6e6e6",
  progressColor = "rgb(45 212 191 / var(--tw-text-opacity, 1))",
}) => {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (progress / 100) * circumference

  return (
    <div className="relative size-24 max-lg:size-20 max-md:size-14" >
      <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
        <circle
          className="transition-all duration-300 ease-in-out"
          stroke={circleColor}
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className="transition-all duration-300 ease-in-out"
          stroke={progressColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl max-md:text-base font-semibold">{`${Math.round(progress)}%`}</span>
      </div>
    </div>
  )
}

export default CircularProgress
