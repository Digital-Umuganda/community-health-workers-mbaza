import { Image, Text, View } from "react-native";
import t from "../../theme";

export default function ChatResponse({ content }) {
    return (
        <View style={[t.flex, t.flexRow, t.w3_4]}>
            <View>
                <Image source={require('../../assets/icons8-bot-80.png')} style={[t.w12, t.h10]} />
            </View>
            <Text style={[t.mL2, t.bgWhite, t.roundedLg, t.p3, t.textBlack]}>{content}</Text>
        </View>
    );
}
