// components/FilterModal.tsx
import { Button, StyleSheet, View } from 'react-native';
import { useProductContext } from '../context/Productcontext';

export default function FilterModal() {
  const { setFilters, setCurrentPage } = useProductContext();

  const applyCategoryFilter = (category: string) => {
    setFilters({ category });
    setCurrentPage(1);
  };

  return (
    <View style={styles.container}>
      <Button title="All" onPress={() => applyCategoryFilter('')} />
      <Button title="Electronics" onPress={() => applyCategoryFilter('Electronics')} />
      <Button title="Fashion" onPress={() => applyCategoryFilter('Fashion')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 28,
  },
});
