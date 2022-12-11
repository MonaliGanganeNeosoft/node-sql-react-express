const fulfillment = require("dialogflow-fulfillment");
const handleWebhook = (request, response) => {
  const tag = request.body.queryResult.intent.displayName;
  const agent = new fulfillment.WebhookClient({
    request,
    response,
  });
  let jsonResponse = {};
  console.log("dsjnvdsvn");
  if (tag === "Default Welcome Intent") {
    console.log("dsjkbjsdf");
    //fulfillment response to be sent to the agent if the request tag is equal to "welcome tag"
    jsonResponse = {
      fulfillment_messages: [
        {
          text: {
            //fulfillment text response to be sent to the agent
            text: ["Hello from a GCF Webhook"],
          },
        },
      ],
    };
  } else if (tag === "get-name") {
    //fulfillment response to be sent to the agent if the request tag is equal to "welcome tag"
    jsonResponse = {
      fulfillment_messages: [
        {
          text: {
            //fulfillment text response to be sent to the agent
            text: ["My name is Flowhook"],
          },
        },
      ],
    };
  } else if (tag === "meet") {
    // const name = agent.getContext("get_username");
    // console.log(name);
    jsonResponse = {
      //fulfillment text response to be sent to the agent if there are no defined responses for the specified tag
      fulfillment_messages: [
        {
          text: {
            ////fulfillment text response to be sent to the agent
            text: [`can i get your name`],
          },
        },
      ],
    };
  } else if (tag === "askemail") {
    const name = agent.getContext("awaiting_name").parameters.person.name;
    console.log(name);
    jsonResponse = {
      //fulfillment text response to be sent to the agent if there are no defined responses for the specified tag
      fulfillment_messages: [
        {
          text: {
            ////fulfillment text response to be sent to the agent
            text: [`hii ${name} can you pls share mail id`],
          },
        },
      ],
    };
  } else if (tag === "emailcheck") {
    const name = agent.getContext("awaiting_name").parameters.person.name;
    console.log(name);
    const email = agent.getContext("awating_email").parameters.email;

    jsonResponse = {
      //fulfillment text response to be sent to the agent if there are no defined responses for the specified tag
      fulfillment_messages: [
        {
          text: {
            ////fulfillment text response to be sent to the agent
            text: [`hii ${name} we recevied your ${email} id`],
          },
        },
      ],
    };
  } else {
    jsonResponse = {
      //fulfillment text response to be sent to the agent if there are no defined responses for the specified tag
      fulfillment_messages: [
        {
          text: {
            ////fulfillment text response to be sent to the agent
            text: [
              `There are no fulfillment responses defined for "${tag}"" tag`,
            ],
          },
        },
      ],
    };
  }

  response.send(jsonResponse);
};
module.exports = { handleWebhook };
