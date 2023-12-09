import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

export default function MyMessage({ text, secondMsg, nxtLine }) {
  return (
    <View
      style={{ ...styles.messageContainer, marginBottom: secondMsg ? 15 : 5 }}
    >
      <View style={{ ...styles.messageText, paddingBottom: nxtLine ? 10 : 2 }}>
        <View style={styles.text}>
          <Text>{text + "              "} </Text>
        </View>
        <View style={{ ...styles.messageTime, bottom: nxtLine ? 2 : 4 }}>
          <Text style={{ color: "grey", fontWeight: "400", fontSize: 12 }}>
            11:34
          </Text>
          <Image
            style={{ position: "relative", top: 2, margin: 2 }}
            source={require("../assets/Read.png")}
          />
        </View>
      </View>
      {secondMsg ? null : <View style={styles.rightMessageArrow}></View>}
    </View>
  );
}

const styles = StyleSheet.create({
  rightMessageArrow: {
    borderRightWidth: 10,
    borderRightColor: "transparent",
    borderTopColor: "#DCF7C5",
    borderTopWidth: 10,
    alignSelf: "flex-start",
    position: "absolute",
    right: -6,
  },
  messageContainer: {
    maxWidth: "80%",
    minHeight: 30,
    backgroundColor: "#DCF7C5",
    borderRadius: 5,
    flexDirection: "row",
    alignSelf: "flex-end",
    padding: 0,
    alignItems: "center",
    marginBottom: 10,
  },
  messageText: {
    maxWidth: "80%",
    flexDirection: "row",
    paddingBottom: 2,
    // paddingBottom: 10,
  },
  messageTime: {
    position: "absolute",
    flexDirection: "row",
    height: 15,
    width: 45,
    right: 4,
    bottom: 4,
    // bottom: 0,
  },
  text: {
    padding: 5,
  },
});
