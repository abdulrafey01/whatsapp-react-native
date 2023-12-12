import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

export default function MyMessage({ text, secondMsg }) {
  return (
    <View
      style={{ ...styles.messageContainer, marginBottom: secondMsg ? 15 : 5 }}
    >
      <View style={{ ...styles.messageText }}>
        <View style={styles.text}>
          <Text>
            {text}
            <Text
              style={{ color: "transparent", fontWeight: "400", fontSize: 12 }}
            >
              1 2 3 4 5 6
            </Text>
          </Text>
        </View>
        <View style={{ ...styles.messageTime }}>
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
    // backgroundColor: "red",
    // paddingBottom: 10,
  },
  messageTime: {
    position: "absolute",
    flexDirection: "row",
    height: 15,
    width: 45,
    right: 4,
    bottom: 4,
    // backgroundColor: "yellow",

    // bottom: 0,
  },
  text: {
    padding: 5,
  },
});
