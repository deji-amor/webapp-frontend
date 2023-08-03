import { styled } from "@mui/material";
import CustomLink from "../../atoms/landing/customlink";
import { solutions, services } from "../../atoms/landing/dropdownObjects";

const LinkWrapper = styled("ul")(() => ({
    width: '600px',
    display: 'flex',
    alignItems: 'center',
    gap: '40px'
}));

const Links = () => {
  return (
    <LinkWrapper>
        <CustomLink text="Home" link="/" />
        <CustomLink text="Products" name="services" link="services" type="dropdown" dropDownValues={services} />
        <CustomLink text="Solutions" name="solutions" link="solutions" type="dropdown" dropDownValues={solutions} />
        <CustomLink text="Pricing" link="pricing" />
        <CustomLink text="Contact" link="contact" />
    </LinkWrapper>
  )
}

export default Links