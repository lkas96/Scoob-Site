import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import { HStack, Stack, VStack } from "react-native-flex-layout";
import { Text } from "@react-native-material/core";
import { COLORS } from "../../constants";
import { Button } from "@rneui/themed";

const ChildInfoPage = ({ route, navigation }) => {
  const generateQR = () => {
	  navigation.navigate("ThirdPartyQR", route.params);
  };
  const selfPickUpHandler = () => {
	  Alert.alert("Changed");
  };
  const pickUpHandler = () => {
	  Alert.alert("Picking up");
  };
  const arrivedHandler = () => {
	  Alert.alert("Arrived");
  };

  const space = "     ";	  
  const [subscriptionStatus, setSubscriptionStatus] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  const lambdaEndpoint =
    "https://2teci17879.execute-api.ap-southeast-1.amazonaws.com/dev";

  useEffect(() => {
    // Fetch data from the Lambda function when the component mounts
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`${lambdaEndpoint}/student/${route.params.studentid}`)
      .then((response) => {
        // Handle the response and set the subscription status in the state
		console.log("API Response testing:", response.data); // Log the response data
        setSubscriptionStatus(response.data.subscription);
      })
      .catch((error) => {
        console.error("Error fetching subscription status:", error);
      });
  };

  const toggleSubscriptionStatus = () => {
    const newStatus = subscriptionStatus === "Yes" ? "No" : "Yes";
    setIsUpdating(true);

    // Show a confirmation prompt before proceeding with the status update
    Alert.alert(
      "Confirm Status Change",
      `Are you sure you want to ${
        newStatus === "Yes" ? "subscribe" : "unsubscribe"
      } this child?`,
      [
        {
          text: "Cancel",
          style: "cancel",
          onPress: () => {
            setIsUpdating(false);
          },
        },
        {
          text: "Confirm",
          onPress: () => {
            // Proceed with the status update
            updateSubscriptionStatus(newStatus);
          },
        },
      ],
      { cancelable: false }
    );
  };

  const updateSubscriptionStatus = (newStatus) => {
    // Make an API call to update the subscription status in the database
    axios
      .put(`${lambdaEndpoint}/updateSubscription/${route.params.studentid}`, {
        subscription: newStatus,
      })
      .then((response) => {
        // Handle the response and update the subscription status in the state
        setSubscriptionStatus(newStatus);
        setIsUpdating(false);
      })
      .catch((error) => {
        console.error("Error updating subscription status:", error);
        setIsUpdating(false);
      });
  };

return (
    <SafeAreaView style={styles.container}>
      <View style={styles.studentDetails}>
        <VStack m={10} spacing={5}>
          <Text variant="h2" style={styles.studentName}>
            {route.params.fname} {route.params.lname}
          </Text>
          <Text variant="h6" style={styles.details}>
            {route.params.studentid}
          </Text>
          <Text variant="h6" style={styles.details}>
            {route.params.class}
          </Text>
          <Text style={styles.details}>
            Subscription Status: {subscriptionStatus === "Yes" ? "Subscribed" : "Not Subscribed"}
          </Text>
        </VStack>
      </View>

      <View style={styles.buttonStack}>
        <VStack>
          <Button
            buttonStyle={{
              width: "100%",
              backgroundColor: COLORS.primary,
              borderRadius: 8,
              height: 50,
            }}
            containerStyle={{ margin: 5 }}
            disabledStyle={{
              borderWidth: 2,
              borderColor: "#00F",
            }}
            disabledTitleStyle={{ color: "#00F" }}
            linearGradientProps={null}
            iconContainerStyle={{ background: "#000" }}
            loadingProps={{ animating: true }}
            loadingStyle={{}}
            onPress={selfPickUpHandler}
            title="Change to Self Pickup"
            titleProps={{}}
            titleStyle={{ marginHorizontal: 5, color: COLORS.black }}
          />
          <HStack>
            <Button
              buttonStyle={{
                width: 150,
                backgroundColor: COLORS.primary,
                borderRadius: 8,
                height: 50,
              }}
              containerStyle={{ margin: 5 }}
              disabledStyle={{
                borderWidth: 2,
                borderColor: "#00F",
              }}
              disabledTitleStyle={{ color: "#00F" }}
              linearGradientProps={null}
              iconContainerStyle={{ background: "#000" }}
              loadingProps={{ animating: true }}
              loadingStyle={{}}
              onPress={pickUpHandler}
              title="Self"
              titleProps={{}}
              titleStyle={{ marginHorizontal: 5, color: COLORS.black }}
            />
            <Button
              buttonStyle={{
                width: 150,
                backgroundColor: COLORS.primary,
                borderRadius: 8,
                height: 50,
              }}
              containerStyle={{ margin: 5 }}
              disabledStyle={{
                borderWidth: 2,
                borderColor: "#00F",
              }}
              disabledTitleStyle={{ color: "#00F" }}
              linearGradientProps={null}
              iconContainerStyle={{ background: "#000" }}
              loadingProps={{ animating: true }}
              loadingStyle={{}}
              onPress={generateQR}
              title="Third Party"
              titleProps={{}}
              titleStyle={{ marginHorizontal: 5, color: COLORS.black }}
            />
          </HStack>
          <Button
            buttonStyle={{
              width: "100%",
              backgroundColor: COLORS.primary,
              borderRadius: 8,
              height: 50,
            }}
            containerStyle={{ margin: 5 }}
            disabledStyle={{
              borderWidth: 2,
              borderColor: "#00F",
            }}
            disabledTitleStyle={{ color: "#00F" }}
            linearGradientProps={null}
            iconContainerStyle={{ background: "#000" }}
            loadingProps={{ animating: true }}
            loadingStyle={{}}
            onPress={arrivedHandler}
            title="Arrived"
            titleProps={{}}
            titleStyle={{ marginHorizontal: 5, color: COLORS.black }}
          />
          <TouchableOpacity
            onPress={toggleSubscriptionStatus}
            style={styles.buttonStyle}
            disabled={isUpdating}
          >
            <Text style={styles.buttonTextStyle}>
              {subscriptionStatus === "Yes" ? "Unsubscribe" : "Subscribe"} to Bus Pickup Service
            </Text>
          </TouchableOpacity>
        </VStack>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// alignItems: "center",
		justifyContent: "flex-start",
	},
	studentDetails: {
		alignItems: "flex-start",
		// backgroundColor: "pink",
		height: "30%",
	},
	buttonStack: {
		alignItems: "center",
		// paddingTop: 250,
	},
	text: {
		fontSize: 18,
	},
	studentName: {
		fontWeight: "bold",
	},
	details: {},
	row: {
		flexDirection: "row",
		justifyContent: "space-around",
		width: "100%",
	},
	scrollViewItem: {
		// backgroundColor: COLORS.primary,
		flex: 1,
	},
	buttonStyle: {
		backgroundColor: COLORS.primary,
		borderWidth: 0,
		color: COLORS.white,
		borderColor: COLORS.primary,
		alignItems: "center",
		borderRadius: 5,
		marginTop: 30,
		padding: 10,
	},
	buttonTextStyle: {
		color: COLORS.black,
		paddingVertical: 10,
		fontSize: 16,
	},
});

export default ChildInfoPage;
