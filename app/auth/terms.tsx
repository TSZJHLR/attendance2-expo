import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { CheckBox } from '@rneui/themed';

const TermsAndConditionsScreen: React.FC = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const router = useRouter();

  const handleContinue = () => {
    if (termsAccepted) {
      router.push('/auth/privacy');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Terms & Conditions</Text>
        
        <View style={styles.textContainer}>
          <Text style={styles.sectionTitle}>1. Acceptance of Terms</Text>
          <Text style={styles.paragraph}>
            By accessing and using this application, you agree to be bound by these terms and conditions.
          </Text>

          <Text style={styles.sectionTitle}>2. User Responsibilities</Text>
          <Text style={styles.paragraph}>
            Users are responsible for maintaining the confidentiality of their account and password.
            You agree to accept responsibility for all activities that occur under your account.
          </Text>

          <Text style={styles.sectionTitle}>3. Data Usage</Text>
          <Text style={styles.paragraph}>
            We collect and use your personal information in accordance with our privacy policy.
            By using this app, you consent to our data collection and processing practices.
          </Text>

          <Text style={styles.sectionTitle}>4. Intellectual Property</Text>
          <Text style={styles.paragraph}>
            All content, features, and functionality are the exclusive property of the app developers
            and are protected by international copyright laws.
          </Text>
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox
            title="I have read and agree to the Terms & Conditions"
            checked={termsAccepted}
            onPress={() => setTermsAccepted(!termsAccepted)}
            containerStyle={styles.checkbox}
            textStyle={styles.checkboxText}
          />
        </View>

        <TouchableOpacity 
          style={[
            styles.continueButton, 
            { 
              backgroundColor: termsAccepted ? '#3D2C8D' : '#888',
            }
          ]}
          onPress={handleContinue}
          disabled={!termsAccepted}
        >
          <Text style={styles.continueButtonText}>Continue to Privacy Policy</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C1C5F',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  textContainer: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 5,
  },
  paragraph: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 10,
    lineHeight: 20,
  },
  checkboxContainer: {
    marginBottom: 20,
  },
  checkbox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  checkboxText: {
    color: '#fff',
    fontWeight: 'normal',
  },
  continueButton: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TermsAndConditionsScreen; 