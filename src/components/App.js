import React, { useState } from "react";

function App() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [relationship, setRelationship] = useState("");

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    name === "name1" ? setName1(value) : setName2(value);
  };

  const calculateRelationship = () => {
    // Remove common letters
    const name1Set = new Set(name1);
    const name2Set = new Set(name2);
    const uniqueLetters1 = [...name1].filter((char) => !name2Set.has(char));
    const uniqueLetters2 = [...name2].filter((char) => !name1Set.has(char));

    // Calculate sum of lengths and take modulus by 6
    const sumOfLengths = uniqueLetters1.length + uniqueLetters2.length;
    const relationshipIndex = sumOfLengths % 6;

    // Determine relationship based on index
    const relationships = [
      "Siblings",
      "Friends",
      "Love",
      "Affection",
      "Marriage",
      "Enemy",
    ];
    const relationshipText = relationships[relationshipIndex];

    setRelationship(relationshipText);
  };

  const clearInputs = () => {
    setName1("");
    setName2("");
    setRelationship("");
  };

  return (
    <div className="App">
      <NameInput name={name1} onChange={handleNameChange} dataTestId="input1" />
      <NameInput name={name2} onChange={handleNameChange} dataTestId="input2" />
      <RelationshipCalculator
        onClick={calculateRelationship}
        dataTestId="calculate_relationship"
      />
      <ClearButton onClick={clearInputs} dataTestId="clear" />
      {relationship && <h3 data-testid="answer">{relationship}</h3>}
    </div>
  );
}

function NameInput({ name, onChange, dataTestId }) {
  return (
    <input
      type="text"
      value={name}
      onChange={onChange}
      data-testid={dataTestId}
    />
  );
}

function RelationshipCalculator({ onClick, dataTestId }) {
  return (
    <button onClick={onClick} data-testid={dataTestId}>
      Calculate Relationship
    </button>
  );
}

function ClearButton({ onClick, dataTestId }) {
  return (
    <button onClick={onClick} data-testid={dataTestId}>
      Clear
    </button>
  );
}

export default App;
