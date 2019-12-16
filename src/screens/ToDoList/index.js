import React from 'react';
import {createAppContainer} from 'react-navigation';
import createBottomTabNavigator from "react-navigation-tabs/src/navigators/createBottomTabNavigator";
import TaskAddContainer from "../../containers/TaskAdd/index";
import TasksListContainer from "../../containers/TasksList/index";
import LogoutContainer from "../../containers/Logout";

const TabNavigator = createBottomTabNavigator({
    'Add Task': TaskAddContainer,
    'Tasks List': TasksListContainer,
    'Log Out': LogoutContainer
});

export default createAppContainer(TabNavigator);
