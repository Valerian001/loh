// app/_layout.tsx
import { Stack } from 'expo-router';
import { ProductProvider } from '../context/Productcontext';

export default function Layout() {
  return (
    <ProductProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </ProductProvider>
  );
}
