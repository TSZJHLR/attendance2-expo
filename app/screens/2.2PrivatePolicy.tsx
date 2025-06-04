import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

const PrivatePolicy: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Heading */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Private Policy</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView style={styles.scrollArea} contentContainerStyle={styles.content}>
        <Text style={styles.paragraph}>
        This Privacy Policy describes how [Company Name] collects, uses, and protects the information you provide when using the UTU Attendance App.
        </Text>

        <Text style={styles.heading}>1. Information Collection</Text>
        <Text style={styles.paragraph}>
1.1. Personal Information: When you register and use the UTU Attendance App, we may collect personal information such as your name, phone number, and profile details.        </Text>
        <Text style={styles.paragraph}>1.2. Attendance Data: The app collects attendance data, including timestamps and location information through geofencing technology when you mark attendance.</Text>
        <Text style={styles.paragraph}>1.3. Leave Application: Information submitted when applying for leaves, including leave type, duration, and reason, is stored within the app.</Text>
        <Text style={styles.heading}>2. Use of Information</Text>
        <Text style={styles.paragraph}>
2.1. Attendance Tracking: Attendance data, including location information, is used solely for the purpose of managing employee attendance records.        </Text>
        <Text style={styles.paragraph}>
2.2. Leave Management: Information provided during leave applications is used to process and manage employee leaves in accordance with company policies.        </Text>
<Text style={styles.paragraph}>
2.3. Profile Information: Personal details in your profile are used for administrative purposes related to employment, such as contact information and job role.  </Text>

        <Text style={styles.heading}>3. Data Security</Text>
        <Text style={styles.paragraph}>
3.1. We are committed to ensuring the security of your information. The UTU Attendance App employs industry-standard security measures to protect your data from unauthorized access, alteration, disclosure, or destruction.</Text>
        <Text style={styles.paragraph}>
          3.2. Access to your personal information is restricted to authorized personnel who have a need to access this data for the purposes outlined in this Privacy Policy.
        </Text>

        <Text style={styles.heading}>4. Information Sharing</Text>
        <Text style={styles.paragraph}>
        4.1. We do not sell, trade, or otherwise transfer your personal information to outside parties unless required for legal compliance, law enforcement, or as necessary for the operation and maintenance of the app.
        </Text>
        <Text style={styles.paragraph}>
4.2. In certain instances, we may share aggregated and anonymized data for analytical purposes or reporting.        </Text>

        <Text style={styles.heading}>5. Third-Party Services</Text>
        <Text style={styles.paragraph}>
5.1. The UTU Attendance App may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third-party sites.        </Text>
        <Text style={styles.heading}>6. Consent</Text>
        <Text style={styles.paragraph}>
6.1. By using the UTU Attendance App, you consent to the collection and use of your information as outlined in this Privacy Policy.        </Text>
        <Text style={styles.heading}>7. Changes to Privacy Policy</Text>
        <Text style={styles.paragraph}>
7.1. We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page, and your continued use of the app after such modifications signifies your acceptance of the updated Privacy Policy.        </Text>

        <Text style={styles.heading}>8. Contact Us</Text>
        <Text style={styles.paragraph}>
8.1. If you have any questions or concerns regarding this Privacy Policy or the handling of your personal information, please contact us at [contact information].</Text>
<Text style={styles.paragraph}>
By using the UTU Attendance App, you acknowledge that you have read, understood, and agree to the terms of this Privacy Policy.</Text>
      </ScrollView>
    </View>
  );
};

export default PrivatePolicy;

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
