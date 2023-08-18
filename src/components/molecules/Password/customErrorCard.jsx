import PropTypes from "prop-types";
import { ErrorCardWrapper } from "../../atoms/Password/wrappers";
import Title from "../../atoms/Password/customTitle";
import Description from "../../atoms/Password/customDescription";
import ErrorIcon from "@mui/icons-material/Error";
import Icon from "../../atoms/Password/customIcon";

const ErrorCard = ({ title, error, titleSize, size, titleColor, backgroundColor, color, icon, iconColor, description, align, style }) => {
	return (
		<ErrorCardWrapper error={error} style={style} bcolor={backgroundColor}>
			<Icon icon={icon || <ErrorIcon className="icon" />} iconSize="24px" iconColor={iconColor || "#D73D3D"} />
			<div>
				<Title title={title} titleSize={titleSize} titleColor={titleColor} align={align} />
				<Description description={description} size={size} color={color} align={align} />
			</div>
		</ErrorCardWrapper>
	);
};

ErrorCard.propTypes = {
	error: PropTypes.bool,
	title: PropTypes.string,
	titleSize: PropTypes.string,
	icon: PropTypes.string,
	titleColor: PropTypes.string,
	backgroundColor: PropTypes.string,
	iconColor: PropTypes.string,
	color: PropTypes.string,
	style: PropTypes.object,
	size: PropTypes.string,
	align: PropTypes.string,
	description: PropTypes.string,
};

export default ErrorCard;
