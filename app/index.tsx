// app/index.tsx
import { FlatList, View } from 'react-native';
import FilterModal from '../components/FilterModal';
import PaginationControls from '../components/PaginationControls';
import ProductCard from '../components/ProductCard';
import SortDropdown from '../components/SortDropdown';
import { useProductContext } from '../context/Productcontext';

export default function HomeScreen() {
  const { filteredProducts } = useProductContext();

  return (
    <View style={{ flex: 1, padding:16, paddingTop:28 }}>

      <FilterModal />
      <SortDropdown />

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
      />

      <PaginationControls />
    </View>
  );
}
