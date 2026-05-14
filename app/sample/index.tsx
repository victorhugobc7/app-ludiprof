import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Colors } from '@/design-system/colors';

const sections = [
  { name: 'Wizards', path: '/sample/wizards', description: 'Step-by-step guides and forms' },
  { name: 'Cards', path: '/sample/cards', description: 'Content containers and wrappers' },
  { name: 'Buttons', path: '/sample/buttons', description: 'Interactive click targets' },
];

export default function SampleScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subtitle}>Select a section to view its components.</Text>

      {sections.map((section) => (
        <Link href={section.path as any} key={section.name} asChild>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardTitle}>{section.name}</Text>
            <Text style={styles.cardDescription}>{section.description}</Text>
          </TouchableOpacity>
        </Link>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.light.background,
    flexGrow: 1,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.light.icon,
    marginBottom: 24,
  },
  card: {
    backgroundColor: Colors.light.secondary,
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.light.text,
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: Colors.light.icon,
  },
});
