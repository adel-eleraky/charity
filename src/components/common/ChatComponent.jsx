import React, { useEffect, useRef, useState } from "react";
import { Input, MessageBox, MessageList } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import styles from "./ChatComponent.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addMessage,
  getConversation,
  openChat,
  sendMessage,
} from "../../rtk/features/chatSlice";
import Loader from "./Loader";
/*
todo: 1. go to app 2. use fetch 
todo: 3. enhance design of the component like telegram
*/
function ChatComponent() {
  const {
    conversation,
    messages,
    sendMessageStatus,
    getConversationStatus,
    isChatOpen,
    receiverId,
  } = useSelector((store) => store.chat);
  const dispatch = useDispatch();

  let inputReferance = React.createRef();
  let list = useRef(null);
  useEffect(() => {
    // Scroll to the bottom of the message list when messages change
    if (list.current) {
      list.current.scrollTop = list.current.scrollHeight;
    }
  }, [conversation, list]);

  function handleSendMessage() {
    // todo: convert it first
    if (inputReferance.current.value.trim()) {
      const message = inputReferance.current.value;
      dispatch(sendMessage({ message, receiverId }));
      dispatch(addMessage(message));
      inputReferance.current.value = "";
    }
  }
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  useEffect(
    function () {
      if (isChatOpen && getConversationStatus === "idle") {
        dispatch(getConversation(receiverId));
      }
    },
    [dispatch, getConversationStatus, isChatOpen, receiverId]
  );
  if (!isChatOpen) return;

  return (
    <div className={styles.container}>
      {getConversationStatus === "idle" ||
      getConversationStatus === "loading" ? (
        <Loader type="mosaic" />
      ) : (
        <MessageList
          referance={list}
          className={styles["message-list"]}
          dataSource={messages}
          multiline={true}
        />
      )}
      <Input
        className={styles.input}
        referance={inputReferance}
        placeholder="Type here..."
        multiline={true}
        rightButtons={<button onClick={handleSendMessage}>x</button>}
        autofocus={true}
        onKeyPress={handleKeyPress}
        maxHeight={70}
        minHeight={30}
      />
    </div>
  );
}

export default ChatComponent;
