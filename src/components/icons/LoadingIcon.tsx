import { SVGProps } from "react";

const LoadingIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      id="Layer_1"
      height="512"
      viewBox="0 0 24 24"
      width="512"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      {...props}
    >
      <path d="m13 4h-2v-4h2zm0 16h-2v4h2zm-9-9h-4v2h4zm20 0h-4v2h4zm-1.125 6.165-3.458-2.01-1.006 1.729 3.458 2.01zm-3.984-15.039-1.729-1-2.01 3.459 1.729 1zm3.992 4.7-1.008-1.732-3.455 2.013 1.008 1.729zm-3.965 15.038-2.018-3.456-1.728 1.008 2.013 3.456zm-13.318-4.98-1-1.729-3.459 2.01 1 1.729zm3.26-12.3-2.006-3.462-1.728 1 2.01 3.459zm-3.26 2.523-3.459-2.013-1.008 1.728 3.456 2.014zm3.241 12.309-1.729-1.008-2.012 3.456 1.728 1.008z" />
    </svg>
  );
};

export default LoadingIcon;
