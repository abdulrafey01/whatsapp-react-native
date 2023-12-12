import { StyleSheet, Image, Text, View } from "react-native";
import YourMessage from "./components/YourMessage";
import MyMessage from "./components/MyMessage";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Image source={require("./assets/bg.png")} />
      </View>

      <View style={styles.messages}>
        <YourMessage text={"Hi there How are you"} />
        <YourMessage
          secondMsg={true}
          text={
            "Good to see you 😊 Good to see you Good to see you Good to see you Good to see you "
          }
        />
        <MyMessage
          text={
            "Ok thanks you I'm good! How are youI'm good! How are youI'm good! How are"
          }
        />
        <MyMessage secondMsg={true} text={"I'm good! How are you"} />
        <YourMessage text={"Hi there How are you"} />
        <YourMessage
          secondMsg={true}
          text={
            "Good to see you Good to see you Good to see you Good to see you Good to see you  Good to see"
          }
        />
        <MyMessage text={"Ok thanks 💕"} />
        <MyMessage
          secondMsg={true}
          text={
            "I'm good! How are you I'm good! How are you I'm good! How are you I'm good! How are you I'm good! How are you I'm good! How are youI'm good! How are youI'm good! How are you you I'm good! How are youI'm good! How are youI'm good! good  youI'm good! good  youI'"
          }
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: -1,
  },
  messages: {
    marginTop: 80,
    padding: 10,
  },
});
