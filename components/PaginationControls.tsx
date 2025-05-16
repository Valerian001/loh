// components/PaginationControls.tsx
import { View, Button, Text, StyleSheet } from 'react-native';
import { useProductContext } from '../context/Productcontext';

export default function PaginationControls() {
  const { currentPage, setCurrentPage, products } = useProductContext();
  const totalPages = Math.ceil(products.length / 6);

  return (
    <View style={styles.container}>
      <Button
        title="Previous"
        disabled={currentPage === 1}
        onPress={() => setCurrentPage(currentPage - 1)}
      />
      <Text style={styles.pageText}>{`Page ${currentPage} of ${totalPages}`}</Text>
      <Button
        title="Next"
        disabled={currentPage === totalPages}
        onPress={() => setCurrentPage(currentPage + 1)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  pageText: {
    fontSize: 16,
  },
});
