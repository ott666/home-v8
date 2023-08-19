import * as React from "react"
import { SVGProps } from "react"
const QuestionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 19h.01M8.217 7.697A4.002 4.002 0 0 1 16 9a4.001 4.001 0 0 1-2.442 3.685c-.74.314-1.111.47-1.24.592a.75.75 0 0 0-.257.386C12 13.83 12 14.087 12 14.6V16"
    />
  </svg>
)
export default QuestionIcon
