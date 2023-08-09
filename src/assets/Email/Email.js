import React from "react";

function Email({ color, bgColor, bgColorEmail }) {
  return (
    <svg
      id="Capa_2"
      data-name="Capa 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 140.6 140.6"
    >
      <g id="Capa_1-2" data-name="Capa 1">
        <g>
          <polygon
            fill={bgColor ? bgColor : "#1d1d1b"}
            className="cls-2"
            points="135.75 53.33 135.75 48.48 135.75 43.63 135.75 38.78 130.91 38.78 130.91 33.94 130.91 29.09 126.06 29.09 126.06 24.24 121.21 24.24 121.21 19.39 116.36 19.39 116.36 14.54 111.51 14.54 111.51 9.69 106.66 9.69 101.82 9.69 101.82 4.85 96.97 4.85 92.12 4.85 87.27 4.85 87.27 0 82.42 0 77.57 0 72.72 0 67.88 0 63.03 0 58.18 0 53.33 0 53.33 4.85 48.48 4.85 43.63 4.85 38.78 4.85 38.78 9.69 33.94 9.69 29.09 9.69 29.09 14.54 24.24 14.54 24.24 19.39 19.39 19.39 19.39 24.24 14.54 24.24 14.54 29.09 9.69 29.09 9.69 33.94 9.69 38.78 4.85 38.78 4.85 43.63 4.85 48.48 4.85 53.33 0 53.33 0 58.18 0 63.03 0 67.88 0 72.72 0 77.57 0 82.42 0 87.27 4.85 87.27 4.85 92.12 4.85 96.97 4.85 101.82 9.69 101.82 9.69 106.66 9.69 111.51 14.54 111.51 14.54 116.36 19.39 116.36 19.39 121.21 24.24 121.21 24.24 126.06 29.09 126.06 29.09 130.91 33.94 130.91 38.78 130.91 38.78 135.75 43.63 135.75 48.48 135.75 53.33 135.75 53.33 140.6 58.18 140.6 63.03 140.6 67.88 140.6 72.72 140.6 77.57 140.6 82.42 140.6 87.27 140.6 87.27 135.75 92.12 135.75 96.97 135.75 101.82 135.75 101.82 130.91 106.66 130.91 111.51 130.91 111.51 126.06 116.36 126.06 116.36 121.21 121.21 121.21 121.21 116.36 126.06 116.36 126.06 111.51 130.91 111.51 130.91 106.66 130.91 101.82 135.75 101.82 135.75 96.97 135.75 92.12 135.75 87.27 140.6 87.27 140.6 82.42 140.6 77.57 140.6 72.72 140.6 67.88 140.6 63.03 140.6 58.18 140.6 53.33 135.75 53.33"
          />
          <g>
            <rect
              fill={bgColorEmail ? bgColorEmail : "#1d1d1b"}
              className="cls-2"
              x="25.1"
              y="45.94"
              width="88.47"
              height="52.55"
            />
            <path
              fill={color ? color : "#fff"}
              className="cls-1"
              d="m116.36,43.45v-4.85H24.24v4.85h-4.85v58.19h4.85v4.84h92.12v-4.84h4.85v-58.19h-4.85Zm-4.85,19.4v33.94H29.09v-38.79h4.85v4.85h9.69v4.85h9.7v4.84h9.7v4.85h14.54v-4.85h9.7v-4.84h9.7v-4.85h9.69v-4.85h4.85v4.85Zm-4.85-9.7h-9.69v4.85h-9.7v4.85h-9.7v4.85h-14.54v-4.85h-9.7v-4.85h-9.7v-4.85h-9.69v-4.85h72.72v4.85Z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Email;
