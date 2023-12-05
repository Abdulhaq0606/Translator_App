import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [langFrom, setLangFrom] = useState('uz');
  const [langTo, setLangTo] = useState('kaa');
  const [text, setText] = useState('');
  const [translation, setTranslation] = useState('');

  const handleTranslation = () => {
    const data = {
      lang_from: langFrom,
      lang_to: langTo,
      text: text
    };

    axios.post('https://api.from-to.uz/uz/api-docs/api/v1/translate', data)
      .then((response) => {
        console.log(response)
        setTranslation(response.data.translation);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Translator</h1>
      <div>
        <label htmlFor="langFrom">From:</label>
        <select id="langFrom" value={langFrom} onChange={(event) => setLangFrom(event.target.value)}>
          <option value="uz">Uzbek</option>
          <option value="en">English</option>
          <option value="ru">Russian</option>
        </select>
      </div>
      <div>
        <label htmlFor="langTo">To:</label>
        <select id="langTo" value={langTo} onChange={(event) => setLangTo(event.target.value)}>
          <option value="kaa">Karachay-Balkar</option>
          <option value="ru">Russian</option>
          <option value="uz">Uzbek</option>
        </select>
      </div>
      <div>
        <label htmlFor="text">Text:</label>
        <input type="text" id="text" value={text} onChange={(event) => setText(event.target.value)} />
      </div>
      <div>
        <button onClick={handleTranslation}>Translate</button>
      </div>
      <div>
        <p>Translation: {translation}</p>
      </div>
    </div>
  );
}

export default App;