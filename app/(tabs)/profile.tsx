import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen: React.FC = () => {
  const router = useRouter();

  const profileOptions = [
    { 
      title: 'Edit Profile', 
      icon: 'create-outline', 
      onPress: () => console.log('Edit Profile') 
    },
    { 
      title: 'Change Password', 
      icon: 'lock-closed-outline', 
      onPress: () => console.log('Change Password') 
    },
    { 
      title: 'Notifications', 
      icon: 'notifications-outline', 
      onPress: () => console.log('Notifications') 
    },
    { 
      title: 'Logout', 
      icon: 'log-out-outline', 
      onPress: () => router.replace('/auth') 
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.profileImagePlaceholder}>
            <Image 
              source={require('../../assets/images/profile-placeholder.png')} 
              style={styles.profileImage} 
              resizeMode="contain"
            />
          </View>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileEmail}>john.doe@scholars.edu</Text>
        </View>

        {/* Profile Options */}
        <View style={styles.optionsContainer}>
          {profileOptions.map((option, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.optionItem}
              onPress={option.onPress}
            >
              <Ionicons 
                name={option.icon as any} 
                size={24} 
                color="#fff" 
              />
              <Text style={styles.optionText}>{option.title}</Text>
              <Ionicons 
                name="chevron-forward-outline" 
                size={24} 
                color="#fff" 
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Black background
  },
  scrollContent: {
    flexGrow: 1,
    paddingTop: 50,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  profileImagePlaceholder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#fff',
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    elevation: 10,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 75,
  },
  profileName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    letterSpacing: 1,
  },
  profileEmail: {
    color: '#888',
    fontSize: 16,
  },
  optionsContainer: {
    paddingHorizontal: 20,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 15,
    flex: 1,
    letterSpacing: 1,
  },
});

export default ProfileScreen; 