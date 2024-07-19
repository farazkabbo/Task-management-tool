
import React, { useState } from 'react';
import axios from 'axios';

const ConfluenceForm = () => {
  const [username, setUsername] = useState('');
  const [apiToken, setApiToken] = useState('');
  const [spaceKey, setSpaceKey] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/confluence', {
        username,
        apiToken,
        spaceKey,
        title,
        content,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Confluence Page</h2>
      <label>Username:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <label>API Token:</label>
      <input type="text" value={apiToken} onChange={(e) => setApiToken(e.target.value)} />
      <label>Space Key:</label>
      <input type="text" value={spaceKey} onChange={(e) => setSpaceKey(e.target.value)} />
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>Content:</label>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button type="submit">Create Page</button>
    </form>
  );
};

export default ConfluenceForm;
