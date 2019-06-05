import React, { useState, useEffect } from 'react';

function App() {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => {
        res.json()
          .then(data => {
            setTemplates(data.data.memes)
            console.log(templates)
          })
      })
  }, [])

  return <div style={{ textAlign: "center" }}>hi</div>
}

export default App;
