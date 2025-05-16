// components/ProductCard.tsx
import { Image, StyleSheet, Text, View } from 'react-native';
import { Product } from '../context/Productcontext';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 6,
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  price: {
    fontSize: 14,
    color: '#666',
  },
});
