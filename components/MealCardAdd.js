import React, { useState, useEffect } from "react";
import { TextInput, Button } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";
import { AsyncStorage } from "react-native";
import { setProvidesAudioData } from "expo/build/AR";

const MealCardContainer = styled.div`
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  height: 75vh;
  width: 100vw;
  background-color: white;
  padding: 25px;
  border-radius: 4px;
  justify-content: space-between;
  align-items: center;
`;

const ImageContainer = styled.div`
  height: 300px;
  width: 300px;
  border: 2px solid purple;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  contain: content;
  border: 2px solid green;
  width: 300px;
  input {
    margin-top: 8px;
    border: 2px solid pink;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  border: 2px solid blue;
`;

export default function MealCardAdd(props) {
  const { changeView, localCount } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState("");
  const [data, setData] = useState({});

  const saveData = () => {
    setData({
      title: title,
      description: description,
      notes: notes
    });
    changeView();
  };

  useEffect(() => {
    AsyncStorage.setItem("title", JSON.stringify(data));
  }, [data]);

  return (
    <>
      <MealCardContainer>
        <ImageContainer />
        <FormContainer>
          <TextInput
            placeholder="Title"
            onChangeText={setTitle}
            autoFocus={true}
          />
          <TextInput placeholder="Description" onChangeText={setDescription} />
          <TextInput
            placeholder="Notes"
            onChangeText={setNotes}
            numberOfLines={4}
            value={notes}
          />
        </FormContainer>
        <ButtonContainer>
          <Button title="Save" onPress={saveData} />
        </ButtonContainer>
      </MealCardContainer>
    </>
  );
}

MealCardAdd.propTypes = {
  changeView: PropTypes.function,
  localCount: PropTypes.number
};
