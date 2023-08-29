import { Alert, Image, TextInput, TouchableOpacity, View } from "react-native";
import t from "../../theme";
import { Svg, Path } from "react-native-svg";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import axios from "axios";
const { Configuration, OpenAIApi } = require("openai");

const chat = async ({ messages, setMessages, setTranslating }: { messages: Message[], setMessages: ({ messages }: ChatProps) => void, setTranslating: (status: boolean) => void }) => {
    var data = JSON.stringify({
        "kinyarwanda_question": messages[messages.length - 1].content
    });

    var config = {
        method: 'post',
        url: 'https://chatbot.umuganda.digital/api/chatbot',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlbHZpc3J1Z2Vyb0BnbWFpbC5jb20iLCJleHAiOjE2OTY5NTY5Mjh9.drbTtcmg7MLQJVDvAyW6ZxzYM1nrrCucE_JbFg2WuZI',
            'Content-Type': 'application/json'
        },
        data: data
    };

    setTranslating(true);

    axios(config)
        .then(function (response) {
            console.log({ response });
            const msgs = [...messages, { role: "assistant", content: response.data.answer }];

            setMessages({ messages: msgs });

            setTranslating(false);
        })
        .catch(function (error) {
            // Alert.alert(error);
            console.error(error.message);
            setTranslating(false);
        });
}

export default function ChatInput({ messages, setMessages }: { messages: Message[], setMessages: ({ messages }: ChatProps) => void }) {
    const [message, setMessage] = useState('');
    const [translating, setTranslating] = useState(false);

    useEffect(() => {
        console.log({ messages });

        if (Array.isArray(messages) && messages.length > 0 && messages[messages.length - 1].role === "user") {
            chat({ messages, setMessages: updateMessages, setTranslating });
        }

    }, [messages])

    const updateMessages = ({ messages }: ChatProps) => {
        setMessage('');
        Array.isArray(messages) && setMessages({ messages });
    }

    return (
        <View style={[t.flex, t.flexRow, t.border, t.itemsCenter, t.pL5, t.mX4, t.roundedLg, t.borderGray800, t.bgGray800, t.pY1]}>
            <TextInput
                style={[t.flex1, t.textLg, t.textWhite]}
                onChangeText={(text) => {
                    setMessage(text);
                }}
                value={message}
                placeholder="Enter message"
                placeholderTextColor="white"
                multiline
            />
            <TouchableOpacity onPress={() => updateMessages({ messages: [...messages, { role: 'user', content: message }] })}>
                {translating ? <Image source={require('../../assets/Pulse-1s-200px.gif')} style={[t.w7, t.h7, t.mR3]} /> : (
                    <Svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" style={[t.w7, t.h6, t.mR3]}>
                        <Path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </Svg>
                )}
            </TouchableOpacity>
        </View>
    )
}