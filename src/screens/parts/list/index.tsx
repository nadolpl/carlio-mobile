import { useSearchParts } from "api/hooks/part";
import PartCard from "screens/parts/list/components/PartCard";
import PageableList from "components/molecules/pageableList";

const PartListScreen = () => {
  const query = useSearchParts();

  const handlePress = (id: string) => {
    console.log(`Part with ID ${id} pressed`);
  };

  return (
    <PageableList
      query={query}
      renderItem={({ item }) => <PartCard part={item} onPress={handlePress} />}
    />
  );
};

export default PartListScreen;
