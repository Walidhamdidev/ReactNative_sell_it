import { FlatList, StyleSheet } from "react-native";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import Wrapper from "../components/Wrapper";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import { useState } from "react";
import { ListItem } from "../components/lists";
import colors from "../config/colors";

const initialMessages = [
  {
    id: 1,
    title: "Message 1 ",
    description: "This is the first message",
    image: "../assets/mosh.jpg",
  },
  {
    id: 2,
    title: "Message 2",
    description: "This is the second message",
    image: "../assets/mosh.jpg",
  },
  {
    id: 3,
    title: "Message 3",
    description: "This is the third message",
    image: "../assets/mosh.jpg",
  },
  // ...and so on
];

interface Message {
  id: number;
  title: string;
  description: string;
  image: string;
}

const MessageScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleOnPress = (message: Message) => {
    const filteredMessages = messages.filter((m) => m.id !== message.id);
    setMessages(filteredMessages);
  };

  return (
    <Wrapper style={styles.container}>
      <FlatList
        keyExtractor={(message) => message.id.toString()}
        data={messages}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={require("../assets/user_profile.webp")}
            onPress={() => {}}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleOnPress(item)} />
            )}
          />
        )}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 3,
              title: "Message 3",
              description: "This is the third message",
              image: "../assets/user_profile.webp",
            },
          ]);
        }}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
  },
});

export default MessageScreen;
