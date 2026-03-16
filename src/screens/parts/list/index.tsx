import PartCard from "screens/parts/list/components/PartCard";
import PageableList from "components/molecules/pageableList";
import { PartResponse } from "models/response/PartResponse";
import { usePartList } from "screens/parts/list/usePartList";

const PartListScreen = () => {
  const { query, handleCardPress } = usePartList();

  const renderItem = ({ item }: { item: PartResponse }) => (
    <PartCard part={item} onPress={handleCardPress} />
  );

  return <PageableList renderItem={renderItem} query={query} />;
};

export default PartListScreen;
