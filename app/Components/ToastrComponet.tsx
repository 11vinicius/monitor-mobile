import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';


export enum ToastType {
    success = 'success',
    error = 'error',
    warning = 'warning'
}

interface ToastrProps {
    message: string;
    type:  ToastType 
}

function ToastrComponent (props: ToastrProps) {
  const [fadeAnim] = useState(new Animated.Value(0)); 

  const styles = StyleSheet.create({
    container: {
      position: "absolute",
      top: 50,
      left: 20,
      padding: 15,
      borderRadius: 8,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
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
  
  
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, 3000);

    return () => clearTimeout(timer); 
  }, [fadeAnim]);

  const backgroundColor  = {
    success: "#4CAF50",
    error: "#F44336",
    warning: "#FFC107",
  }[props.type];

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim, backgroundColor }]}>
      <Text style={styles.message}>{props.message}</Text>
    </Animated.View>
  );
};

export default ToastrComponent

