import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';

const DashboardScreen: React.FC = () => {
  const router = useRouter();

  const dashboardItems = [
    { title: 'Attendance', icon: '📅', route: 'attendance' },
    { title: 'My Leaves', icon: '🏖️', route: 'leaves' },
    { title: 'Notifications', icon: '🔔', route: 'notifications' },
    { title: 'Holidays', icon: '🎉', route: 'holidays' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      
      <ScrollView 
        contentContainerStyle={styles.gridContainer}
        showsVerticalScrollIndicator={false}
      >
        {dashboardItems.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.gridItem}
            onPress={() => {
              // TODO: Implement navigation to specific screens
              console.log(`Navigating to ${item.route}`);
            }}
          >
            <Text style={styles.gridItemIcon}>{item.icon}</Text>
            <Text style={styles.gridItemTitle}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C1C5F',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '45%',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  gridItemIcon: {
    fontSize: 50,
    marginBottom: 10,
  },
  gridItemTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default DashboardScreen; 