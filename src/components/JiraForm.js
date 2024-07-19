
import React, { useState } from 'react';
import axios from 'axios';

const JiraForm = () => {
  const [username, setUsername] = useState('');
  const [apiToken, setApiToken] = useState('');
  const [issueSummary, setIssueSummary] = useState('');
  const [issueDescription, setIssueDescription] = useState('');
  const [projectKey, setProjectKey] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/jira', {
        username,
        apiToken,
        issueSummary,
        issueDescription,
        projectKey,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create JIRA Issue</h2>
      <label>Username:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <label>API Token:</label>
      <input type="text" value={apiToken} onChange={(e) => setApiToken(e.target.value)} />
      <label>Issue Summary:</label>
      <input type="text" value={issueSummary} onChange={(e) => setIssueSummary(e.target.value)} />
      <label>Issue Description:</label>
      <textarea value={issueDescription} onChange={(e) => setIssueDescription(e.target.value)} />
      <label>Project Key:</label>
      <input type="text" value={projectKey} onChange={(e) => setProjectKey(e.target.value)} />
      <button type="submit">Create Issue</button>
    </form>
  );
};

export default JiraForm;
