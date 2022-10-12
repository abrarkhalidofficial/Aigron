import servicesbackground from "../assets/services-background.png";

export function ServicesSection() {
  return (
    <section className="services">
      <div className="services__heading">Services</div>
      <div className="services__background">
        <img src={servicesbackground} alt="servicesbackground" />
      </div>
      <div className="services___Content">
        <div className="services__card">
          <div className="services__card__svg">
            <svg
              width="61"
              height="55"
              viewBox="0 0 61 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M60.24 15.8481C59.4322 16.0346 58.64 16.3142 57.8166 16.4074C56.5428 16.5627 55.6573 17.1531 55.2223 18.3803C55.1291 18.6599 54.9893 18.924 54.8806 19.1881C54.5233 20.0891 54.5854 20.9591 55.1446 21.7513C55.5641 22.3572 56.0146 22.963 56.4651 23.5534C56.7913 23.9728 56.8069 24.3146 56.3874 24.6719C56.1855 24.8583 55.9991 25.0602 55.7971 25.2466C55.1136 25.9302 55.0048 25.9457 54.197 25.3554C53.7155 25.0136 53.2494 24.6563 52.7834 24.299C51.929 23.6776 51.028 23.6 50.0648 24.0039C49.8162 24.1126 49.5677 24.2214 49.3036 24.3146C48.154 24.734 47.5482 25.5573 47.3928 26.7691C47.3152 27.3904 47.2064 28.0118 47.1287 28.6332C47.0666 29.1303 46.8491 29.4255 46.2899 29.3789C45.917 29.3478 45.5442 29.3633 45.1714 29.3789C44.6432 29.4099 44.3791 29.208 44.317 28.6487C44.2393 27.8875 44.0995 27.1419 43.9752 26.3807C43.8354 25.5573 43.3849 24.936 42.6392 24.5476C42.1421 24.2835 41.6139 24.066 41.0702 23.8796C40.2313 23.6 39.4391 23.7398 38.7245 24.2524C38.1031 24.7029 37.4972 25.1534 36.8914 25.6195C36.5496 25.8836 36.27 25.8836 35.9593 25.5573C35.6331 25.2156 35.3068 24.8738 34.9651 24.5476C34.6544 24.2524 34.6699 23.9417 34.9185 23.6155C35.3534 23.0407 35.7729 22.4504 36.2078 21.8601C36.8603 20.9746 36.9535 20.0425 36.5185 19.0328C36.4098 18.7842 36.301 18.5357 36.2078 18.2716C35.8039 17.1686 35.0272 16.5627 33.8621 16.3919C33.2407 16.2987 32.6193 16.2054 31.9979 16.1278C31.4542 16.0656 31.1901 15.8171 31.2367 15.2423C31.2678 14.8539 31.2678 14.45 31.2367 14.0617C31.1901 13.5335 31.4542 13.316 31.9358 13.2383C32.7125 13.1296 33.4893 13.0053 34.2505 12.8655C35.1359 12.7101 35.7263 12.182 36.0836 11.3741C36.2544 10.9858 36.4098 10.5819 36.5807 10.178C36.9535 9.27696 36.8448 8.40702 36.2855 7.61475C35.8505 6.99336 35.3845 6.37197 34.934 5.76612C34.6699 5.40882 34.6699 5.09813 35.0117 4.78743C35.3534 4.4612 35.6797 4.11944 36.0059 3.77768C36.27 3.49805 36.5341 3.48252 36.8292 3.71554C37.3885 4.15051 37.9633 4.55441 38.5225 4.98938C39.4546 5.68845 40.4333 5.82826 41.5052 5.34668C41.7071 5.25347 41.8935 5.16026 42.0955 5.09813C43.2917 4.67869 43.9286 3.82428 44.0684 2.56597C44.1461 1.94458 44.2393 1.32319 44.317 0.701803C44.3791 0.204692 44.6276 -0.028328 45.1403 0.00274142C45.5287 0.0338108 45.9326 0.0338108 46.3209 0.00274142C46.8491 -0.028328 47.0511 0.235762 47.1287 0.717338C47.2375 1.47854 47.3618 2.2242 47.4705 2.9854C47.486 3.09415 47.5016 3.21843 47.5482 3.32717C48.123 5.1758 51.0901 6.23216 52.6902 5.14473C53.3426 4.70976 53.9485 4.21265 54.5699 3.73107C54.8806 3.48252 55.1602 3.48252 55.4398 3.79321C55.735 4.1039 56.0301 4.4146 56.3564 4.70976C56.7447 5.06706 56.7913 5.40882 56.4496 5.82826C56.0146 6.37197 55.6107 6.96229 55.1913 7.53708C54.5699 8.37595 54.4767 9.2925 54.8806 10.2556C55.0048 10.5663 55.1446 10.8615 55.2534 11.1722C55.6728 12.2441 56.4651 12.8033 57.5991 12.9587C58.2205 13.0364 58.8419 13.114 59.4633 13.2383C59.7274 13.2849 59.9604 13.4403 60.209 13.549C60.24 14.3568 60.24 15.1025 60.24 15.8481ZM45.7772 8.03419C42.08 8.03419 39.0662 11.0324 39.0662 14.6986C39.0662 18.4114 42.08 21.4406 45.7772 21.4406C49.4745 21.4406 52.4882 18.4114 52.4882 14.6986C52.4882 11.0169 49.4745 8.01865 45.7772 8.03419Z"
                fill="#3BBA9C"
              />
              <path
                d="M0.011651 19.0328C0.353415 19.0328 0.586435 19.0328 0.819456 19.0328C9.27034 19.0328 17.7212 19.0328 26.1721 19.0328C26.3741 19.0328 26.5605 19.0483 26.7624 19.0172C27.2906 18.9706 27.6634 18.5667 27.679 18.0541C27.6945 17.5414 27.3372 17.0909 26.8246 17.0132C26.6071 16.9822 26.3896 16.9977 26.1721 16.9977C17.7057 16.9977 9.23927 16.9977 0.757317 16.9977C0.524297 16.9977 0.291276 16.9977 0.011651 16.9977C0.011651 15.5374 0.011651 14.1238 0.011651 12.7257C0.011651 12.1353 -0.0349531 11.545 0.0582552 10.9702C0.33788 9.40123 1.62726 8.42255 3.38268 8.42255C13.4181 8.42255 23.4535 8.42255 33.5045 8.42255C33.6754 8.42255 33.8618 8.42255 34.0327 8.42255C34.5764 8.43808 34.9181 8.96626 34.7317 9.47891C34.7317 9.49444 34.7162 9.50998 34.7162 9.54105C34.1569 10.9547 34.1569 10.9392 32.6345 11.1256C32.153 11.1877 31.6559 11.2499 31.1898 11.3586C30.1179 11.6072 29.3567 12.5082 29.2946 13.6267C29.248 14.3568 29.248 15.0714 29.2946 15.8015C29.3567 16.9356 30.1335 17.8521 31.252 18.0851C31.9821 18.2405 32.7122 18.3492 33.4579 18.4424C33.955 18.5046 34.2035 18.7376 34.4521 19.1881C34.9181 20.0425 34.8094 20.7105 34.1414 21.3785C33.7841 21.7358 33.52 22.1863 33.2249 22.6057C32.4792 23.6932 32.5724 24.967 33.4734 25.9457C33.8462 26.3496 34.2346 26.738 34.6385 27.1108C35.5861 28.0274 36.9377 28.1361 38.0406 27.3904C38.662 26.971 39.2523 26.536 39.8426 26.07C40.1689 25.8214 40.4485 25.837 40.8213 25.9612C41.7068 26.2253 42.2039 26.7069 42.2039 27.7011C42.2039 28.2604 42.3437 28.8196 42.468 29.3789C42.7321 30.575 43.6021 31.3362 44.8138 31.4139C45.4818 31.4605 46.1497 31.4605 46.8177 31.4139C48.1227 31.3207 49.0392 30.4197 49.2411 29.0993C49.3499 28.3847 49.4276 27.6545 49.5984 26.9555C49.6606 26.7069 49.8936 26.4428 50.1111 26.2875C50.9189 25.7127 51.618 25.868 52.4258 26.4894C53.1404 27.0331 53.4045 27.5613 53.4045 28.4623C53.3734 35.919 53.3889 43.3601 53.3734 50.8168C53.3734 52.5722 52.4724 53.7684 50.9034 54.1257C50.6393 54.1878 50.3597 54.1878 50.08 54.1878C34.4987 54.1878 18.9019 54.1878 3.32054 54.1878C1.34764 54.1878 0.0582552 52.8829 0.0582552 50.8945C0.0582552 40.4862 0.0582552 30.0779 0.0582552 19.6541C0.011651 19.4833 0.011651 19.2968 0.011651 19.0328ZM15.3289 22.3106C12.9365 22.3106 10.5442 22.3106 8.15184 22.3106C6.22554 22.3106 4.92062 23.5689 4.90509 25.4952C4.88955 28.3536 4.88955 31.212 4.90509 34.0859C4.92062 35.9967 6.22553 37.2705 8.1363 37.2705C12.921 37.2705 17.7057 37.2705 22.4904 37.2705C24.4011 37.2705 25.7527 35.9501 25.7527 34.0238C25.7682 31.1964 25.7682 28.3847 25.7527 25.5573C25.7371 23.631 24.4011 22.3106 22.4904 22.3106C20.1136 22.3106 17.7212 22.3106 15.3289 22.3106ZM26.6537 42.2727C19.7563 42.2727 12.8433 42.2727 5.94591 42.2727C5.72842 42.2727 5.51094 42.2727 5.29345 42.2882C4.7342 42.3348 4.3769 42.6921 4.34584 43.2203C4.31477 43.7485 4.67206 44.2145 5.21578 44.3077C5.4022 44.3388 5.60415 44.3233 5.8061 44.3233C19.7097 44.3233 33.6132 44.3233 47.5168 44.3233C47.6877 44.3233 47.8741 44.3388 48.045 44.3077C48.6042 44.2301 48.9771 43.8106 48.9615 43.2669C48.9615 42.7077 48.5887 42.3348 47.9984 42.2882C47.7809 42.2727 47.5634 42.2727 47.3459 42.2727C40.4485 42.2727 33.5511 42.2727 26.6537 42.2727ZM26.6226 50.9411C33.5511 50.9411 40.464 50.9411 47.3925 50.9411C47.61 50.9411 47.8275 50.9411 48.045 50.9255C48.5576 50.8789 48.8839 50.5838 48.9615 50.0866C49.0392 49.5585 48.8062 49.1546 48.2935 48.9837C48.0605 48.906 47.7964 48.8905 47.5479 48.8905C33.6288 48.8905 19.7097 48.8905 5.79056 48.8905C5.61968 48.8905 5.43327 48.8749 5.26238 48.906C4.71867 48.9837 4.34584 49.4342 4.36137 49.9624C4.3769 50.5061 4.76527 50.8789 5.34006 50.9255C5.54201 50.9411 5.72842 50.9255 5.93038 50.9255C12.8278 50.9411 19.7252 50.9411 26.6226 50.9411ZM39.998 37.6433C42.5612 37.6433 45.14 37.6589 47.7032 37.6278C48.0605 37.6278 48.511 37.488 48.7285 37.2394C48.9149 37.0219 48.946 36.5404 48.8528 36.2141C48.7285 35.7481 48.2935 35.6083 47.8275 35.6083C45.4351 35.6083 43.0428 35.6083 40.6505 35.6083C37.8697 35.6083 35.089 35.6083 32.3083 35.6083C31.8423 35.6083 31.4539 35.7326 31.2209 36.152C30.817 36.8666 31.3452 37.6433 32.2462 37.6433C34.8249 37.6433 37.4192 37.6433 39.998 37.6433ZM5.88377 13.7354C6.27214 13.7354 6.66051 13.751 7.06441 13.7354C7.65473 13.7043 8.0431 13.2849 8.02756 12.7101C8.01203 12.1664 7.63919 11.747 7.06441 11.7314C6.30321 11.7004 5.54201 11.7159 4.78081 11.7314C4.22156 11.747 3.77105 12.2286 3.78659 12.7567C3.80212 13.2694 4.22156 13.7043 4.76527 13.7354C5.13811 13.751 5.51094 13.7354 5.88377 13.7354ZM15.7483 11.7159C15.3599 11.7159 14.9716 11.7004 14.5677 11.7159C14.0084 11.747 13.6356 12.1819 13.6356 12.7257C13.6356 13.2694 14.024 13.7043 14.5832 13.7199C15.3599 13.751 16.1522 13.751 16.929 13.7199C17.4571 13.7043 17.8921 13.2072 17.8766 12.7101C17.8766 12.1975 17.4416 11.747 16.9134 11.7159C16.525 11.7004 16.1367 11.7159 15.7483 11.7159ZM10.8859 11.7159C10.4976 11.7159 10.1092 11.7004 9.70531 11.7159C9.13053 11.747 8.69555 12.1975 8.71109 12.7412C8.71109 13.2694 9.11499 13.7199 9.67424 13.7354C10.451 13.7665 11.2432 13.7665 12.02 13.7354C12.5637 13.7199 12.9521 13.2538 12.9521 12.7257C12.9521 12.1975 12.5482 11.7625 11.9889 11.7314C11.6161 11.7004 11.2432 11.7159 10.8859 11.7159ZM32.6656 31.0411C32.6656 31.0256 32.6656 31.01 32.6656 31.01C32.8676 31.01 33.054 31.0256 33.2559 31.01C33.8462 30.9323 34.2502 30.4974 34.2502 29.9692C34.2346 29.4565 33.8618 29.0216 33.2715 28.975C32.8054 28.9439 32.3394 28.9594 31.8733 29.0216C31.3918 29.0837 31.1277 29.4565 31.0966 29.9226C31.0655 30.4197 31.2986 30.8081 31.7957 30.9479C32.0753 31.01 32.3705 31.01 32.6656 31.0411Z"
                fill="#2D90BF"
              />
              <path
                d="M45.777 19.3747C43.1982 19.3747 41.0855 17.2464 41.1165 14.6987C41.1476 12.1355 43.2293 10.0849 45.777 10.0849C48.3557 10.0849 50.4684 12.1976 50.4374 14.7608C50.4063 17.3241 48.3247 19.3747 45.777 19.3747Z"
                fill="#3BBA9C"
              />
              <g filter="url(#filter0_d_182_2)">
                <path
                  d="M15.2982 35.2199C12.9991 35.2199 10.7155 35.2199 8.41632 35.2199C7.26675 35.2199 6.95605 34.9092 6.95605 33.7596C6.95605 31.0721 6.95605 28.3846 6.95605 25.6971C6.95605 24.734 7.32889 24.3456 8.30757 24.3456C12.9991 24.3456 17.675 24.3456 22.3665 24.3456C23.3141 24.3456 23.6869 24.7184 23.6869 25.666C23.6869 28.4157 23.6869 31.1498 23.6869 33.8994C23.6869 34.847 23.3141 35.2043 22.351 35.2043C20.0052 35.2199 17.6595 35.2199 15.2982 35.2199Z"
                  fill="#3BBA9C"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_182_2"
                  x="2.95605"
                  y="24.3456"
                  width="24.7305"
                  height="18.8743"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_182_2"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_182_2"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="services__card__heading__nd__info">
            <div className="services__card__heading">
              Hire dedicated AI / <br /> Data professionals
            </div>
            <div className="services__card__info">
              Expand your delivery capacity with dedicated AI and Data
              professionals under your own management for short and long term
              projects, or just in case capacity is required...
            </div>
            <div className="services__card__info__two">
              Aigron offices are located worldwide from where our AI and Data
              professionals can support you.
              <button className="services__card__info__two__btn">
                Hire your professional
              </button>
            </div>
          </div>
        </div>
        <div className="services__card">
          <div className="services__card__svg">
            <svg
              width="57"
              height="41"
              viewBox="0 0 57 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M57.0001 33.4049C52.2473 33.4049 47.4946 33.4049 42.6977 33.4049C42.5543 28.3103 40.3158 24.3846 36.1475 21.4844C36.9525 19.698 38.1324 18.2424 39.7093 17.0955C41.2751 15.9487 43.0395 15.2871 44.9583 15.0224C40.5032 14.1733 38.1213 10.3799 38.5624 6.6968C39.0476 2.6167 42.3448 -0.107044 46.4911 0.00322905C50.0419 0.102475 53.2508 3.21217 53.5375 6.82912C53.8573 10.8431 51.1887 14.2395 46.9763 15.0003C47.263 15.0775 47.4063 15.1327 47.5497 15.1437C52.3135 15.7723 56.2171 19.6208 56.8788 24.3515C56.9008 24.4728 56.956 24.5941 56.9891 24.7154C57.0001 27.6156 57.0001 30.5158 57.0001 33.4049Z"
                fill="#4E84AD"
              />
              <path
                d="M39.3343 40.0649C32.0784 40.0649 24.8886 40.0649 17.6988 40.0649C17.6657 40.0098 17.6326 39.9877 17.6326 39.9546C17.6877 37.1757 17.5003 34.3638 17.8531 31.629C18.3825 27.6041 20.8195 24.8472 24.5688 23.3144C25.5281 22.9175 26.5868 22.752 27.502 22.5094C25.5392 22.2117 23.7858 21.2744 22.4956 19.5541C21.2055 17.8339 20.7313 15.8931 21.0841 13.7758C21.7127 10.1037 25.054 7.34691 28.6158 7.5013C32.4202 7.6667 35.5189 10.4676 35.96 14.0184C36.4231 17.7457 34.0633 21.8258 29.2884 22.5646C32.1776 22.8403 34.5926 23.9981 36.5334 26.1154C38.4191 28.1775 39.3233 30.6366 39.3674 33.4044C39.4005 35.5327 39.3784 37.672 39.3784 39.8113C39.3784 39.8885 39.3564 39.9546 39.3343 40.0649Z"
                fill="#70D2C7"
              />
              <path
                d="M11.8654 15.0332C16.0888 15.6286 19.0221 17.7679 20.8636 21.4731C16.7174 24.3623 14.4458 28.2659 14.3024 33.3716C9.54964 33.3716 4.80791 33.3716 0.0220593 33.3716C0.011032 33.1951 0 33.0187 0 32.8423C0 30.5596 0 28.2769 0 25.9943C0.0110273 20.4917 4.01394 15.9043 9.46142 15.1434C9.60478 15.1214 9.7371 15.0662 9.95765 15.0111C5.35926 14.14 3.06559 10.3135 3.48463 6.70756C3.93675 2.79287 7.14569 -0.00806516 11.0163 0.00296213C14.8207 0.0139894 17.9965 2.83698 18.4376 6.70756C18.8567 10.3576 16.5299 14.162 11.8654 15.0332Z"
                fill="#4E84AD"
              />
            </svg>
          </div>
          <div className="services__card__heading__nd__info">
            <div className="services__card__heading">
              Software <br /> Development
            </div>
            <div className="services__card__info">
              Expand your AI and Data development capabilities within your
              required scope by partnering with us.
            </div>
            <div className="services__card__info__two">
              Aigron has professionals and project managers with different
              expertise to take the process of AI and Data projects off your
              hands.
              <button className="services__card__info__two__btn">
                Get an inquiry
              </button>
            </div>
          </div>
        </div>
        <div className="services__card">
          <div className="services__card__svg">
            <svg
              width="52"
              height="53"
              viewBox="0 0 52 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.294 19.7674C15.294 24.2606 15.294 28.7094 15.294 33.2027C17.2663 33.2027 19.1941 33.2027 21.1664 33.2027C20.766 34.4038 20.3656 35.5605 19.9652 36.7765C18.7789 36.7765 17.5184 36.7765 16.1986 36.7765C16.1986 36.213 16.1986 35.6495 16.1986 35.0415C15.2792 35.0415 14.4339 35.0415 13.5293 35.0415C13.5293 23.3412 13.5293 11.6854 13.5293 0C21.8782 0 30.227 0 38.6204 0C38.6204 8.60096 38.6204 17.1871 38.6204 25.8325C38.042 25.6842 37.4933 25.5508 36.8853 25.4025C36.8853 23.5488 36.8853 21.6803 36.8853 19.7822C29.6487 19.7674 22.4862 19.7674 15.294 19.7674ZM29.6042 17.8989C29.9453 14.2509 28.8479 11.3444 25.4668 9.57969C27.7654 7.16252 27.0239 4.43394 25.5855 3.02516C23.9098 1.39395 21.2998 1.3198 19.5203 2.86204C17.5629 4.55258 17.5184 6.96974 19.4313 9.60935C16.0651 11.374 14.9677 14.2657 15.3088 17.9137C20.069 17.8989 24.8144 17.8989 29.6042 17.8989ZM36.7964 3.52936C36.7964 2.95102 36.7964 2.35785 36.7964 1.77951C35.0169 1.77951 33.2522 1.77951 31.4875 1.77951C31.4875 2.38751 31.4875 2.95102 31.4875 3.52936C33.267 3.52936 35.002 3.52936 36.7964 3.52936ZM31.4727 7.10321C33.267 7.10321 35.0317 7.10321 36.8112 7.10321C36.8112 6.51004 36.8112 5.9317 36.8112 5.36818C35.002 5.36818 33.2374 5.36818 31.4727 5.36818C31.4727 5.97618 31.4727 6.52487 31.4727 7.10321ZM36.8112 10.7067C36.8112 10.0839 36.8112 9.5352 36.8112 8.97169C35.0169 8.97169 33.2522 8.97169 31.4875 8.97169C31.4875 9.57969 31.4875 10.1432 31.4875 10.7067C33.2818 10.7067 35.0317 10.7067 36.8112 10.7067ZM31.4727 14.2954C33.2818 14.2954 35.0465 14.2954 36.7964 14.2954C36.7964 13.6874 36.7964 13.1239 36.7964 12.5604C35.002 12.5604 33.2522 12.5604 31.4727 12.5604C31.4727 13.1387 31.4727 13.7022 31.4727 14.2954ZM36.8112 16.1639C35.002 16.1639 33.2374 16.1639 31.4875 16.1639C31.4875 16.7719 31.4875 17.3354 31.4875 17.8989C33.2818 17.8989 35.0317 17.8989 36.8112 17.8989C36.8112 17.3205 36.8112 16.757 36.8112 16.1639Z"
                fill="#4D84AC"
              />
              <path
                d="M40.4595 5.59082C44.2855 6.40643 48.0966 7.20721 51.9522 8.03765C50.2172 16.2086 48.497 24.335 46.7471 32.5207C46.2578 31.8386 45.8574 31.2009 45.4125 30.6226C44.1668 29.021 42.6246 27.7457 40.8303 26.8115C40.5485 26.6632 40.415 26.5149 40.415 26.1738C40.4299 19.4562 40.4299 12.7385 40.4299 6.00604C40.4299 5.8874 40.4447 5.75394 40.4595 5.59082ZM41.1862 24.1274C42.9657 24.4981 44.6859 24.8688 46.4505 25.2396C46.5692 24.6464 46.6878 24.0829 46.8064 23.5045C45.0269 23.119 43.3216 22.7631 41.5866 22.3923C41.4383 22.9707 41.3196 23.5045 41.1862 24.1274ZM44.1817 10.0544C45.9612 10.4252 47.6665 10.7959 49.4312 11.1666C49.5647 10.5734 49.6685 10.0248 49.8019 9.43159C48.0224 9.06086 46.3171 8.69013 44.5524 8.3194C44.4338 8.91257 44.3151 9.44642 44.1817 10.0544ZM43.4254 13.5689C45.2197 13.9545 46.9399 14.3104 48.6898 14.6811C48.8084 14.0731 48.9122 13.5393 49.0308 12.9461C47.2661 12.5754 45.5608 12.2047 43.8109 11.8339C43.6923 12.4123 43.5737 12.9461 43.4254 13.5689ZM43.0546 15.3485C42.9212 15.9565 42.8174 16.52 42.6987 17.0835C44.4783 17.4542 46.1984 17.8249 47.9483 18.1957C48.0818 17.5728 48.1856 17.039 48.319 16.4607C46.5395 16.0899 44.8342 15.734 43.0546 15.3485ZM41.9424 20.598C43.722 20.9836 45.4273 21.3395 47.192 21.7102C47.3106 21.1022 47.4293 20.5535 47.5479 19.9752C45.7684 19.6044 44.063 19.2337 42.3132 18.863C42.1797 19.471 42.0759 20.0048 41.9424 20.598Z"
                fill="#4D84AC"
              />
              <path
                d="M21.5664 39.4754C21.5664 32.5205 27.2015 26.9002 34.1713 26.9151C41.1262 26.9151 46.7316 32.565 46.7168 39.5496C46.702 46.4897 41.0669 52.0951 34.0823 52.0803C27.1571 52.0655 21.5516 46.4303 21.5664 39.4754ZM34.1416 28.7094C28.2248 28.7094 23.3608 33.5734 23.3608 39.5051C23.3608 45.422 28.2396 50.3008 34.1416 50.2859C40.0585 50.2859 44.9225 45.4071 44.9225 39.4903C44.9225 33.5734 40.0585 28.7094 34.1416 28.7094Z"
                fill="#0ED1BB"
              />
              <path
                d="M17.0889 31.4081C17.0889 28.0864 17.0889 24.8388 17.0889 21.5615C23.0651 21.5615 29.0264 21.5615 35.0026 21.5615C35.0026 22.7479 35.0026 23.9194 35.0026 25.0612C33.9645 25.1502 32.9117 25.1799 31.8885 25.343C28.0625 25.9362 25.0077 27.8343 22.6647 30.8891C22.3532 31.2895 22.0567 31.4378 21.5673 31.4378C20.0992 31.3933 18.6311 31.4081 17.0889 31.4081Z"
                fill="#4D84AC"
              />
              <path
                d="M7.73106 34.9824C7.0934 34.9824 6.51506 34.9824 5.87741 34.9824C3.97926 26.0255 2.06629 17.0687 0.15332 8.03765C3.99409 7.22204 7.80521 6.40643 11.646 5.59082C11.646 6.42126 11.646 7.20721 11.646 8.00799C8.62082 7.74106 6.88579 8.5715 6.08502 10.7069C5.47702 12.3233 5.6698 14.6663 8.01282 16.2234C5.0618 18.6406 4.60209 21.7102 5.71428 25.2247C7.65691 24.8095 9.6292 24.3943 11.6311 23.9791C11.6311 24.6019 11.6311 25.1802 11.6311 25.8327C9.80715 26.2183 7.9535 26.6187 6.04053 27.0339C6.60404 29.6883 7.15272 32.3131 7.73106 34.9824Z"
                fill="#4D84AC"
              />
              <path
                d="M14.3451 36.8057C14.3451 38.6148 14.3451 40.3647 14.3451 42.159C14.1671 42.1738 14.0188 42.1887 13.8557 42.1887C10.1484 42.1887 6.44111 42.1887 2.74863 42.1887C1.33985 42.1887 0.16835 41.1951 0.0200574 39.8605C-0.143064 38.4517 0.702198 37.2209 2.06649 36.865C2.18512 36.8353 2.31859 36.8057 2.45205 36.8057C6.3818 36.8057 10.3264 36.8057 14.3451 36.8057Z"
                fill="#0ED1BB"
              />
              <path
                d="M11.6463 16.7275C11.6463 18.5219 11.6463 20.3014 11.6463 22.155C10.1337 22.4813 8.62116 22.8075 7.09375 23.1189C6.20399 19.9158 8.9474 16.7572 11.6463 16.7275Z"
                fill="#4D84AC"
              />
              <path
                d="M8.16113 28.4274C8.32425 28.3829 8.41323 28.3384 8.53186 28.3087C9.55508 28.1011 10.5783 27.8787 11.646 27.6562C11.646 30.1031 11.646 32.5054 11.646 34.9522C10.9935 34.9522 10.3114 34.9522 9.55507 34.9522C9.08054 32.802 8.62084 30.6369 8.16113 28.4274Z"
                fill="#4D84AC"
              />
              <path
                d="M11.6759 12.3676C11.6759 12.9608 11.6462 13.5688 11.6907 14.1619C11.7204 14.5623 11.5276 14.7255 11.2013 14.8589C9.83706 15.4224 8.20584 14.6513 7.70165 13.2129C7.19745 11.7596 8.0279 10.1581 9.496 9.74284C9.79258 9.65386 10.1188 9.60937 10.4302 9.63903C11.4831 9.71318 11.6611 9.93562 11.6611 10.9588C11.6759 11.4334 11.6759 11.8931 11.6759 12.3676Z"
                fill="#4D84AC"
              />
              <path
                d="M16.2139 38.6152C17.415 38.6152 18.5717 38.6152 19.7581 38.6152C19.7581 39.1936 19.7581 39.7719 19.7581 40.3651C18.5865 40.3651 17.415 40.3651 16.2139 40.3651C16.2139 39.8016 16.2139 39.2381 16.2139 38.6152Z"
                fill="#4D84AC"
              />
              <path
                d="M27.8691 16.1051C24.2359 16.1051 20.6769 16.1051 17.0586 16.1051C17.1327 14.1179 17.9632 12.5757 19.624 11.5673C21.5074 10.4106 23.4648 10.4255 25.3481 11.597C26.9793 12.6054 27.7653 14.1476 27.8691 16.1051Z"
                fill="#4D84AC"
              />
              <path
                d="M22.4419 8.94174C20.9293 8.94174 19.7578 7.74058 19.7578 6.22799C19.7578 4.73024 20.959 3.5439 22.4864 3.55873C23.9693 3.57356 25.1408 4.7599 25.1408 6.24282C25.1557 7.75541 23.9545 8.94174 22.4419 8.94174Z"
                fill="#4D84AC"
              />
              <path
                d="M34.127 48.4916C29.1592 48.4916 25.1553 44.4729 25.1553 39.4902C25.1553 34.5224 29.174 30.5186 34.1566 30.5186C39.1244 30.5186 43.1283 34.5373 43.1283 39.5199C43.1283 44.4877 39.1096 48.4916 34.127 48.4916ZM37.1521 44.028C37.4784 44.5174 37.7898 44.9771 38.1012 45.4516C40.8149 43.8649 42.0458 40.0834 40.8743 36.9693C39.7621 34.0034 36.7072 32.1794 34.1863 32.387C34.1863 32.9506 34.1863 33.5289 34.1863 34.0924C36.6924 34.2852 38.5461 35.5902 39.243 37.7552C40.0438 40.291 39.243 42.3523 37.1521 44.028ZM35.6989 44.725C35.1502 44.7991 34.6756 44.8733 34.1715 44.9474C34.1715 45.5109 34.1715 46.0744 34.1715 46.7417C34.8536 46.6379 35.5061 46.5341 36.2031 46.4155C36.0251 45.7927 35.862 45.2588 35.6989 44.725Z"
                fill="#0ED1BB"
              />
            </svg>
          </div>
          <div className="services__card__heading__nd__info">
            <div className="services__card__heading">Recruitment</div>
            <div className="services__card__info">
              Expand your development capabilities by hiring the right AI and
              Data candidate for your permanent openings.
            </div>
            <div className="services__card__info__two">
              With our Recruitment services we can find you the right candidate
              from our wide network of professionals.
              <button className="services__card__info__two__btn">
                Recruit now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
