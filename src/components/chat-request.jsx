import { Text, View } from "react-native";
import UserAvatar from "react-native-user-avatar";
import t from "../../theme";

export default function ChatRequest({ role, content }) {
    return (
        <View style={[t.flex, t.flexRow, t.mL12, { justifyContent: 'flex-end' }]}>
            <Text style={[t.mR2, t.roundedLg, t.p3, t.textWhite, { backgroundColor: '#000' }]}>{content}</Text>
            <View>
                <UserAvatar size={40} name="User" />
            </View>
        </View>
    );
}