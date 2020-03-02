import React, { useState, useEffect } from "react";
import { Image, Text } from "react-native";
import { Button } from "react-native";
import Styles from "../components/Styles";
import styled from "styled-components";
import { AsyncStorage } from "react-native";
import MealCardAdd from "../components/MealCardAdd";
import MealCard from "../components/MealCard";

const BodyContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const EditButtonContainer = styled.div`
  width: 200px;
  button {
    border-radius: 5px;
  }
`;

export default function HomeScreen() {
  const [editMode, setEditMode] = useState(false);
  const [viewMode, setViewMode] = useState(false);
  const [localCount, setLocalCount] = useState(0);

  const changeView = () => {
    setEditMode(!editMode);
  };

  return (
    <BodyContainer>
      {!editMode ? (
        <EditButtonContainer>
          <Button title="Add" onPress={setEditMode} localCount={localCount} />
          <Button title="View" onPress={setViewMode} />
        </EditButtonContainer>
      ) : (
        <MealCardAdd changeView={changeView} localCount={localCount} />
      )}
    </BodyContainer>
  );
}
