import { Icons } from "./icon";

function fromNameToSvgCode(namesArray: string | string[]) {
  if (typeof namesArray === "string") {
    return Icons[namesArray];
  }

  let path: string | undefined;
  let defs: string | undefined;

  for (let i = 0; i < namesArray.length; i++) {
    const icon = Icons[namesArray[i]];
    if (icon) {
      continue;
    }
  }
}

const body = (includes: string | string[]) => {
  return `<svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_1029_18)">
  <path d="M380 0H20C8.9543 0 0 8.9543 0 20V180C0 191.046 8.9543 200 20 200H380C391.046 200 400 191.046 400 180V20C400 8.9543 391.046 0 380 0Z" fill="#161B22"/>
  <path d="M20 0.5H380C390.77 0.5 399.5 9.23045 399.5 20V180C399.5 190.77 390.77 199.5 380 199.5H20C9.23045 199.5 0.5 190.77 0.5 180V20C0.5 9.23045 9.23045 0.5 20 0.5Z" stroke="white" stroke-opacity="0.25"/>
  </g>
    ${typeof includes === "string" ? includes : fromNameToSvgCode(includes)}
  <defs>
  <clipPath id="clip0_1029_18">
  <rect width="400" height="200" fill="white"/>
  </clipPath>
  </defs>
  </svg>
  `;
};
