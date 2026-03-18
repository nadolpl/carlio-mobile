import { FlatList, FlatListProps, RefreshControl, StyleSheet, View } from "react-native";
import Loader from "components/atoms/loader";
import { Pageable } from "models/Pageable";
import { InfiniteData } from "@tanstack/react-query";
import { useMemo } from "react";

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

  const content = useMemo(() => data?.pages.flatMap((page) => page.content) || [], [data?.pages]);

  const renderListFooter = () =>
    (isFetchingNextPage || isLoading) && (
      <View style={styles.footer}>
        <Loader />
      </View>
    );

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.listContent}
      data={content}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      onEndReached={() => {
        if (hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      }}
      onEndReachedThreshold={0.5}
      ListFooterComponent={renderListFooter}
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
