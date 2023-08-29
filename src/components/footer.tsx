import { View } from "react-native";
import t from "../../theme";
import ChatInput from "./chat-input";
import { Dispatch, SetStateAction } from "react";

export default function Footer({ messages, setMessages }: { messages: Message[], setMessages: ({ messages }: ChatProps) => void }) {
    const updateMessages = ({ messages }: ChatProps) => {
        // console.log({ messages });
        Array.isArray(messages) && setMessages({ messages });
    }
    return (
        <View style={[t.absolute, t.bottom0, t.bgBlack, t.pY6, t.borderT, t.borderGray400, { width: '100%' }]}>
            <ChatInput messages={messages} setMessages={updateMessages} />
        </View>
    )
}