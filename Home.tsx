import { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import Chat from "./src/components/chat";
import Footer from "./src/components/footer";
import t from "./theme";

export default function HomeScreen() {
	const [messages, setMessages] = useState<Message[]>([])

	const updateMessages = ({ messages }: ChatProps) => {
		// console.log({ messages });
		Array.isArray(messages) && setMessages(messages);
	}

	return (
		<View style={[t.flex1]}>
			<Chat messages={messages} />
			<Footer messages={messages} setMessages={updateMessages} />
		</View>
	);
}