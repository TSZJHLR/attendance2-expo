import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const AttendanceScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileCard}>
        <Image
          source={{ uri: '' }} 
          style={styles.profileImage}
        />
        <Text style={styles.name}>Sujen Dangol</Text>
        <Text style={styles.role}>BCS Student</Text>
      </View>

      {/* Subject Card */}
      <View style={styles.subjectCard}>
        <Text style={styles.sectionTitle}>Your Subject</Text>
        <TouchableOpacity style={styles.subjectButton}>
          <Text style={styles.subjectText}>📘 Capstone</Text>
        </TouchableOpacity>
        <Text style={styles.dateText}>Wednesday 26th March 2025</Text>
        <Text style={styles.timeText}>07:30 - 08:40</Text>

        <TouchableOpacity style={styles.checkOutButton}>
          <Text style={styles.checkOutText}>Check Out</Text>
        </TouchableOpacity>

        <View style={styles.checkTimes}>
          <Text>Check-in: 08:30 AM</Text>
          <Text>Check-Out: 00:00 --</Text>
        </View>
      </View>

      {/* Attendance Stats */}
      <View style={styles.statsContainer}>
        <StatCard title="Present" value="22" bgColor="#c1f5cf" />
        <StatCard title="Absent" value="03" bgColor="#fde2e4" />
        <StatCard title="Leaves" value="02" bgColor="#fae1dd" />
        <StatCard title="Late In" value="04" bgColor="#e0c3fc" />
        <StatCard title="Early Out" value="02" bgColor="#ffe1e1" />
        <StatCard title="Average Hrs." value="7.5" bgColor="#fff1c1" />
      </View>
    </ScrollView>
  );
};

// Reusable Stat Card
const StatCard = ({
  title,
  value,
  bgColor,
}: {
  title: string;
  value: string;
  bgColor: string;
}) => (
  <View style={[styles.statCard, { backgroundColor: bgColor }]}>
    <Text style={styles.statTitle}>{title}</Text>
    <Text style={styles.statValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  profileCard: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#1a1a40',
    borderRadius: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  role: {
    color: '#ccc',
    fontSize: 14,
  },
  subjectCard: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 16,
    marginBottom: 20,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subjectButton: {
    backgroundColor: '#1a1a40',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginBottom: 8,
  },
  subjectText: {
    color: '#fff',
    fontSize: 14,
  },
  dateText: {
    fontSize: 14,
    color: '#555',
  },
  timeText: {
    fontSize: 16,
    marginVertical: 8,
    fontWeight: '600',
  },
  checkOutButton: {
    borderWidth: 1,
    borderColor: '#1a1a40',
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  checkOutText: {
    color: '#1a1a40',
    fontWeight: '600',
  },
  checkTimes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    width: '48%',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  statTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default AttendanceScreen;
