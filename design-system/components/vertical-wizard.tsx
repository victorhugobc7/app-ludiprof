import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Colors } from '../colors';
import { SharedStyles, Fonts } from '../styles';

export type WizardStep = {
  title: string;
  description?: string;
  content: React.ReactNode;
};

interface VerticalWizardProps {
  steps: WizardStep[];
  currentStepIndex?: number;
  onStepChange?: (index: number) => void;
  onFinish?: () => void;
}

export function VerticalWizard({ steps, currentStepIndex = 0, onStepChange, onFinish }: VerticalWizardProps) {
  const [activeStep, setActiveStep] = useState(currentStepIndex);

  const handleStepChange = (index: number) => {
    setActiveStep(index);
    if (onStepChange) onStepChange(index);
  };

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      handleStepChange(activeStep + 1);
    } else if (onFinish) {
      onFinish();
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      handleStepChange(activeStep - 1);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {steps.map((step, index) => {
        const isActive = index === activeStep;
        const isCompleted = index < activeStep;

        return (
          <View key={index} style={styles.stepContainer}>
            {/* Left side: line and circle */}
            <View style={styles.indicatorContainer}>
              <View style={[styles.circle, isActive && styles.activeCircle, isCompleted && styles.completedCircle]}>
                <Text style={[styles.circleText, (isActive || isCompleted) && styles.activeCircleText]}>
                  {index + 1}
                </Text>
              </View>
              {index !== steps.length - 1 && (
                <View style={[styles.line, isCompleted && styles.completedLine]} />
              )}
            </View>

            {/* Right side: Content */}
            <View style={styles.contentContainer}>
              <TouchableOpacity onPress={() => handleStepChange(index)} activeOpacity={0.7}>
                <Text style={[styles.title, isActive && styles.activeTitle]}>{step.title}</Text>
                {step.description && <Text style={styles.description}>{step.description}</Text>}
              </TouchableOpacity>

              {isActive && (
                <View style={styles.activeContent}>
                  {step.content}
                  <View style={styles.buttonRow}>
                    <TouchableOpacity
                      style={[styles.button, styles.backButton, index === 0 && styles.disabledButton]}
                      onPress={handleBack}
                      disabled={index === 0}
                    >
                      <Text style={[styles.buttonText, styles.backButtonText]}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleNext}>
                      <Text style={styles.buttonText}>
                        {index === steps.length - 1 ? 'Finish' : 'Next'}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...SharedStyles.container,
    padding: 16,
  },
  stepContainer: {
    ...SharedStyles.row,
  },
  indicatorContainer: {
    alignItems: 'center',
    marginRight: 16,
  },
  circle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.light.border,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  activeCircle: {
    backgroundColor: Colors.light.primary,
  },
  completedCircle: {
    backgroundColor: Colors.light.primary,
  },
  circleText: {
    color: Colors.light.icon,
    fontWeight: 'bold',
  },
  activeCircleText: {
    color: '#fff',
  },
  line: {
    width: 2,
    flex: 1,
    backgroundColor: Colors.light.border,
    marginTop: -8,
    marginBottom: -8,
    zIndex: 0,
  },
  completedLine: {
    backgroundColor: Colors.light.primary,
  },
  contentContainer: {
    flex: 1,
    paddingBottom: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.light.disabledText,
    marginBottom: 4,
  },
  activeTitle: {
    color: Colors.light.primary,
  },
  description: {
    fontSize: 14,
    color: Colors.light.icon,
    marginBottom: 12,
  },
  activeContent: {
    marginTop: 12,
    padding: 16,
    backgroundColor: Colors.light.secondary,
    borderRadius: 8,
  },
  buttonRow: {
    ...SharedStyles.row,
    justifyContent: 'flex-end',
    marginTop: 16,
    gap: 12,
  },
  button: {
    backgroundColor: Colors.light.primary,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  backButton: {
    backgroundColor: Colors.light.border,
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  backButtonText: {
    color: '#333',
  },
});
