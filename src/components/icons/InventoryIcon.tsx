import { SVGProps } from "react";

const InventoryIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <path d="M21.8,5.579,14.8.855A4.981,4.981,0,0,0,9.2.855l-7,4.724A4.992,4.992,0,0,0,0,9.724V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V9.724A4.993,4.993,0,0,0,21.8,5.579ZM18,22H6V13a2,2,0,0,1,2-2h8a2,2,0,0,1,2,2Zm4-3a3,3,0,0,1-2,2.828V13a4,4,0,0,0-4-4H8a4,4,0,0,0-4,4v8.828A3,3,0,0,1,2,19V9.724A3,3,0,0,1,3.322,7.237l7-4.723a2.983,2.983,0,0,1,3.356,0l7,4.723A3,3,0,0,1,22,9.724Zm-8,0a1,1,0,0,1-1,1H11a1,1,0,0,1,0-2h2A1,1,0,0,1,14,19Z" />
    </svg>
  );
};

export default InventoryIcon;
