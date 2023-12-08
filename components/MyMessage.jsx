import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

export default function MyMessage({ text, secondMsg }) {
  return (
    <View style={styles.messageContainer}>
      <View style={styles.messageText}>
        <View style={styles.text}>
          <Text>{text + "           "} </Text>
          <View style={styles.messageTime}>
            <Text style={{ color: "#000000", fontSize: 12 }}>11:34</Text>
            <Image
              style={{ position: "relative", top: 2, margin: 2 }}
              source={require("../assets/Read.png")}
            />
          </View>
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
  },
  messageText: {
    // backgroundColor: "yellow",
    maxWidth: "80%",
    flexDirection: "row",
    // alignSelf: "flex-end",
    // minHeight: 40,
  },
  messageTime: {
    position: "absolute",
    // backgroundColor: "red",
    flexDirection: "row",
    height: 15,
    width: 45,
    alignSelf: "flex-end",
    // right: 0,
    bottom: 0,
  },
  text: {
    padding: 7,
  },
});

// const styles = StyleSheet.create({
//   messageContainer: {
//     maxWidth: "80%",
//     height: "auto",
//     minHeight: 40,
//     backgroundColor: "#DCF7C5",
//     borderRadius: 5,
//     flexDirection: "row",
//     alignItems: "center",
//     alignSelf: "flex-end",
//     padding: 0,
//   },
//   rightMessageArrow: {
//     borderRightWidth: 10,
//     borderRightColor: "transparent",
//     borderTopColor: "#DCF7C5",
//     borderTopWidth: 10,
//     alignSelf: "flex-start",
//     position: "absolute",
//     right: -6,
//   },
//   messageText: {
//     backgroundColor: "yellow",
//     height: "auto",
//     padding: 5,
//     maxWidth: "80%",
//     alignSelf: "flex-start",
//     flexDirection: "row",
//     // flexWrap: "wrap",
//   },
//   messageTime: {
//     position: "absolute",
//     flexDirection: "row",
//     bottom: 1,
//     right: 0,
//     alignSelf: "flex-end",
//     backgroundColor: "red",
//   },
//   text: {
//     backgroundColor: "green",
//     alignSelf: "flex-end",
//   },
// });
