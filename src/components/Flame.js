import React, { useState } from "react";

const Flames = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [relationship, setRelationship] = useState("");
  const [error, setError] = useState("");

  const calculateRelationship = () => {
    if (!name1 || !name2) {
      setError("Please enter both names");
      return;
    }

    const name1Chars = name1.toLowerCase().split("");
    const name2Chars = name2.toLowerCase().split("");

    // Remove common letters from both names
    const filteredName1 = name1Chars.filter(
      (char) => !name2Chars.includes(char)
    );
    const filteredName2 = name2Chars.filter(
      (char) => !name1Chars.includes(char)
    );

    const totalLength = filteredName1.length + filteredName2.length;
    const relationshipStatus = totalLength % 6;

    // Determine relationship status
    switch (relationshipStatus) {
      case 1:
        setRelationship("Friends");
        break;
      case 2:
        setRelationship("Love");
        break;
      case 3:
        setRelationship("Affection");
        break;
      case 4:
        setRelationship("Marriage");
        break;
      case 5:
        setRelationship("Enemy");
        break;
      case 0:
        setRelationship("Siblings");
        break;
      default:
        setRelationship("Please enter valid input");
    }
  };

  const clearForm = () => {
    setName1("");
    setName2("");
    setRelationship("");
    setError("");
  };

  return (
    <div>
      <label htmlFor="name1">Name 1:</label>
      <input
        type="text"
        id="name1"
        placeholder="Enter name 1"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        data-testid="input1"
      />
      <br />
      <label htmlFor="name2">Name 2:</label>
      <input
        type="text"
        id="name2"
        placeholder="Enter name 2"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        data-testid="input2"
      />
      <br />
      <button
        onClick={calculateRelationship}
        data-testid="calculate_relationship"
      >
        Calculate Relationship
      </button>
      <button onClick={clearForm} data-testid="clear">
        Clear
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <h3 data-testid="answer">{relationship}</h3>
    </div>
  );
};

export default Flames;
