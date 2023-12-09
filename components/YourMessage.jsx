import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

export default function YourMessage({ text, secondMsg, nxtLine }) {
  return (
    <View
      style={{ ...styles.messageContainer, marginBottom: secondMsg ? 15 : 5 }}
    >
      {secondMsg ? null : <View style={styles.leftMessageArrow}></View>}

      <View style={{ ...styles.messageText, paddingBottom: nxtLine ? 10 : 2 }}>
        <View style={styles.text}>
          <Text>{text + "             "} </Text>
        </View>
        <View style={{ ...styles.messageTime, bottom: nxtLine ? 0 : 4 }}>
          <Text style={{ color: "grey", fontWeight: "400", fontSize: 12 }}>
            11:34
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    backgroundColor: "white",
    alignSelf: "flex-start",
    maxWidth: "80%",
    minHeight: 30,
    borderRadius: 5,
    flexDirection: "row",
    padding: 0,
    alignItems: "center",
    marginBottom: 10,
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
    maxWidth: "80%",
    flexDirection: "row",
    paddingBottom: 2,
  },
  messageTime: {
    position: "absolute",
    flexDirection: "row", // bottom: 1,
    right: 5,
    bottom: 2,
  },
  text: {
    padding: 5,
  },
});
