import * as React from 'react';

const SVG_ICONS = {
	PASSWORD: {
		SHOW: (
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		),
		HIDE: (
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M2 2L22 22" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		)
	},
	SUCCESS_SPLASH: {
		PASSWORD_RESET: (
			<svg width="220" height="166" viewBox="0 0 220 166" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect width="220" height="165" transform="translate(0 0.5)" fill="white" />
				<g clipPath="url(#clip0_7783_4076)">
					<path d="M89.6312 36.4729H88.8687V15.5878C88.8687 14.0004 88.5561 12.4285 87.9485 10.962C87.341 9.49543 86.4506 8.16289 85.328 7.04043C84.2055 5.91798 82.8728 5.0276 81.4062 4.42013C79.9395 3.81266 78.3675 3.5 76.78 3.5H32.5282C29.3221 3.49999 26.2473 4.77352 23.9802 7.04041C21.7131 9.3073 20.4395 12.3819 20.4395 15.5877V130.165C20.4395 131.753 20.7521 133.325 21.3597 134.791C21.9672 136.258 22.8576 137.59 23.9802 138.713C25.1027 139.835 26.4354 140.726 27.902 141.333C29.3687 141.941 30.9407 142.253 32.5282 142.253H76.7799C79.9861 142.253 83.0609 140.98 85.328 138.713C87.5951 136.446 88.8687 133.371 88.8687 130.165V51.3394H89.6312V36.4729Z" fill="#3F3D56" />
					<path d="M77.268 6.64453H71.4917C71.7573 7.29574 71.8587 8.00227 71.7869 8.70189C71.7152 9.40151 71.4724 10.0727 71.0801 10.6565C70.6878 11.2402 70.1579 11.7185 69.5372 12.0492C68.9165 12.3799 68.2239 12.5529 67.5206 12.553H42.1693C41.466 12.5529 40.7734 12.3799 40.1527 12.0492C39.532 11.7185 39.0021 11.2402 38.6098 10.6565C38.2175 10.0727 37.9747 9.40151 37.903 8.70189C37.8312 8.00227 37.9326 7.29574 38.1982 6.64453H32.8032C31.6176 6.64453 30.4437 6.87802 29.3484 7.33167C28.2531 7.78532 27.2579 8.45024 26.4196 9.28848C25.5813 10.1267 24.9163 11.1218 24.4626 12.217C24.0089 13.3123 23.7754 14.4861 23.7754 15.6715V130.081C23.7754 131.267 24.0089 132.44 24.4626 133.536C24.9163 134.631 25.5813 135.626 26.4196 136.464C27.2579 137.302 28.2531 137.967 29.3484 138.421C30.4437 138.875 31.6176 139.108 32.8031 139.108H77.268C78.4535 139.108 79.6275 138.875 80.7228 138.421C81.8181 137.967 82.8133 137.302 83.6516 136.464C84.4899 135.626 85.1549 134.631 85.6086 133.536C86.0622 132.44 86.2958 131.267 86.2958 130.081V15.6715C86.2958 14.4861 86.0622 13.3123 85.6086 12.217C85.1549 11.1218 84.4899 10.1267 83.6516 9.28848C82.8133 8.45024 81.8181 7.78532 80.7228 7.33167C79.6275 6.87802 78.4535 6.64453 77.268 6.64453Z" fill="white" />
					<path d="M103.815 142.273H6.25606C6.18815 142.273 6.12302 142.246 6.075 142.198C6.02698 142.15 6 142.085 6 142.017C6 141.949 6.02698 141.884 6.075 141.836C6.12302 141.788 6.18815 141.761 6.25606 141.761H103.815C103.883 141.761 103.948 141.788 103.996 141.836C104.044 141.884 104.071 141.949 104.071 142.017C104.071 142.085 104.044 142.15 103.996 142.198C103.948 142.246 103.883 142.273 103.815 142.273Z" fill="#CBCBCB" />
					<path d="M183.768 144.398C184.031 143.972 184.34 143.578 184.691 143.221C184.835 143.071 184.988 142.93 185.145 142.792C186.101 141.942 187.267 141.361 188.522 141.109C189.777 140.858 191.076 140.946 192.286 141.363C193.496 141.781 194.573 142.513 195.406 143.484C196.239 144.456 196.799 145.632 197.027 146.891C198.083 142.986 195.334 139.139 192.57 136.185C189.805 133.231 186.644 129.991 186.66 125.943C186.667 123.691 187.769 121.682 189.433 120.193C189.484 120.148 189.535 120.103 189.588 120.059C191.598 118.336 194.185 117.434 196.831 117.535C201.747 117.798 206.04 121.102 209.021 125.021C213.819 131.326 215.922 140.178 212.562 147.355C209.608 153.668 203.306 157.417 196.875 160.431C195.977 160.852 195.081 161.26 194.186 161.656C194.18 161.657 194.174 161.662 194.168 161.663C194.125 161.682 194.082 161.701 194.041 161.72C193.857 161.802 193.672 161.883 193.489 161.964L193.574 162.019L193.838 162.19C193.747 162.135 193.656 162.081 193.564 162.025C193.537 162.009 193.508 161.993 193.481 161.976C190.322 160.081 187.12 158.076 184.937 155.117C182.674 152.045 181.764 147.645 183.768 144.398Z" fill="#F1F1F1" />
					<path d="M204.842 137.263C205.542 138.854 206.006 140.539 206.219 142.264C206.387 143.802 206.324 145.356 206.032 146.876C205.405 149.998 204.037 152.924 202.043 155.408C200.539 157.293 198.803 158.981 196.875 160.431C195.977 160.852 195.081 161.26 194.187 161.656C194.181 161.657 194.174 161.662 194.168 161.663C194.125 161.682 194.082 161.701 194.042 161.72C193.857 161.802 193.673 161.883 193.49 161.964L193.574 162.019L193.839 162.19C193.747 162.135 193.656 162.081 193.565 162.025C193.537 162.009 193.509 161.993 193.481 161.976C194.177 159.545 194.279 156.982 193.779 154.503C193.28 152.024 192.194 149.701 190.612 147.728C189.021 145.78 186.992 144.236 184.691 143.221C184.836 143.071 184.988 142.93 185.146 142.792C186.032 143.199 186.881 143.684 187.681 144.24C190.546 146.22 192.697 149.07 193.816 152.367C194.815 155.358 194.94 158.573 194.176 161.633C194.335 161.529 194.494 161.423 194.648 161.317C197.591 159.333 200.303 156.949 202.346 154.027C204.108 151.557 205.235 148.692 205.629 145.684C206.02 142.398 205.198 139.167 203.731 136.235C202.111 133.098 200.069 130.198 197.663 127.614C195.247 124.959 192.514 122.61 189.527 120.619C189.46 120.573 189.412 120.504 189.395 120.424C189.377 120.345 189.391 120.262 189.433 120.193C189.465 120.13 189.521 120.081 189.588 120.059C189.622 120.05 189.658 120.049 189.693 120.056C189.727 120.063 189.76 120.078 189.788 120.099C190.157 120.346 190.522 120.594 190.883 120.849C193.892 122.979 196.624 125.475 199.017 128.279C201.33 130.981 203.434 133.984 204.842 137.263Z" fill="white" />
					<path d="M140.442 13.5391C142.978 13.5391 145.034 11.4833 145.034 8.94728C145.034 6.41129 142.978 4.35547 140.442 4.35547C137.906 4.35547 135.85 6.41129 135.85 8.94728C135.85 11.4833 137.906 13.5391 140.442 13.5391Z" fill="#F1F1F1" />
					<path d="M197.544 74.9887C199.09 74.9887 200.344 73.7353 200.344 72.1892C200.344 70.643 199.09 69.3896 197.544 69.3896C195.998 69.3896 194.744 70.643 194.744 72.1892C194.744 73.7353 195.998 74.9887 197.544 74.9887Z" fill="#F1F1F1" />
					<path d="M115.604 82.6694C117.151 82.6694 118.404 81.416 118.404 79.8699C118.404 78.3237 117.151 77.0703 115.604 77.0703C114.058 77.0703 112.805 78.3237 112.805 79.8699C112.805 81.416 114.058 82.6694 115.604 82.6694Z" fill="#F1F1F1" />
					<path d="M117.186 162.5H214.745C214.812 162.5 214.878 162.473 214.926 162.425C214.974 162.377 215.001 162.312 215.001 162.244C215.001 162.176 214.974 162.111 214.926 162.063C214.878 162.015 214.812 161.988 214.745 161.988H117.186C117.118 161.988 117.053 162.015 117.005 162.063C116.957 162.111 116.93 162.176 116.93 162.244C116.93 162.312 116.957 162.377 117.005 162.425C117.053 162.473 117.118 162.5 117.186 162.5Z" fill="#CBCBCB" />
					<path d="M203.977 28.2425C204.105 27.3331 203.895 26.4083 203.387 25.6433C202.878 24.8783 202.107 24.3264 201.219 24.092C200.331 23.8576 199.388 23.9571 198.568 24.3716C197.749 24.7862 197.11 25.4869 196.772 26.3411L188.855 35.4162L191.178 41.9034L199.14 31.2995C199.66 31.4659 200.209 31.5164 200.75 31.4474C201.292 31.3784 201.811 31.1916 202.272 30.9001C202.733 30.6087 203.125 30.2196 203.419 29.7605C203.714 29.3013 203.904 28.7831 203.977 28.2425Z" fill="#FFB7B7" />
					<path d="M171.162 63.5536L197.441 35.5099L193.896 29.875L160.936 57.7484L171.162 63.5536Z" fill="#058B94" />
					<path d="M165.296 46.5149C170.387 46.5149 174.514 42.3881 174.514 37.2975C174.514 32.2068 170.387 28.0801 165.296 28.0801C160.205 28.0801 156.078 32.2068 156.078 37.2975C156.078 42.3881 160.205 46.5149 165.296 46.5149Z" fill="#2F2E41" />
					<path d="M166.039 32.0907C168.023 30.0794 170.423 28.5273 173.071 27.5437C174.771 26.914 176.621 26.5249 178.399 26.8825C180.176 27.2401 181.856 28.4695 182.352 30.213C182.758 31.6387 182.339 33.1738 181.71 34.5159C181.081 35.858 180.241 37.1025 179.732 38.4947C179.213 39.9152 179.057 41.4429 179.278 42.939C179.499 44.4352 180.09 45.8524 180.998 47.0621C181.906 48.2718 183.101 49.2356 184.476 49.8661C185.851 50.4966 187.361 50.7738 188.87 50.6725C187.124 50.9066 185.515 51.7271 183.808 52.1638C182.101 52.6006 180.087 52.571 178.818 51.3483C177.476 50.0547 177.449 47.9514 177.514 46.0886C177.611 43.3196 177.707 40.5505 177.804 37.7815C177.853 36.3693 177.895 34.9119 177.386 33.5938C176.876 32.2758 175.666 31.1216 174.253 31.1336C173.182 31.1427 172.234 31.7914 171.375 32.4312C170.516 33.071 169.607 33.7536 168.54 33.8487C167.473 33.9439 166.255 33.1545 166.335 32.0866L166.039 32.0907Z" fill="#2F2E41" />
					<path d="M130.285 99.1875C129.4 99.4334 128.456 99.346 127.631 98.9421C126.806 98.5382 126.158 97.8458 125.81 96.996C125.461 96.1463 125.437 95.1983 125.741 94.3316C126.045 93.4649 126.656 92.7398 127.459 92.2937L135.422 83.2598L142.158 84.7149L132.684 93.9932C132.917 94.4865 133.039 95.0248 133.041 95.5703C133.044 96.1158 132.926 96.6552 132.698 97.1504C132.469 97.6456 132.134 98.0847 131.718 98.4367C131.301 98.7886 130.812 99.0449 130.285 99.1875H130.285Z" fill="#FFB7B7" />
					<path d="M156.485 66.8449L136.636 91.7574L130.586 88.9799L153.916 52.6621L156.485 66.8449Z" fill="#058B94" />
					<path d="M140.648 142.071L135.918 141.997L136.487 158.119H140.648L140.648 142.071Z" fill="#FFB7B7" />
					<path d="M141.709 156.76L133.515 156.76H133.515C132.13 156.76 130.802 157.31 129.823 158.289C128.843 159.268 128.293 160.596 128.293 161.981V162.151L141.709 162.151L141.709 156.76Z" fill="#2F2E41" />
					<path d="M171.968 137.795L166.801 141.112L177.137 153.547L180.639 151.299L171.968 137.795Z" fill="#FFB7B7" />
					<path d="M180.798 149.582L173.903 154.009L173.902 154.009C172.737 154.757 171.917 155.937 171.622 157.291C171.327 158.644 171.581 160.058 172.33 161.224L172.421 161.366L183.711 154.119L180.798 149.582Z" fill="#2F2E41" />
					<path d="M173.811 88.5665C173.811 88.5665 162.329 50.4354 158.639 49.9201C154.949 49.4048 149.004 59.7041 149.004 59.7041C141.296 69.5381 133.348 101.393 133.348 101.393C133.348 101.393 146.598 102.222 156.284 107.374C165.97 112.527 177.4 107.114 177.4 107.114L173.811 88.5665Z" fill="#023C40" />
					<path opacity="0.1" d="M173.811 88.5663C173.811 88.5663 162.329 50.4352 158.639 49.9199C154.949 49.4046 150.514 59.8084 150.514 59.8084C146.673 75.6828 133.348 101.392 133.348 101.392C133.348 101.392 146.598 102.221 156.284 107.374C165.97 112.527 177.4 107.113 177.4 107.113L173.811 88.5663Z" fill="#058B94" />
					<path d="M164.389 77.1582V96.3188L166.644 124.074L177.911 145.07L172.534 148.91L157.17 128.939L151.094 109.109L141.551 153.007L134.381 152.495L139.36 91.6315L148.809 74.5L164.389 77.1582Z" fill="#035D63" />
					<path d="M152.814 58.6252C149.229 62.2098 152.558 66.0504 152.558 66.0504L148.461 75.2677L164.593 79.6204L170.23 54.4318L166.389 50.3351C158.707 50.0791 158.703 49.9199 158.703 49.9199C157.357 51.2369 152.814 58.6252 152.814 58.6252Z" fill="#06B9C6" />
					<path d="M170.88 51.8219C170.147 51.2811 169.315 50.8911 168.43 50.6744C167.546 50.4576 166.627 50.4185 165.727 50.5594C164.828 50.7002 163.965 51.0181 163.189 51.4947C162.413 51.9713 161.739 52.5971 161.207 53.3359C157.151 58.9821 153.402 68.0994 158.568 79.4702C166.864 97.7282 174.084 107.075 177.019 107.074C177.147 107.075 177.274 107.055 177.396 107.015C179.202 106.402 181.814 103.345 182.287 100.651C182.457 99.6873 182.416 98.3443 181.263 97.4222C177.951 94.7731 172.005 86.5248 170.15 75.6681C169.125 69.6692 171.113 64.2048 172.961 60.6771C173.741 59.2175 173.97 57.5254 173.604 55.911C173.238 54.2967 172.303 52.8682 170.969 51.8875V51.8875L170.88 51.8219Z" fill="#058B94" />
					<path d="M165.772 45.6097C169.061 43.8122 170.269 39.6896 168.472 36.4016C166.674 33.1135 162.551 31.9051 159.263 33.7025C155.974 35.4999 154.766 39.6225 156.563 42.9106C158.361 46.1987 162.484 47.4071 165.772 45.6097Z" fill="#FFB7B7" />
					<path d="M152.973 39.1424H162.771L162.871 37.7358L163.374 39.1424H164.883L165.082 36.3545L166.077 39.1424H168.997V39.0043C168.994 37.0634 168.222 35.2026 166.85 33.8302C165.477 32.4578 163.616 31.6858 161.675 31.6836H160.294C158.353 31.6858 156.492 32.4578 155.119 33.8302C153.747 35.2026 152.975 37.0634 152.973 39.0043V39.1424Z" fill="#2F2E41" />
					<path d="M167.517 44.1985L171.699 42.8418V32.6885H163.801L163.996 32.8837C166.717 35.6005 169.743 45.2394 167.517 44.1985Z" fill="#2F2E41" />
					<path d="M54.6654 94.1667C66.4474 94.1667 75.9987 84.6154 75.9987 72.8333C75.9987 61.0513 66.4474 51.5 54.6654 51.5C42.8833 51.5 33.332 61.0513 33.332 72.8333C33.332 84.6154 42.8833 94.1667 54.6654 94.1667Z" fill="#058B94" />
					<path d="M51.207 80.166L45.668 73.3215L48.8891 70.9138L51.5119 74.1546L60.3718 65.166L63.3346 67.8638L51.207 80.166Z" fill="white" />
				</g>
				<defs>
					<clipPath id="clip0_7783_4076">
						<rect width="209" height="159" fill="white" transform="translate(6 3.5)" />
					</clipPath>
				</defs>
			</svg>
		)
	}
};
export default SVG_ICONS;