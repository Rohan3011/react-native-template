import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { Link } from "expo-router";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";
import Card from "../../components/Card";
import SearchBar from "../../components/Searchbar";
import { useFetch } from "../../hooks/useFetch";
import { useQuery } from "@tanstack/react-query";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function HomeScreen() {
  const { data, isLoading, isError, refetch } = useQuery<Post[]>({
    queryKey: ["todos"],
    queryFn: async () => {
      console.log("fetched todos");
      const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!resp.ok) throw new Error("something went wrong!");
      return await resp.json();
    },
  });

  if (isLoading) return <Text>Loading...</Text>;
  if (isError) return <Text>something went wrong!</Text>;

  return (
    <View style={styles.container}>
      <SearchBar />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
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
