import { AmplifyChatbot } from "@aws-amplify/ui-react";
import React, { useEffect } from "react";

interface Props {}

const Chatbot = (props: Props) => {
  const handleChatComplete = (event: any) => {
    const { data, err } = event.detail;
    if (data) console.log("Chat fulfilled!", JSON.stringify(data));
    if (err) console.error("Chat failed:", err);
  };

  useEffect(() => {
    const chatbotElement: any = document.querySelector("amplify-chatbot");
    chatbotElement.addEventListener("chatCompleted", handleChatComplete);
    return function cleanup() {
      chatbotElement.removeEventListener("chatCompleted", handleChatComplete);
    };
  }, []);

  return (
    <AmplifyChatbot
      botName="BookTrip_dev"
      botTitle="This is a chatbot made with Amplify"
      welcomeMessage="Hi! I was made with Amplify. How can I help you?"
    />
  );
};

export default Chatbot;
