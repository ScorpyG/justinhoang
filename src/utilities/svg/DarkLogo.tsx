import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={60}
    height={60}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={22.565}
      y={31.956}
      width={3.913}
      height={37.435}
      rx={1.957}
      transform="rotate(-90 22.565 31.956)"
      fill="#2E2E2E"
    />
    <rect
      x={26.087}
      y={0.522}
      width={3.913}
      height={59.087}
      rx={1.957}
      fill="#2E2E2E"
    />
    <rect x={32.348} width={3.913} height={60} rx={1.957} fill="#2E2E2E" />
    <path
      d="M49.622 10.378c.879-.879 2.31-.884 3.121.058a30.002 30.002 0 0 1 0 39.128c-.81.942-2.242.937-3.12.058-.88-.879-.87-2.297-.073-3.25a25.497 25.497 0 0 0 0-32.744c-.798-.953-.806-2.371.072-3.25ZM30 57.75c0 1.243-1.009 2.259-2.248 2.166a30 30 0 0 1-26.47-21.24c-.36-1.19.414-2.395 1.627-2.664 1.213-.27 2.405.5 2.78 1.685A25.5 25.5 0 0 0 27.753 55.4C28.99 55.51 30 56.507 30 57.75ZM30 2.25c0-1.243-1.009-2.259-2.248-2.166A30 30 0 0 0 13.34 5.051c-1.033.69-1.202 2.112-.437 3.091.766.979 2.175 1.142 3.218.466a25.5 25.5 0 0 1 11.632-4.009C28.99 4.49 30 3.493 30 2.25Z"
      fill="#2E2E2E"
    />
  </svg>
)

export default SvgComponent
