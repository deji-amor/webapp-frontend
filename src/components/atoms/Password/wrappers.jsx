import { styled } from "@mui/material";

export const LogoWrapper = styled("span")(({color, style}) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	position: "absolute",
	top: "25px",
	left: "50px",
	zIndex: "10",
	gap: "10px",

	style,

	span: {
		color: color ? color : "#000",
		textAlign: "center",
		fontFamily: "Inter",
		fontSize: "20px",
		fontStyle: "normal",
		fontWeight: "700",
		lineHeight: "136.023%",
	},
}));

export const ButtonWrapper = styled("div")(({ width, height, error, style }) => ({
	maxWidth: "100%",
	display: "flex",
	justifyContent: "center",
	position: 'relative',

	button: {
		background: "#2B2E72",
		width: width ? width : "100%",
		height: height ? height : "46px",
		color: "white",
		position: 'relative',
		zIndex: "10",
		textAlign: "center",
		borderRadius: "6px",
		fontWeight: "600",
		fontSize: "18px",
		letterSpacing: "1px",
		cursor: 'pointer',
		// cursor: error ? "not-allowed" : "pointer",
	},

	span: {
		position: 'absolute',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '10px',
		top: "0",
		left: '0',
		width: '100%',
		height: '100%',
	},

	".icon": {
		position: 'relative',
		zIndex: "200",
	},

	".icon.two": {
		top: '5px',
		left: '-10px',
		display: 'none'
	},

	"button:hover": {
		background: "#2B2E90",
	},
}));

export const DescriptionWrapper = styled("div")(
	({ mquery, size, color, align, width, padding }) => ({
		width: "100%",
		display: "flex",
		justifyContent: "center",

		p: {
			padding: padding ? "0 20px" : "",
			width: width,
			color: color ? color : "#282828",
			textAlign: align ? align : "center",
			fontSize: size ? size : "18px",
			fontStyle: "normal",
			fontWeight: "400",
			lineHeight: "162.023%",
		},
	})
);

export const IconWrapper = styled("div")(({ mquery, style, size, color, align, width }) => ({
	width: width ? width : "",
	color: "var(--text-heading-dark, #27272E)",
	textAlign: align ? align : "center",
	position: "relative",

	span: {
		position: "relative",
	},

	"span .icon": {
		style,
		fontSize: size,
		color: color ? color : "rgba(43, 46, 114, 0.72)",
	},
}));

export const InputWrapper = styled("div")(({ mquery, inputWidth, inputHeight, error, empty, value, confirm }) => ({
	width: "100%",
	position: "relative",

	input: {
		width: `${inputWidth ? inputWidth : '100%'}`,
		height: inputHeight ? inputHeight : "46px",
		borderRadius: "6px",
		background: "#EEE",
		padding: "15px",
		outline: empty && !value ? `0.1px solid ${(empty && !value) ? "#D73D3D" : "none"}`
				: empty && !confirm ? `0.1px solid ${(empty && !confirm) ? "#D73D3D" : "none"}` 
				:`0.1px solid ${(error || empty) ? "#D73D3D" : "none"}`,
		color: "#2B2E72",
		position: "relative",
	},

	"input:focus": {
		outline: ".1px solid #2B2E72",
	},
}));

export const ToolTipWrapper = styled("div")(({ error, color }) => ({
	width: "100%",
	display: "flex",
	gap: "5px",

	p: {
		width: "100%",
		flexShrink: "0",
		color: color ? color : "rgba(43, 46, 114, 0.72)",
		fontSize: "14px",
		fontStyle: "normal",
		fontWeight: "500",
		lineHeight: "2",
	},

	".icon": {
		width: "16px",
		position: "relative",
		top: "2px",
	},
}));

export const LabelWrapper = styled("div")(() => ({
	width: "100%",

	label: {
		color: "#4F4F4F",
		fontFamily: "Poppins",
		fontSize: "16px",
		fontStyle: "normal",
		fontWeight: "400",
		lineHeight: "normal",
		position: "relative",
		bottom: "5px",
	},
}));

export const TipNoteWrapper = styled("div")(() => ({
	width: "100%",

	p: {
		width: "425px",
		flexShrink: "0",
		color: "#828282",
		fontFamily: "Poppins",
		fontSize: "12px",
		fontStyle: "normal",
		fontWeight: "500",
		lineHeight: "2",
	},
}));

