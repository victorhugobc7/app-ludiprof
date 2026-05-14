import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Colors } from '@/design-system/colors';

export default function CardsSampleScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sample Card Placeholder</Text>
        <View style={styles.card}>
          <Text style={styles.cardText}>Place your custom components in sections like this.</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.light.background,
    flexGrow: 1,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: Colors.light.text,
  },
  card: {
    backgroundColor: Colors.light.secondary,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
  cardText: {
    fontSize: 16,
    color: Colors.light.text,
  },
});