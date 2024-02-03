import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { Svg, Circle, Text as SvgText } from 'react-native-svg';
import logoIcon from '../assets/logoIcon.png';
import turbidity from '../assets/turbidity.png';
import ph from '../assets/ph.png';
import alert from '../assets/alert.png';

const HomeScreen = () => {
  const [showAlertIcon, setShowAlertIcon] = useState(false);
  const [phValue, setPhValue] = useState(8);  
  const [turbValue, setTurbValue] = useState(1);  

  // const handleAlertIconPress = () => {
  //   // Display alert message
  //   Alert.alert(
  //     'Alert',
  //     'pH is Acidic. It is not recommended to drink the water. Valve will automatically shut off.',
  //     [{ text: 'Understood', onPress: () => console.log('OK Pressed') }]
  //   );
  // };

  // if (phValue === 6 && turbValue === 5) {
  //   setShowAlertIcon(true);
<<<<<<< HEAD

=======
>>>>>>> 66931a8f7c717a865845add81f8dc2676f52af89
  // }

  const currentTime = new Date();
  const hour = currentTime.getHours();
  let greeting;
 
  if (hour < 12) {
    greeting = 'Good Morning!';
  } else if (hour < 18) {
    greeting = 'Good Afternoon!';
  } else {
    greeting = 'Good Evening!';
  }

  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentTime.toLocaleDateString(undefined, dateOptions);

  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        <View style={styles.accent}>
          {/* Date and Greetings */}
          <View style={styles.dateGreetingsContainer}>
            <Text style={styles.date}>{formattedDate}</Text>
            <Text style={styles.greetings}>{greeting}</Text>
          </View>
          {/* User Image */}
          <View style={styles.userImageContainer}>
            <Image source={logoIcon} style={styles.userImage} />
          </View>
          {/* Alert Icon */}
          {showAlertIcon && (
            <TouchableOpacity style={styles.alertIconContainer} onPress={handleAlertIconPress}>
              <Image source={alert} style={styles.alertIcon} />
            </TouchableOpacity>
          )}
        </View>

      </View>

      <View style={styles.fillOut}>
        <Text style={styles.title}>Alkaline Water</Text>
        <Text style={styles.title}>Monitoring System</Text>
        {/* Container 1 */}
        <View style={styles.container1}>
          {/* Left Section */}
          <View style={styles.leftSection1}>
            <Image source={ph} style={styles.icon} />
            <Text style={styles.containerTitle1}>pH</Text>
          </View>
          {/* Right Section */}
          <View style={styles.rightSection1}>
            {/* Circular Gauge */}
            <Svg width="100" height="100">
              {/* Background Circle */}
              <Circle
                cx="50"
                cy="50"
                r="45"
                stroke="#E1E1E1"
                strokeWidth="10"
                fill="transparent"
              />
              {/* pH Value Circle */}
              <Circle
                cx="50"
                cy="50"
                r="45"
                stroke="#7EA3CC"
                strokeWidth="10"
                strokeDasharray={`${(phValue / 15) * 282.5} 565`}
                strokeLinecap="butt"
                fill="transparent"
              />
              {/* Text Displaying pH Value */}
              <SvgText
                x="50%"
                y="50%"
                fontSize="16"
                textAnchor="middle"
                fill="#000"
                dy="8"
              >
                {phValue.toFixed(1)}
              </SvgText>
            </Svg>
          </View>
        </View>

        {/* Container 2 */}
        <View style={styles.container2}>
          {/* Left Section */}
          <View style={styles.leftSection2}>
            <Image source={turbidity} style={styles.icon} />
            <Text style={styles.containerTitle2}>TURBIDITY</Text>
          </View>
          {/* Right Section */}
          <View style={styles.rightSection2}>
           {/* Circular Gauge */}
           <Svg width="100" height="100">
              {/* Background Circle */}
              <Circle
                cx="50"
                cy="50"
                r="45"
                stroke="#E1E1E1"
                strokeWidth="10"
                fill="transparent"
              />
              {/* turbidity Value Circle */}
              <Circle
                cx="50"
                cy="50"
                r="45"
                stroke="#7EA3CC"
                strokeWidth="10"
                strokeDasharray={`${(turbValue / 5) * 282.5} 565`}
                strokeLinecap="butt"
                fill="transparent"
              />
              {/* Text Displaying turbidity Value */}
              <SvgText
                x="50%"
                y="50%"
                fontSize="16"
                textAnchor="middle"
                fill="#000"
                dy="8"
              >
                {turbValue.toFixed(1)}
              </SvgText>
            </Svg>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: '0%'
  },
  frame: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white', 
    paddingHorizontal: 10,
  },
  accent: {
    flex: 1,
    position: 'absolute', 
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#255C99', 
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  dateGreetingsContainer: {
    alignItems: 'flex-start',
    flex: 1,
    marginHorizontal: 10,
    marginTop: 70,
  },
  date: {
    color: 'white',
    fontSize: 12,
  },
  greetings: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userImageContainer: {
    alignItems: 'flex-end',
    bottom: '80%',
  },
  userImage: {
    width: 60,
    height: 75,
  },
  alertIconContainer: {
    alignItems: 'flex-start',
    bottom: '81%',
    left: '2%',
  },
  alertIcon: {
    width: 30,
    height: 30,
  },
  fillOut: {
    flex: 1,
    position: 'absolute', 
    top: '23%', 
    bottom: '3%',
    left: '7%',
    right: '7%',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign:'left',
    color: 'white',
  },
  container1: {
    flexDirection: 'row',
    backgroundColor: '#7EA3CC', 
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 50,
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 30,
  },
  leftSection1: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  rightSection1: {
    backgroundColor: '#F0f0f0',
    borderRadius: 30,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 35,
    paddingRight: 35,
    left: 20,
    alignItems: 'center',
  },
  pHValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#85A0AF',
    marginTop: 10,
  },
  icon: {
    width: 60,
    height: 60,
    marginTop: 30,
    marginBottom: 20,
    right: 20,
  },
  containerTitle1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    right: 20,
  },
  container2: {
    flexDirection: 'row',
    backgroundColor: '#7EA3CC', 
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 50,
    borderRadius: 30,
  },
  leftSection2: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  rightSection2: {
    backgroundColor: '#F0f0f0',
    borderRadius: 30,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 35,
    paddingRight: 35,
  },
  containerTitle2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    right: 20,
  },

});

export default HomeScreen;