export const TitleWrapper = styled("div")(({ mquery, size, color, align, padding }) => ({
	width: "100%",
	padding: padding ? "0 30px" : "",

	h2: {
		color: color ? color : "#2B2E72",
		textAlign: align ? align : "center",
		fontFamily: "Poppins",
		fontSize: size ? size : "40px",
		fontStyle: "normal",
		fontWeight: "600",
		lineHeight: "136.023%",
	},
}));

export const ErrorCardWrapper = styled("div")(({ error, style, size, color }) => ({
	display: error ? "flex" : "none",
	width: "362px",
	padding: "12px 16px",
	justifyContent: "start",
	alignItems: "center",
	gap: "12px",
	borderRadius: "8px",
	position: "absolute",
	top: "20px",
	right: "20px",
	zIndex: "100",
	background: "rgba(238, 6, 6, 0.10)",
	transition: "all 3s ease",
	
	style,

	div: {
		display: "flex",
		flexDirection: "column",
	},
}));

export const InputButtonWrapper = styled("div")(({ width }) => ({
	width: width ? width : "100%;",
	display: "flex",
	flexDirection: "column",
	gap: "30px",
}));

export const HeaderContentWrapper = styled("div")(({ padding, align }) => ({
	width: "100%",
	align: align ? align : "center",
	padding: padding ? "0 30px" : "",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	gap: "30px",
}));

export const ForgotEmailWrapper = styled("form")(({ width }) => ({
	width: width ? width : "425px",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	gap: "40px",
}));

export const ForgotEmailPageWrapper = styled("div")(() => ({
	width: "100%",
	height: "100vh",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	position: "relative",
}));

export const CustomerBannerWrapper = styled("div")(() => ({
	width: "100%",
	height: "100%",
	position: "absolute",

	img: {
		width: "100%",
		height: "100%",
		position: "absolute",
		top: "0",
		objectFit: "cover",
	},

	div: {
		width: "100%",
		height: "100%",
		position: "absolute",
		top: "0",
		opacity: "0.7",
		background: "#2B2E72",
	},
}));

export const CustomerHeadingWrapper = styled("div")(() => ({
	width: "100%",
	height: "100%",
	position: "absolute",
	right: "20px",
	zIndex: "20",
	color: "white",
	textAlign: "left",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",

	div: {
		width: "80%",
		display: "flex",
		position: "relative",
		bottom: "30px",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		gap: "30px",
	},

	"div h1": {
		width: "80%",
		color: "#FFF",
		fontFamily: "Poppins",
		fontSize: "48px",
		fontStyle: "normal",
		fontWeight: "700",
		lineHeight: "normal",
	},

	"div p": {
		width: "80%",
	},
}));

export const CustomerpasswordWrapper = styled("div")(() => ({
	width: "100%",
	display: "flex",
	justifyContent: "space-between",
}));

export const CustomerEmailWrapper = styled("div")(() => ({
	width: "65%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
}));

export const CustomerBannerContainerWrapper = styled("div")(() => ({
	width: "35%",
	height: "100vh",
	position: "relative",
	paddingRight: "20px",

	".chat": {
		width: "70px",
		height: "70px",
		position: "absolute",
		left: "40px",
		bottom: "40px",
		zIndex: "30",
		cursor: "pointer",
		objectFit: "cover",
	},

	".chat:hover": {
		transform: "scale(1.1)",
	},
}));

export const ResetPasswordInputWrapper = styled("div")(() => ({
	display: "flex",
	flexDirection: "column",
	gap: "40px",

	".inputs": {
		display: "flex",
		flexDirection: "column",
		gap: "15px",
	},
}));

export const ResetPasswordWrapper = styled("div")(() => ({
	width: "568px",
	background: "white",
	borderRadius: "12px",
	display: "flex",
	flexDirection: "column",
	gap: "30px",
	padding: "40px 40px",
	position: "fixed",
	zIndex: "60",
	left: "50%",
	top: "50%",
	transform: "translate(-50%, -50%)",
}));

export const ResetPasswordPageWrapper = styled("div")(() => ({
	width: "100%",
	height: "100vh",
	background: "#828282",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
}));
