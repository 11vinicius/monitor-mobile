import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';

interface ToastrProps {
    message: string;
    color: string;
    textColor: string; 
}

function ToastrComponent (props: ToastrProps) {
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 50,
      width: '90%',
      left: '10%',
      right: '10%',
      padding: 15,
      borderRadius: 8,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: props.color,
      color: props.textColor,
      elevation: 5,
      zIndex: 1,
    },
    message: {
      color: "#FFF",
      fontSize: 16,
      flex: 1,
    },
    closeButton: {
      marginLeft: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    closeButtonText: {
      color: "#FFF",
      fontWeight: "bold",
      fontSize: 16,
    },
  });
  
  
  // useEffect(() => {
  //   Animated.timing(fadeAnim, {
  //     toValue: 1,
  //     duration: 300,
  //     useNativeDriver: true,
  //   }).start();

  //   const timer = setTimeout(() => {
  //     Animated.timing(fadeAnim, {
  //       toValue: 0,
  //       duration: 300,
  //       useNativeDriver: true,
  //     }).start();
  //   }, 3000);

  //   return () => clearTimeout(timer); 
  // }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{props.message}</Text>
    </View>
  );
};

export default ToastrComponent

