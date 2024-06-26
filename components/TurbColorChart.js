import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";

const TurbColorChart = ({ isVisible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.chartContainer}>
        <View style={styles.chartContent}>
          {/* Title and Status */}
          <View style={styles.header}>
            <Text style={styles.title}>Turbidity Color Chart</Text>
          </View>

          {/* pH Color Boxes */}
          <View style={styles.colorBoxesContainer}>
            <View style={[styles.colorBox, { backgroundColor: "#BB8E4D" }]}>
              <Text style={styles.boxText}>10</Text>
            </View>
            <View style={[styles.colorBox, { backgroundColor: "#C7A26B" }]}>
              <Text style={styles.boxText}>9</Text>
            </View>
            <View style={[styles.colorBox, { backgroundColor: "#D3B589" }]}>
              <Text style={styles.boxText}>8</Text>
            </View>
            <View style={[styles.colorBox, { backgroundColor: "#DABF9E" }]}>
              <Text style={styles.boxText}>7</Text>
            </View>
            <View style={[styles.colorBox, { backgroundColor: "#E2D0B0" }]}>
              <Text style={styles.boxText}>6</Text>
            </View>
            <View style={[styles.colorBox, { backgroundColor: "#EADDC4" }]}>
              <Text style={styles.boxText}>5</Text>
            </View>
            <View style={[styles.colorBox, { backgroundColor: "#F2EBDA" }]}>
              <Text style={styles.boxText}>4</Text>
            </View>
            <View style={[styles.colorBox, { backgroundColor: "#F7F5E5" }]}>
              <Text style={styles.boxText}>3</Text>
            </View>
            <View style={[styles.colorBox, { backgroundColor: "#FFFEF7" }]}>
              <Text style={styles.boxText}>2</Text>
            </View>
            <View style={[styles.colorBox, { backgroundColor: "#FFFFFF" }]}>
              <Text style={styles.boxText}>1</Text>
            </View>
          </View>

          {/* Arrow Indicator */}
          <View style={styles.indicatorContainer}>
            <View style={styles.indicator1} />
            <View style={styles.indicator2} />
          </View>

          {/* Indicator Text */}
          <View style={styles.indicatorDesContainer}>
            <Text style={styles.indicatorDes1}>Not Recommended</Text>
            <Text style={styles.indicatorDes2}> Acceptable Value for</Text>
          </View>

          {/* Indicator Text */}
          <View style={styles.indicatorDes2Container}>
            <Text style={styles.indicatorDes22}>Drinking Water</Text>
          </View>

          {/* Close Button */}
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  chartContent: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    width: "85%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  status: {
    marginRight: 35,
    fontSize: 16,
  },
  colorBoxesContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 10,
  },
  colorBox: {
    width: 30,
    height: 30,
    borderRadius: 4,
    marginHorizontal: 5.5,
    alignItems: "center",
    justifyContent: "center",
  },
  boxText: {
    color: "black",
    fontWeight: "medium",
    fontSize: 16,
  },

  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 325,
    justifyContent: "space-between",
    marginBottom: 5,
  },

  indicator1: {
    width: 145,
    height: 10,
    borderWidth: 2,
    borderTopWidth: 0,
  },

  indicator2: {
    width: 148,
    height: 10,
    borderWidth: 2,
    borderTopWidth: 0,
  },

  indicatorDesContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 320,
    justifyContent: "space-between",
  },

  indicatorDes1: {
    color: "#7EA3CC",
    fontWeight: "600",
  },

  indicatorDes2: {
    color: "#7EA3CC",
    marginRight: 27,
    fontWeight: "600",
  },

  indicatorDes2Container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: 287,
    marginBottom: 20,
  },

  indicatorDes22: {
    color: "#7EA3CC",
    marginRight: 27,
    fontWeight: "600",
  },

  button: {
    backgroundColor: "#255C99",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default TurbColorChart;
