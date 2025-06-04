import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
  ScrollView,
} from 'react-native';
import { Calendar } from 'react-native-calendars';

const ApplyLeaveScreen: React.FC = () => {
  const [selectedType, setSelectedType] = useState('Casual');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const leaveTypes = ['Casual', 'Earned', 'Other'];

  const handleApply = () => {
    if (selectedDate) {
      setModalVisible(true);
    } else {
      alert('Please select a date.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Apply Leave</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.label}>Choose Leave Type</Text>
        <View style={styles.radioContainer}>
          {leaveTypes.map((type) => (
            <TouchableOpacity
              key={type}
              onPress={() => setSelectedType(type)}
              style={styles.radioButtonRow}
            >
              <View style={styles.radioCircle}>
                {selectedType === type && <View style={styles.radioDot} />}
              </View>
              <Text style={styles.radioText}>{type} Leave</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Choose Dates</Text>
        <Calendar
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={
            selectedDate
              ? {
                  [selectedDate]: {
                    selected: true,
                    selectedColor: '#0A2C7F',
                  },
                }
              : {}
          }
          style={styles.calendar}
        />

        <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
          <Text style={styles.applyButtonText}>Apply Leave</Text>
        </TouchableOpacity>

        {/* Modal */}
        <Modal
          transparent
          visible={modalVisible}
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalBox}>
              <Pressable onPress={() => setModalVisible(false)} style={styles.closeButton}>
                <Text style={{ fontWeight: 'bold' }}>X</Text>
              </Pressable>
              <Text style={styles.successText}>Leave applied successfully</Text>
              <Text style={styles.checkmark}>✔️</Text>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

export default ApplyLeaveScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ddd',
  },
  header: {
    backgroundColor: '#14122E',
    paddingVertical: 20,
    marginBottom: 25,
  },
  heading: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    paddingHorizontal: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 8,
    fontSize: 14,
  },
  radioContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  radioButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    marginVertical: 4,
  },
  radioCircle: {
    height: 18,
    width: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  radioDot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#000',
  },
  radioText: {
    fontSize: 14,
  },
  calendar: {
    borderRadius: 10,
    elevation: 2,
    marginBottom: 30,
  },
  applyButton: {
    backgroundColor: '#0A2C7F',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: '#00000066',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: 260,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 10,
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    right: 12,
    top: 10,
    zIndex: 1,
  },
  successText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20,
    marginTop: 10,
    textAlign: 'center',
  },
  checkmark: {
    fontSize: 50,
    color: '#5A8DEE',
  },
});
