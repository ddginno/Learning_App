import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const sizes = {
  S: "18px",
  M: "20px",
  L: "24px"
};

function getSize(size) {
  return sizes[size];
}

const StyledHeadline = styled.h1`
  margin: 0 font-size ${props => getSize(props.size)};
`;

function Headline({ size, ...props }) {
  return <StyledHeadline size={size} {...props} />;
}

Headline.propTypes = {
  size: PropTypes.oneOf(["S", "M", "L"])
};

Headline.defaultProps = {
  size: "M"
};
export default Headline;
