import { Stack } from 'expo-router';

export default function SampleLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Components Gallery' }} />
      <Stack.Screen name="wizards" options={{ title: 'Wizards' }} />
      <Stack.Screen name="cards" options={{ title: 'Cards' }} />
      <Stack.Screen name="buttons" options={{ title: 'Buttons' }} />
    </Stack>
  );
}
