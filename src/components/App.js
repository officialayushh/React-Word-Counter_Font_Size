import React, { useState } from "react";
const App = () => {
  const [limit, setLimit] = useState(50);
  const [fs, setFs] = useState(16);
  const [wordCount, setWordsCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [text, setText] = useState("");
  const countHandler = (e) => {
    setText(e.target.value);
    setWordsCount(wordCounter(e.target.value));
    setCharCount(e.target.value.length);
  };
  function wordCounter(str) {
    const arr = str.split(" ");
    const newArr = arr.filter((a) => a !== "");
    return newArr.length;
  }
  return (
    <div id="main">
      <label>Font Size Picker</label>
      <br />
      <input
        type="range"
        id="fontSize-input"
        min="16"
        max="32"
        value={fs}
        onChange={(e) => setFs(e.target.value)}
      />
      <br />
      <label>Word limit input</label>
      <br />
      <input
        id="char-limit-input"
        type="number"
        value={limit}
        onChange={(e) => setLimit(e.target.value)}
      />
      <textarea
        rows="7"
        maxLength={limit}
        style={{ fontSize: `${fs}px` }}
        value={text}
        onChange={countHandler}
      ></textarea>
      <div id="word-counter">Total number of words written {wordCount}</div>
      <div id="char-counter">Total numbers of characters used {charCount} </div>
    </div>
  );
};
export default App;