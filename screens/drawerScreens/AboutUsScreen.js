import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import Swiper from "react-native-swiper";

import ContainerBG from "@assets/images/background-container.png";
import compLogo from "@assets/images/logos/company-logo.png";
import agripa from "@assets/images/members/agripa.png";
import delapeña from "@assets/images/members/dela-peña.png";
import murao from "@assets/images/members/murao.png";
import naldo from "@assets/images/members/naldo.png";
import vasquez from "@assets/images/members/vasquez.png";

const AboutUsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        <ImageBackground source={ContainerBG} style={styles.containerBG} />
        <View style={styles.accent}>
          <Text style={styles.title}>About Us</Text>
        </View>
      </View>

      <View style={styles.fillOut}>
        <Swiper horizontal={false}>
          <View style={styles.descriptionContainer}>
            <Image source={compLogo} style={styles.compLogo} />
            <Text style={styles.compDescription}>
              Aquasynapse is a start-up company based in Metro Manila,
              Philippines focused on providing a drinking water quality
              management control system with a Mobile application that allows
              the water refilling station businesses to solve the problem
              concerning secondary contamination. The company consists of five
              Computer Engineering students from Technological Institute of the
              Philippines - Quezon City.{"\n\n\n"}
              The company also has a feasible solution and is dedicated to
              providing full assistance to water refilling station businesses in
              providing a drinking water quality monitoring system with a
              control system for them to consistently provide safe and clean
              drinking water to their valued customers.
            </Text>
          </View>

          <View style={styles.memberContainer}>
            <Text style={styles.teamHeader}>The Team</Text>
            <View style={styles.deetsContainer}>
              <Image source={agripa} style={styles.formalPic} />
              <Text style={styles.memberDeets}>
                Vince Kurt C. Agripa{"\n"}
                Data Science{"\n"}
                qvkcagripa@tip.edu.ph
              </Text>
            </View>
            <View style={styles.deetsContainer}>
              <Image source={delapeña} style={styles.formalPic} />
              <Text style={styles.memberDeets}>
                Chrisjames A. Dela Peña {"\n"}
                Intelligent System{"\n"}
                qcadelapena@tip.edu.ph
              </Text>
            </View>
            <View style={styles.deetsContainer}>
              <Image source={murao} style={styles.formalPic} />
              <Text style={styles.memberDeets}>
                Christian Ivan P. Murao{"\n"}
                Intelligent System{"\n"}
                qcipmurao@tip.edu.ph
              </Text>
            </View>
            <View style={styles.deetsContainer}>
              <Image source={naldo} style={styles.formalPic} />
              <Text style={styles.memberDeets}>
                Jervy B. Naldo{"\n"}
                System Administration{"\n"}
                qjbnaldo@tip.edu.ph
              </Text>
            </View>
            <View style={styles.deetsContainer}>
              <Image source={vasquez} style={styles.formalPic} />
              <Text style={styles.memberDeets}>
                Jun Carl R. Vasquez{"\n"}
                Railway Engineering{"\n"}
                qjcrvasquez@tip.edu.ph
              </Text>
            </View>
          </View>
        </Swiper>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: 0,
  },
  containerBG: {
    flex: 1,
  },
  frame: {
    flex: 1,
    position: "relative",
    backgroundColor: "white",
  },
  accent: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: "70%",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: "#255C99",
    justifyContent: "center",
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  backIconContainer: {
    position: "absolute",
    top: 30,
    left: 20,
  },
  backIcon: {
    width: 30,
    height: 30,
    tintColor: "white",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    top: 0,
  },
  fillOut: {
    flex: 1,
    position: "absolute",
    top: "5%",
    bottom: "2%",
    left: "5%",
    right: "5%",
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 30,
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: "center",
  },
  compLogo: {
    alignSelf: "center",
    height: 200,
    width: 200,
    borderRadius: 40,
    resizeMode: "contain",
  },
  compDescription: {
    fontSize: 16,
    paddingHorizontal: 30,
    textAlign: "justify",
    paddingBottom: 30,
    paddingTop: 20,
  },
  teamHeader: {
    marginBottom: 10,
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  memberContainer: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 30,
    paddingHorizontal: 30,
  },
  deetsContainer: {
    flexDirection: "row",
    backgroundColor: "#255C99",
    borderRadius: 30,
    paddingVertical: 10,
    marginBottom: 20,
    borderColor: "black",
    elevation: 5,
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 10,
  },
  formalPic: {
    height: 85,
    width: 85,
    resizeMode: "contain",
    borderRadius: 24,
  },
  memberDeets: {
    fontSize: 16,
    color: "white",
  },
});

export default AboutUsScreen;
