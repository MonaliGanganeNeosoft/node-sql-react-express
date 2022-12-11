const dialogflow = require("@google-cloud/dialogflow").v2beta1;
const uuid = require("uuid");
require("dotenv").config();
const sessionClient = new dialogflow.SessionsClient({
  keyFilename:
    "C:/Users/Neosoft/Desktop/pulkit-bot/dabadu-bot-wtnu-7c7756bc6906.json",
});
const sessionPath = sessionClient.projectAgentSessionPath(
  (projectId = process.env.NODE_PRODUCTID),
  sessionId
);
const detectEventIntentController = async (req, res) => {
  async function detectEventIntent(
    projectId,
    sessionId,
    eventName,
    languageCode
  ) {
    const { struct } = require("pb-util");

    // Imports the Dialogflow library
    // const dialogflow = require("@google-cloud/dialogflow");

    // Instantiates a session client
    // const sessionClient = new dialogflow.SessionsClient();

    // The path to identify the agent that owns the created intent.
    // const sessionPath = sessionClient.projectAgentSessionPath(
    //   projectId,
    //   sessionId
    // );

    // The text query request.
    const request = {
      session: sessionPath,
      queryInput: {
        event: {
          name: eventName,
          parameters: struct.encode({ foo: "bar" }),
          languageCode: languageCode,
        },
      },
    };

    const [response] = await sessionClient.detectIntent(request);
    console.log("Detected intent");
    const result = response.queryResult;
    // Instantiates a context client
    const contextClient = new dialogflow.ContextsClient();

    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);
    if (result.intent) {
      console.log(`  Intent: ${result.intent.displayName}`);
    } else {
      console.log("  No intent matched.");
    }
    const parameters = JSON.stringify(struct.decode(result.parameters));
    console.log(`  Parameters: ${parameters}`);
    if (result.outputContexts && result.outputContexts.length) {
      console.log("  Output contexts:");
      result.outputContexts.forEach((context) => {
        const contextId =
          contextClient.matchContextFromProjectAgentSessionContextName(
            context.name
          );
        const contextParameters = JSON.stringify(
          struct.decode(context.parameters)
        );
        console.log(`    ${contextId}`);
        console.log(`      lifespan: ${context.lifespanCount}`);
        console.log(`      parameters: ${contextParameters}`);
      });
    }
  }
};
module.exports = { detectEventIntentController };
