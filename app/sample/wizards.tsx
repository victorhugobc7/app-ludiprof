import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { VerticalWizard } from '@/design-system/components/vertical-wizard';
import { Colors } from '@/design-system/colors';

export default function WizardsSampleScreen() {
  const wizardSteps = [
    {
      title: 'Personal Info',
      description: 'Enter your basic details',
      content: <Text style={styles.text}>Form inputs for name and email go here.</Text>,
    },
    {
      title: 'Preferences',
      description: 'Select your choices',
      content: <Text style={styles.text}>Options and checkboxes go here.</Text>,
    },
    {
      title: 'Review',
      description: 'Almost done!',
      content: <Text style={styles.text}>Review the information and submit.</Text>,
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Vertical Wizard</Text>
        <View style={styles.card}>
          <VerticalWizard steps={wizardSteps} onFinish={() => alert('Wizard Completed!')} />
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
  text: {
    color: Colors.light.text,
  }
});