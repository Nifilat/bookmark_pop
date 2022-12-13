const Logo = () => {
  return (
    <div className="flex items-center gap-x-2">
      <svg
        width="67"
        height="72"
        viewBox="0 0 67 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 8.48242H54.1953V71.5002L28.568 58.5147L0 71.5002V8.48242Z"
          fill="#338DF7"
        />
        <g filter="url(#filter0_d_1432_19650)">
          <rect
            x="35.71"
            y="0.5"
            width="29.4083"
            height="29.4083"
            rx="14.7041"
            fill="white"
          />
          <path
            d="M51.2539 4.70166L54.4048 9.74712L60.3498 9.95314L57.5557 15.2046L60.3498 20.4561L54.4048 20.6621L51.2539 25.7076L48.103 20.6621L42.1581 20.4561L44.9522 15.2046L42.1581 9.95314L48.103 9.74712L51.2539 4.70166Z"
            fill="#C21515"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_1432_19650"
            x="34.0295"
            y="0.5"
            width="32.7691"
            height="32.7691"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1.68047" />
            <feGaussianBlur stdDeviation="0.840237" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1432_19650"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1432_19650"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <h2 className="font-bold text-3xl text-black">Bookmark Pop</h2>
    </div>
  );
};

export default Logo;
