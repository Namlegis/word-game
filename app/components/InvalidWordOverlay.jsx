// components/InvalidWordOverlay.jsx
import React, { useEffect } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { useGameContext } from "../GameContext";

const InvalidWordOverlay = () => {
    const { isWordInvalid, setIsWordInvalid } = useGameContext();
    const fadeAnim = React.useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (isWordInvalid) {
            Animated.sequence([
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 250,
                    useNativeDriver: true,
                }),
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 150,
                    delay: 300,
                    useNativeDriver: true,
                }),
            ]).start(() => setIsWordInvalid(false));
        }
    }, [isWordInvalid]);

    if (!isWordInvalid) return null;

    return (
        <Animated.View style={[styles.overlay, { opacity: fadeAnim }]}>
            <Text style={styles.text}>Invalid Word!</Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(255, 0, 0, 0.3)",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 64,
        fontWeight: "bold",
        color: "white",
        textAlign: "center"
    },
});

export default InvalidWordOverlay;