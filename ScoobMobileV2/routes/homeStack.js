import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';

import ParentsHomePage from "../screens/Parents/HomePage";
import ParentsProfilePage from "../screens/Parents/ProfilePage";
import ParentsChildInfoPage from "../screens/Parents/ChildInfoPage";
import ParentsChatPage from "../screens/Parents/ChatPage";
import ParentsBusServicePage from "../screens/Parents/BusServicePage";

import TeachersHomePage from "../screens/Teachers/HomePage";
import TeachersChatPage from "../screens/Teachers/ChatPage";
import TeachersPickUpZonePage from "../screens/Teachers/PickUpZonePage";

import DriversHomePage from "../screens/Drivers/HomePage";
import DriversTripsPage from "../screens/Drivers/TripsPage";

import LoginPage from "../screens/LoginPage";

const screens = {
    LoginPage: {
        screen: LoginPage,
        navigationOptions: {
            title: " "
        }
    },
    ParentsHomePage: {
        screen: ParentsHomePage,
        navigationOptions: {
            title: "Home",
            headerLeft: () => null, // Remove back button
            gestureEnabled: false,
        }
    },
    ParentsProfilePage: {
        screen: ParentsProfilePage,
        navigationOptions: {
            title: "Profile"
        },
    },
    ParentsChildInfoPage: {
        screen: ParentsChildInfoPage,
    },
    ParentsChatPage: {
        screen: ParentsChatPage,
    },
    ParentsBusServicePage: {
        screen: ParentsBusServicePage,
    },
    DriversHomePage: {
        screen: DriversHomePage,
        navigationOptions: {
            title: "Home",
            headerLeft: () => null, // Remove back button
            gestureEnabled: false,
        }
    },
    DriversTripsPage: {
        screen: DriversTripsPage,
    },
    TeachersHomePage: {
        screen: TeachersHomePage,
        navigationOptions: {
            title: "Home",
            headerLeft: () => null, // Remove back button
            gestureEnabled: false,
        }
    },
    TeachersChatPage: {
        screen: TeachersChatPage,
    },
    TeachersPickUpZonePage: {
        screen: TeachersPickUpZonePage,
    },
}

const ParentsHomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { 
            backgroundColor: '#fd7e14',
            shadowColor: 'transparent',
            elevation: 0,
        },
        headerTitleAlign: 'center',
    }
});

export default createAppContainer(ParentsHomeStack);