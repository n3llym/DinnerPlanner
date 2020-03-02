import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const MealCardContainer = styled.div`
  border: 2px solid red;
  display: flex;
  flex: direction: column;
  height: 200px;
  width: 150px;
  background-color: white;
  padding: 10px;
  border-radius: 4px;
  justify-content: center;
`;

const ImageContainer = styled.div`
  border: 2px solid blue;
  width: 100px;
  height: 100px;
`;

const Header = styled.div``;

export default function MealCard(props) {
  // const { title, description } = props.data;
  const { changeView } = props;

  return (
    <MealCardContainer onClick={evt => changeView()}>
      <ImageContainer></ImageContainer>
    </MealCardContainer>
  );
}

MealCard.propTypes = {
  data: PropTypes.object,
  changeView: PropTypes.function
};
