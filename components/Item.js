import { StyleSheet, Pressable, Text, View } from "react-native";

export default function Item({item, remove}) {
    return (
        <View style={{marginBottom: 10}}>
            <Pressable
                onPress={() => {
                    remove(item.id);
                }}
                >
                <Text style={styles.text}>
                    {item.title}
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 5,
        fontSize: 18,
    },
});
