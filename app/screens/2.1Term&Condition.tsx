import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

const TermsAndConditionsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Heading */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Terms & Conditions</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView style={styles.scrollArea} contentContainerStyle={styles.content}>
        <Text style={styles.paragraph}>
          Welcome to the UTU Attendance App! These terms and conditions outline the rules and regulations for the use of the app.
By accessing this app, we assume you accept these terms and conditions in full. Do not continue to use the UTU Attendance App if you do not accept all of the terms and conditions stated on this page.
        </Text>

        <Text style={styles.heading}>1. Usage</Text>
        <Text style={styles.paragraph}>
          The UTM Attendance App is provided to employees of [Company Name] for the sole purpose of managing attendance, leave, and related HR activity.
        </Text>
        <Text style={styles.paragraph}>
          1.1 You agree to use the app in compliance with all applicable laws, rules, and regulations.
        </Text>
        <Text style={styles.paragraph}>1.2. You agree to use the app in compliance with all applicable laws, rules, and regulations.</Text>

        <Text style={styles.heading}>2. Account Registration</Text>
        <Text style={styles.paragraph}>
          2.1 To access the system, you must register using provided credentials or OTP (One Time Password).
        </Text>
        <Text style={styles.paragraph}>
          2.2 You’re responsible for maintaining the confidentiality of your credentials and for any use of your account.
        </Text>

        <Text style={styles.heading}>3. Attendance Tracking</Text>
        <Text style={styles.paragraph}>
3.1. The app utilizes geofencing technology to track your location when marking attendance. By using the app, you consent to this location tracking feature..        </Text>
        <Text style={styles.paragraph}>
          3.2 The accuracy of location-based attendance may vary based on network and GPS conditions.
        </Text>

        <Text style={styles.heading}>4. Leave Application</Text>
        <Text style={styles.paragraph}>
          4.1 The app can be used to apply for leaves. All leave applications are subject to company policies and approval.
        </Text>
        <Text style={styles.paragraph}>
        4.2. The company reserves the right to reject or modify leave requests based on business needs and policies.
        </Text>

        <Text style={styles.heading}>5. Profile</Text>
        <Text style={styles.paragraph}>
          5.1 You are responsible for providing accurate and up-to-date information in your profile.
        </Text>
        <Text style={styles.paragraph}>
         5.2. The company may use the information provided in your profile for administrative purposes related to employment.
        </Text>

        <Text style={styles.heading}>6. Updates</Text>
        <Text style={styles.paragraph}>
          6.1 The app may display updates or changes related to company policies and HR procedures.
        </Text>
          <Text style={styles.paragraph}>
         6.2. Company holidays may be subject to change based on business requirements.
        </Text>

        <Text style={styles.heading}>7. Disclaimer</Text>
        <Text style={styles.paragraph}>
         7.1. The UTU Attendance App is provided "as is" without any warranties, express or implied. The company does not guarantee the accuracy, reliability, or availability of the app at all times.
        </Text>

        <Text style={styles.heading}>8. Modification of Terms</Text>
        <Text style={styles.paragraph}>
8.1. The company reserves the right to revise these terms and conditions at any time without prior notice. Your continued use of the app after any changes indicates your acceptance of the modified terms.
        </Text>

        <Text style={styles.heading}>9. Termination</Text>
        <Text style={styles.paragraph}>
      9.1. The company reserves the right to terminate access to the UTU Attendance App for any user who violates these terms and conditions.
By using the UTU Attendance App, you acknowledge that you have read, understood, and agree to abide by these terms and conditions.

        </Text>
      </ScrollView>
    </View>
  );
};

export default TermsAndConditionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  scrollArea: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 6,
    color: '#000',
  },
  paragraph: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginBottom: 10,
  },
});
