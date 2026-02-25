import { FlatList, FlatListProps, RefreshControl, StyleSheet, View } from "react-native";
import Loader from "components/atoms/loader";
import { Pageable } from "models/Pageable";
import { InfiniteData } from "@tanstack/react-query";

interface InfiniteQueryState<T> {
  data?: InfiniteData<Pageable<T>>;
  fetchNextPage: () => void;
  hasNextPage?: boolean;
  isFetchingNextPage: boolean;
  refetch: () => void;
  isRefetching: boolean;
  isLoading: boolean;
}

interface PageableListProps<T> {
  renderItem: FlatListProps<T>["renderItem"];
  query: InfiniteQueryState<T>;
}

const PageableList = <T extends { id: string }>({ renderItem, query }: PageableListProps<T>) => {
  const { fetchNextPage, hasNextPage, isFetchingNextPage, refetch, isRefetching, data, isLoading } =
    query;
  const content = data?.pages.flatMap((page) => page.content) || [];

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.listContent}
      data={content}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      onEndReached={() => hasNextPage && fetchNextPage()}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        <View style={styles.footer}>
          <Loader active={isFetchingNextPage || isLoading} />
        </View>
      }
      refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}
    />
  );
};

const styles = StyleSheet.create({
  listContent: {
    padding: 16,
    paddingBottom: 40,
    gap: 16,
  },
  footer: {
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PageableList;
