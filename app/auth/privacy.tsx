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

const PrivacyPolicyScreen: React.FC = () => {
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const router = useRouter();

  const handleContinue = () => {
    if (privacyAccepted) {
      router.push('/auth');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Privacy Policy</Text>
        
        <View style={styles.textContainer}>
          <Text style={styles.sectionTitle}>1. Information We Collect</Text>
          <Text style={styles.paragraph}>
            We collect information you provide directly to us, such as when you create an account, 
            use our services, or communicate with us.
          </Text>

          <Text style={styles.sectionTitle}>2. How We Use Your Information</Text>
          <Text style={styles.paragraph}>
            We use the information we collect to provide, maintain, and improve our services, 
            to communicate with you, and to personalize your experience.
          </Text>

          <Text style={styles.sectionTitle}>3. Information Sharing</Text>
          <Text style={styles.paragraph}>
            We do not sell or rent your personal information to third parties. 
            We may share information with service providers who perform services on our behalf.
          </Text>

          <Text style={styles.sectionTitle}>4. Data Security</Text>
          <Text style={styles.paragraph}>
            We implement appropriate technical and organizational measures to protect 
            the security of your personal information.
          </Text>

          <Text style={styles.sectionTitle}>5. Your Rights</Text>
          <Text style={styles.paragraph}>
            You have the right to access, correct, or delete your personal information. 
            Contact us to exercise these rights.
          </Text>
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox
            title="I have read and agree to the Privacy Policy"
            checked={privacyAccepted}
            onPress={() => setPrivacyAccepted(!privacyAccepted)}
            containerStyle={styles.checkbox}
            textStyle={styles.checkboxText}
          />
        </View>

        <TouchableOpacity 
          style={[
            styles.continueButton, 
            { 
              backgroundColor: privacyAccepted ? '#3D2C8D' : '#888',
            }
          ]}
          onPress={handleContinue}
          disabled={!privacyAccepted}
        >
          <Text style={styles.continueButtonText}>Continue to Login</Text>
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

export default PrivacyPolicyScreen; 