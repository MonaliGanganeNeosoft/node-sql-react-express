const dialogflow = require("@google-cloud/dialogflow").v2beta1;
const uuid = require("uuid");
require("dotenv").config();
const sessionClient = new dialogflow.SessionsClient({
  keyFilename:
    "C:/Users/Neosoft/Desktop/pulkit-bot/dabadu-bot-wtnu-7c7756bc6906.json",
});
const textQuery = async (userText, userId) => {
  const sessionId = uuid.v4();
  //   const projectId = process.env.NODE_PRODUCTID;
  console.log(sessionId, "10");
  //   console.log(projectId, "12");
  const sessionPath = sessionClient.projectAgentSessionPath(
    (projectId = process.env.NODE_PRODUCTID),
    sessionId + userId
  );
  console.log(sessionPath, "17");
  //   const projectId = process.env.NODE_PRODUCTID;
  const knowledgeBaseId = "NDgyMDUxMTg2Mzg0NDM3MjQ4";
  const knowledgeBasePath =
    "projects/" + projectId + "/knowledgeBases/" + knowledgeBaseId + "";

  //   const sessionPath = sessionClient.sessionPath(projectId, sessionId + userId);
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: userText,
        languageCode: "en-US",
      },
    },
    queryParams: {
      knowledgeBaseNames: [knowledgeBasePath],
    },
  };
  try {
    const response = await sessionClient.detectIntent(request);
    console.log(request, "31");
    console.log(response, "32");
    return response[0].queryResult;
  } catch (err) {
    console.log(err);
    return err;
  }
};
module.exports = {
  textQuery,
};
