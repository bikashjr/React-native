import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export const Nav = () => {
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, marginTop: 30 }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Instagram</Text>

                <View style={{ flexDirection: 'row' }}>
                    <Icon name="ios-heart" size={26} style={{ marginRight: 20 }} />
                    <Icon name="ios-heart" size={26} style={{ marginRight: 20 }} />
                </View>
            </View>

            <View style={{ padding: 20, flexDirection: "row", gap: 10 }}>
                <View style={styles.circle} />
                <View style={styles.circle} />
                <View style={styles.circle} />
                <View style={styles.circle} />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    circle: {
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: 'black',
    },
})
export default Nav;