import { StatusBar } from "expo-status-bar";
import { StyleSheet, Alert, Text, View, Button, Pressable } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>My App</Text>
      <Pressable
        onPress={() => {
          Alert.alert("Show Message", "Message description", [
            { text: "Ok", onPress: () => console.log("Welcome") },
            { text: "Bye", onPress: () => console.log("Bye") },
          ]);
        }}
        style={styles.button}
      >
        <Text style={styles.pressableText}>Show</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    marginTop: 10,
    backgroundColor: "blue",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
  },
  pressableText: {
    color: "white",
  },
});
