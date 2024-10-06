import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{box-sizing:border-box}
body, button, dd, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, input, legend, li, ol, p, select, table, td, textarea, th, ul {margin:0;padding:0}
body, button, input, select, table, textarea {font-size:12px;line-height:16px;color:#202020;font-family:-apple-system, BlinkMacSystemFont, "Malgun Gothic", "맑은 고딕", helvetica, "Apple SD Gothic Neo", sans-serif}
h1, h2, h3, h4, h5, h6 {font-size:inherit;line-height:inherit}
textarea {-webkit-backface-visibility:hidden;backface-visibility:hidden;background-color:transparent;border:0;word-break:keep-all;word-wrap:break-word}
button, input {-webkit-border-radius:0;border-radius:0;border:0}
button {background-color:transparent}
fieldset, img {border:0}
img {vertical-align:top}
ol, ul {list-style:none}
address, em {font-style:normal}
a {display:flex;text-decoration:none;}
iframe {overflow:hidden;margin:0;border:0;padding:0;vertical-align:top}
mark {background-color:transparent}
i {font-style:normal}

#root {
	display: flex;
	flex-direction: column;
	overflow: hidden;

	min-height: 100vh;

}

// 폰트설정
@font-face {
    font-family:"Pretendard Variable";
    src: url("/src/assets/fonts/PretendardVariable.woff2");
}

@font-face {
    font-family:"Pretendard-Semibold";
    src: url("/src/assets/fonts/Pretendard-SemiBold.woff") format("woff2"),
		url("/src/assets/fonts/Pretendard-SemiBold.woff") format("woff"),
    url("/src/assets/fonts/Pretendard-SemiBold.woff") format("truetype");
}

@font-face {
    font-family:"Pretendard-Bold";
    src: url("/src/assets/fonts/Pretendard-Bold.woff") format("woff2"),
		url("/src/assets/fonts/Pretendard-Bold.woff") format("woff"),
    url("/src/assets/fonts/Pretendard-Bold.woff") format("truetype");
}

@font-face {
    font-family:"Pretendard-Medium";
    src: url("/src/assets/fonts/Pretendard-Medium.woff") format("woff2"),
		url("/src/assets/fonts/Pretendard-Medium.woff") format("woff"),
    url("/src/assets/fonts/Pretendard-Medium.woff") format("truetype");
}

// 초기 html 설정
html {
	background-color: ${({ theme }) => theme.colors.background.blueLight};
	display: flex;
	justify-content: center;
	align-items: center;

	-webkit-touch-callout: none;
    -webkit-tap-highlight-color:rgb(0 0 0 / 0%);
    scroll-behavior: smooth; 

	@media (max-width: 360px) {
		font-size:12px;
	}

}

body {
	width: 100%;
	max-width: 540px;
	/* min-height: 100vh; */
	overflow-x: hidden;
	background-color: ${({ theme }) => theme.colors.background.white};
	color: ${({ theme }) => theme.colors.font.black};
	
	scrollbar-width: none; 
	-ms-overflow-style: none;

	::-webkit-scrollbar {
    display: none;
}
}



`;

export default GlobalStyle;
