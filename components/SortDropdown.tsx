// components/SortDropdown.tsx
import { Button, StyleSheet, View } from 'react-native';
import { useProductContext } from '../context/Productcontext';

export default function SortDropdown() {
  const { setSortOption } = useProductContext();

  return (
    <View style={styles.container}>
      <Button title="Sort: Name" onPress={() => setSortOption('name')} />
      <Button title="Price Low to High" onPress={() => setSortOption('priceLowToHigh')} />
      <Button title="Price High to Low" onPress={() => setSortOption('priceHighToLow')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 24,
  },
});
