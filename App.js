import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import List from "./components/List.js";

export default function App() {
    return (
        <View style={styles.container}>
            <List />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Constants.statusBarHeight,
    },
});
