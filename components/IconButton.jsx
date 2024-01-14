import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function IconButton({ icon, color, onPress }) {
    return (
        <View style={styles.container}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => pressed && styles.pressed}
            >
                <Ionicons name={icon} size={24} color={color} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 12,
    },
    pressed: {
        opacity: 0.7,
    },
});
