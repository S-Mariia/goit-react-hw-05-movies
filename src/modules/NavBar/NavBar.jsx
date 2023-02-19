import { StyledLink, Navigation, Section } from "./NavBar.styled";

const NavBar = () => {
    return (
        <Section>
        <Navigation>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
        </Navigation>
        </Section>
    )
}

export default NavBar;