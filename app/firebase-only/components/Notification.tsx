import React from "react";
import { onMessageListener, requestForToken } from "@/firebase/app";
import { useToast } from "@chakra-ui/react";

export const Notification = () => {
  const toast = useToast();

  requestForToken();

  onMessageListener((payload) => {
    toast({
      title: payload?.notification?.title,
      description: payload?.notification?.body,
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  }).catch((err) => console.log("failed: ", err));

  return <div>Notification</div>;
};

export default Notification;
