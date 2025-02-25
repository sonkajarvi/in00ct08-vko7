import { useReducer, useState } from "react";
import { FlatList, Button, StyleSheet, TextInput, View } from "react-native";
import Item from "./Item.js";

export default function List() {
    const [disabled, setDisabled] = useState(true);
    const [text, setText] = useState("");
    const [todos, dispatch] = useReducer(reducer, []);

    function reducer(state, action) {
        switch (action.type) {
            case "add":
                return [...state, {
                    id: Date.now(),
                    title: action.text
                }];
            case "remove":
                return state.filter(e => e.id !== action.id);
        }
    }

    return (
        <View style={{margin: 10}}>
            <View style={styles.container}>
                <TextInput
                    onChangeText={e => {
                        setText(e);
                        setDisabled(!e || e.length === 0);
                    }}
                    value={text}
                    placeholder="Enter task"
                    style={styles.text}
                />
                <Button
                    title="Save"
                    onPress={() => {
                        dispatch({type: "add", text});
                        setText("");
                        setDisabled(true);
                    }}
                    disabled={disabled}
                />
            </View>
            <View>
                <FlatList
                    data={todos}
                    renderItem={({item}) =>
                        <Item
                            item={item}
                            remove={(id) => {
                                dispatch({type: "remove", id});
                            }}
                        />
                    }
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    text: {
        fontSize: 18,
    },
});
