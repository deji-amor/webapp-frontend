import { styled, useMediaQuery } from "@mui/material";
import CustomLink from "../../atoms/landing/customlink";
import PropTypes from "prop-types";
// import { solutions, services } from "../../atoms/landing/dropdownObjects";

const LinkWrapper = styled("ul")(({matches, style}) => ({
    maxWidth: '600px',
    display: 'flex',
    alignItems: 'center',
    gap: matches ? '20px' : '40px',

    style
}));

const Links = ({style}) => {
  const matches = useMediaQuery('(max-width:1200px)');

  return (
    <LinkWrapper matches={matches} style={style}>
        {/* <CustomLink text="Home" link="/" /> */}
        {/* <CustomLink text="Products" name="services" link="services" type="dropdown" dropDownValues={services} /> */}
        {/* <CustomLink text="Solutions" name="solutions" link="solutions" type="dropdown" dropDownValues={solutions} /> */}
        <CustomLink text="About" link="about" />
        <CustomLink text="Pricing" link="pricing" />
        <CustomLink text="Contact" link="contact" />
    </LinkWrapper>
  )
}

Links.propTypes = {
  style: PropTypes.object
}

export default Links