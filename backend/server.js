
// server.js file
console.log('Server running');

const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());

// JIRA API endpoint
app.post('/jira', async (req, res) => {
  const { username, apiToken, issueSummary, issueDescription, projectKey } = req.body;

  const auth = Buffer.from(`${username}:${apiToken}`).toString('base64');
  const jiraUrl = `https://your-domain.atlassian.net/rest/api/3/issue`;

  try {
    const response = await axios.post(
      jiraUrl,
      {
        fields: {
          project: { key: projectKey },
          summary: issueSummary,
          description: issueDescription,
          issuetype: { name: "Task" },
        },
      },
      {
        headers: {
          Authorization: `Basic ${auth}`,
          'Content-Type': 'application/json',
        },
      }
    );
    res.send(response.data);
  } catch (error) {
    res.status(500).send(error.response.data);
  }
});

// Confluence API endpoint
app.post('/confluence', async (req, res) => {
  const { username, apiToken, spaceKey, title, content } = req.body;

  const auth = Buffer.from(`${username}:${apiToken}`).toString('base64');
  const confluenceUrl = `https://your-domain.atlassian.net/wiki/rest/api/content`;

  try {
    const response = await axios.post(
      confluenceUrl,
      {
        type: 'page',
        title: title,
        space: { key: spaceKey },
        body: {
          storage: {
            value: content,
            representation: 'storage',
          },
        },
      },
      {
        headers: {
          Authorization: `Basic ${auth}`,
          'Content-Type': 'application/json',
        },
      }
    );
    res.send(response.data);
  } catch (error) {
    res.status(500).send(error.response.data);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
