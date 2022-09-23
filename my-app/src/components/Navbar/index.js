import worldwide from "../../assets/icons/worldwide.png";
import { StyledDiv, StyledNavbar, StyledSpan } from "./styles";

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledDiv>
        <img src={worldwide} alt="World"></img>
        <StyledSpan>my travel journal.</StyledSpan>
      </StyledDiv>
    </StyledNavbar>
  );
};

export default Navbar;
