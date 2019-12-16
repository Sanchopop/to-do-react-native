import React from 'react';
import {FlatList, Text, View} from "react-native";

const TasksList = (props) => {
    const {tasks} = props;
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <FlatList
                contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
                data={tasks.tasks}
                renderItem={({item}) => <Text>{item.name}</Text> }
            />
        </View>
    )
};

export default TasksList;