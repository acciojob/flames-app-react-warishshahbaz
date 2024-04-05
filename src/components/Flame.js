import React, { useState } from "react";

const Flames = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [relationship, setRelationship] = useState("");

  const calculateRelationship = () => {
    const name1Chars = name1.split("");
    const name2Chars = name2.split("");

    // Create frequency maps for both names
    const frequencyMap1 = createFrequencyMap(name1Chars);
    const frequencyMap2 = createFrequencyMap(name2Chars);

    // Remove common letters from both names
    const filteredName1 = filterName(name1Chars, frequencyMap2);
    const filteredName2 = filterName(name2Chars, frequencyMap1);

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

  const createFrequencyMap = (chars) => {
    const map = {};
    for (let char of chars) {
      map[char] = map[char] ? map[char] + 1 : 1;
    }
    return map;
  };

  const filterName = (chars, frequencyMap) => {
    return chars.filter((char) => {
      if (frequencyMap[char] && frequencyMap[char] > 0) {
        frequencyMap[char]--;
        return false; // Remove the character
      }
      return true;
    });
  };

  const clearForm = () => {
    setName1("");
    setName2("");
    setRelationship("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name 1"
        name="name1"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        data-testid="input1"
      />
      <input
        type="text"
        placeholder="Enter name 2"
        name="name2"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        data-testid="input2"
      />
      <button
        onClick={calculateRelationship}
        data-testid="calculate_relationship"
      >
        Calculate Relationship
      </button>
      <button onClick={clearForm} data-testid="clear">
        Clear
      </button>
      <h3 data-testid="answer">{relationship}</h3>
    </div>
  );
};

export default Flames;
