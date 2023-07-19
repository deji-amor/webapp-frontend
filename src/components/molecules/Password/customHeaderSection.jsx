import PropTypes from "prop-types";
import { HeaderContentWrapper } from "../../atoms/Password/wrappers";
import Icon from "../../atoms/Password/customIcon";
import Title from "../../atoms/Password/customTitle";
import Description from "../../atoms/Password/customDescription";

const HeaderContent = ({
	title,
	titleSize,
	desWidth,
	titleColor,
	iconColor,
	iconSize,
	description,
	icon,
	size,
	align,
	color,
	width,
	style,
	padding,
}) => {
	return (
		<HeaderContentWrapper padding={padding} align={align}>
			<Icon
				icon={icon}
				iconSize={iconSize}
				iconColor={iconColor || "#2B2E72"}
				style={style}
				align={align}
				width={width}
			/>
			<div>
				<Title title={title} titleSize={titleSize} align={align} padding={padding} />
				<Description
					description={description}
					size={size ? size : "18px"}
					align={align}
					desWidth={desWidth}
					color={color}
					padding={padding}
				/>
			</div>
		</HeaderContentWrapper>
	);
};

HeaderContent.propTypes = {
	width: PropTypes.string,
	iconColor: PropTypes.string,
	icon: PropTypes.element,
	title: PropTypes.string,
	titleSize: PropTypes.string,
	iconSize: PropTypes.string,
	color: PropTypes.string,
	align: PropTypes.string,
	size: PropTypes.string,
	titleColor: PropTypes.string,
	desWidth: PropTypes.string,
	description: PropTypes.string,
	style: PropTypes.object,
	padding: PropTypes.bool,
};

export default HeaderContent;
