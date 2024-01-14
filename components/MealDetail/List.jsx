import { View, Text, StyleSheet } from "react-native";

export default function List({ data }) {
    return data.map((d) => (
        <View style={styles.listItem}>
            <Text style={styles.itemText} key={d}>
                {d}
            </Text>
        </View>
    ));
}

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: "#e2b497",
    },

    itemText: {
        color: "#351401",
        textAlign: "center",
    },
});