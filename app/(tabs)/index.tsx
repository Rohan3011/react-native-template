import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { Link } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import Card from "../../components/Card";
import SearchBar from "../../components/Searchbar";
import { useFetch } from "../../hooks/useFetch";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function HomeScreen() {
  const { data, error } = useFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <View style={styles.container}>
      <SearchBar />
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {data?.map((post) => (
          <Card key={post.id} {...post} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },

  scrollContainer: {
    backgroundColor: "#000000b",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
