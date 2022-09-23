import japan from "../../assets/images/japan.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  StyledCardDiv,
  StyledContentDiv,
  StyledH1,
  StyledHeaderContent,
  StyledImg,
  StyledLink,
  StyledMainDiv,
  StyledSpan,
  StyledSpanDate,
  StyledSpanText,
  StyledHr,
} from "./styles";

const Card = ({ data }) => {
  return (
    <StyledMainDiv>
      {data.map((item) => (
        <div>
          <StyledCardDiv key={item.location}>
            <StyledImg src={item.src}></StyledImg>
            <StyledContentDiv>
              <StyledHeaderContent>
                <LocationOnIcon style={{ color: "#F55A5A" }} />
                <StyledSpan>{item.title}</StyledSpan>
                <StyledLink href={item.googleMapsUrl}>
                  View on Google Maps
                </StyledLink>
              </StyledHeaderContent>
              <StyledH1>{item.location}</StyledH1>
              <StyledSpanDate>
                {item.startDate} - {item.endDate}
              </StyledSpanDate>
              <StyledSpanText>{item.description}</StyledSpanText>
            </StyledContentDiv>
          </StyledCardDiv>
          <StyledHr class="solid"></StyledHr>
        </div>
      ))}
    </StyledMainDiv>
  );
};

export default Card;
