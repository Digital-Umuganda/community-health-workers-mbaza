import { useEffect } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import t from "../../theme";
import ChatRequest from "./chat-request";
import ChatResponse from "./chat-response";

export default function Chat({ messages }: ChatProps) {

    function renderChatComponents(message: Message) {
        if (message.role === "user") {
            return <ChatRequest key={message.content + Math.random()} role={message.role} content={message.content} />;
        } else {
            return <ChatResponse key={message.content + Math.random()} content={message.content} />;
        }
    }

    return Array.isArray(messages) && messages.length > 0 ? (
        <ScrollView style={[{ height: '100%' }, t.border, t.flex]}>
            <View style={[t.flex1, t.pX3, t.pT4, t.mB40, { gap: 20 }]}>
                {Array.isArray(messages) && messages.map(message => renderChatComponents(message))}
            </View>
        </ScrollView>
    ) : (
        <View style={[t.flex, t.flex1, t.itemsCenter, { marginTop: '60%' }]}>
            <Image source={require('../../assets/icons8-bot-80.png')} />
            <Text style={[t.pX10, t.textCenter, t.opacity40]}>Oops! It looks like you have no recent chats. Start a chat by entering a message in the text box below.</Text>
        </View>
    )
}