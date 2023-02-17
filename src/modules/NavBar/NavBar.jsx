import { StyledLink, List, Item } from "./NavBar.styled";

const NavBar = () => {
    return (
        <List>
            <Item><StyledLink to="/">Home</StyledLink></Item>
            <Item><StyledLink to="/movies">Movies</StyledLink></Item>
        </List>
    )
}

export default NavBar;