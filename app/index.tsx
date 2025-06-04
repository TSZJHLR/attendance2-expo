import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { CheckBox } from '@rneui/themed';

const TermsAndConditionsModal: React.FC<{
  visible: boolean;
  onClose: () => void;
  onAccept: () => void;
}> = ({ visible, onClose, onAccept }) => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <ScrollView style={styles.modalContent}>
          <Text style={styles.modalTitle}>Terms & Conditions</Text>
          <Text style={styles.modalText}>
            {/* Add your terms and conditions text here */}
            These are the terms and conditions for using our application. 
            By accepting, you agree to our policies and guidelines.
          </Text>

          <Text style={styles.modalTitle}>Privacy Policy</Text>
          <Text style={styles.modalText}>
            {/* Add your privacy policy text here */}
            We are committed to protecting your privacy. 
            This policy explains how we collect, use, and safeguard your personal information.
          </Text>

          <View style={styles.checkboxContainer}>
            <CheckBox
              title="I accept the Terms & Conditions"
              checked={termsAccepted}
              onPress={() => setTermsAccepted(!termsAccepted)}
              containerStyle={styles.checkbox}
            />
            <CheckBox
              title="I accept the Privacy Policy"
              checked={privacyAccepted}
              onPress={() => setPrivacyAccepted(!privacyAccepted)}
              containerStyle={styles.checkbox}
            />
          </View>

          <TouchableOpacity
            style={[
              styles.acceptButton,
              {
                backgroundColor: 
                  termsAccepted && privacyAccepted 
                    ? '#3D2C8D' 
                    : '#888',
              },
            ]}
            onPress={() => {
              if (termsAccepted && privacyAccepted) {
                onAccept();
              }
            }}
            disabled={!(termsAccepted && privacyAccepted)}
          >
            <Text style={styles.acceptButtonText}>Accept and Continue</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Modal>
  );
};

const WelcomeScreen: React.FC = () => {
  const [showTermsModal, setShowTermsModal] = useState(false);
  const router = useRouter();

  const handleContinue = () => {
    router.push('/auth');
  };

  return (
    <View style={styles.container}>
      {/* Terms & Conditions Modal */}
      <TermsAndConditionsModal
        visible={showTermsModal}
        onClose={() => setShowTermsModal(false)}
        onAccept={() => {
          setShowTermsModal(false);
          handleContinue();
        }}
      />

      {/* Logo and Title */}
      <View style={styles.header}>
        <View style={styles.logoBox}>
          <Text style={styles.logo}>🟪</Text>
        </View>
        <Text style={styles.title}>Scholars</Text>
      </View>

      {/* Handshake Image */}
      <View style={styles.handshakeContainer}>
        <Text style={styles.handshake}>🤝🏿</Text>
      </View>

      {/* Tagline */}
      <Text style={styles.mainText}>Learning Together,{"\n"}Growing Together</Text>
      <Text style={styles.subText}>
        Every school day is a step toward a brighter future{"\n"}attend, engage, and grow!
      </Text>

      {/* Arrow Button */}
      <TouchableOpacity 
        style={styles.arrowButton}
        onPress={() => setShowTermsModal(true)}
      >
        <Text style={styles.arrow}>↑</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C1C5F', 
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
  },
  header: {
    marginTop: 50,
    alignItems: 'center',
  },
  logoBox: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 8,
    marginBottom: 6,
  },
  logo: {
    fontSize: 20,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  handshakeContainer: {
    marginTop: 40,
  },
  handshake: {
    fontSize: 100,
  },
  mainText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  subText: {
    color: '#ccc',
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 24,
    marginTop: 12,
  },
  arrowButton: {
    backgroundColor: '#3D2C8D',
    padding: 16,
    borderRadius: 30,
  },
  arrow: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  // Modal Styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'justify',
  },
  checkboxContainer: {
    marginVertical: 20,
  },
  checkbox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  acceptButton: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  acceptButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
}); 