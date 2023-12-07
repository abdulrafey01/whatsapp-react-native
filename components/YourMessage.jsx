import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

export default function YourMessage({ text, secondMsg }) {
  return (
    <View style={styles.messageContainer}>
      {secondMsg ? null : <View style={styles.leftMessageArrow}></View>}

      <View style={styles.messageText}>
        <Text>{text}</Text>
        <View style={styles.messageTime}>
          <Text style={{ color: "#000000", fontSize: 12 }}>11:34</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    maxWidth: "80%",
    height: "auto",
    backgroundColor: "white",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    padding: 0,
  },
  leftMessageArrow: {
    borderLeftWidth: 10,
    borderLeftColor: "transparent",
    borderTopColor: "white",
    borderTopWidth: 10,
    alignSelf: "flex-start",
    borderRightColor: "black",
    position: "absolute",
    left: -6,
  },
  messageText: {
    height: "auto",
    padding: 5,
    maxWidth: "80%",
    alignSelf: "flex-start",
  },
  messageTime: {
    position: "relative",
    flexDirection: "row", // bottom: 1,
    right: 3,
    alignSelf: "flex-end",
  },
});
