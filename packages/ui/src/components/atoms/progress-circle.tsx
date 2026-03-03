import * as React from "react";

import { cn } from "../../lib/utils";

export interface ProgressCircleProps
  extends React.SVGAttributes<SVGSVGElement> {
  value?: number;
  size?: number;
}

const ProgressCircle = React.forwardRef<SVGSVGElement, ProgressCircleProps>(
  ({ className, value = 0, size = 48, ...props }, ref) => {
    const radius = (size - 8) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (value / 100) * circumference;

    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className={cn("rotate-[-90deg]", className)}
        {...props}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          className="text-primary/20"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="text-primary transition-all duration-300"
        />
      </svg>
    );
  },
);
ProgressCircle.displayName = "ProgressCircle";

export { ProgressCircle };
