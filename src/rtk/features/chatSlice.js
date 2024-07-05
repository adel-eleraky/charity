import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData, putData, postData } from "../../utils/api";
import {
  fetchingErrorHandling,
  prepareChatMessages,
} from "../../utils/helpers";

// Async actions

// Async action to send a message
export const sendMessage = createAsyncThunk(
  "chat/sendMessage",
  async function (messageData) {
    try {
      return postData("chats/send-message", messageData);
    } catch (error) {
      fetchingErrorHandling(error, "sendMessage");
    }
  }
);

// Async action to get a conversation by ID
export const getConversation = createAsyncThunk(
  "chat/getConversation",
  async function (id) {
    try {
      return getData(`chats/get-conversation/${id}`);
    } catch (error) {
      fetchingErrorHandling(error, "getConversation");
    }
  }
);

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    //* it is the fetched object has messages (just in case)
    conversation: {},
    //* messages is the ready to print version
    messages: [],
    sendMessageStatus: "idle",
    getConversationStatus: "idle",
    isChatOpen: false,
    receiverId: null,
    error: null,
  },
  reducers: {
    openChat(state, action) {
      state.isChatOpen = true;
      state.receiverId = action.payload;
      state.getConversationStatus = "idle";
      state.sendMessageStatus = "idle";
    },
    closeChat(state) {
      state.isChatOpen = false;
      state.receiverId = null;
      //* i don't need them but it is fine
      state.getConversationStatus = "idle";
      state.sendMessageStatus = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      // Reducers for sendMessage action
      .addCase(sendMessage.pending, (state) => {
        state.sendMessageStatus = "loading";
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.sendMessageStatus = "finished";
        // Optionally, you can add logic to update the conversation with the new message here
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.sendMessageStatus = "failed";
        state.error = action.error.message;
      })

      // Reducers for getConversation action
      .addCase(getConversation.pending, (state) => {
        state.getConversationStatus = "loading";
      })
      .addCase(getConversation.fulfilled, (state, action) => {
        state.getConversationStatus = "finished";
        state.conversation = action.payload.conversation;
        state.messages = prepareChatMessages(
          state.conversation.messages,
          state.receiverId
        );
      })
      .addCase(getConversation.rejected, (state, action) => {
        state.getConversationStatus = "failed";
        state.error = action.error.message;
      });
  },
});
export const { openChat, closeChat } = chatSlice.actions;
export default chatSlice.reducer;
