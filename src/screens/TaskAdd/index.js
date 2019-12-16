import React from 'react';
import {View, TextInput, Button} from "react-native";

const TaskAdd = (props) => {
    const { addTask } = props;
    let newTask = '';
    const addNewTask = () => {
        addTask(newTask);
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
                placeholder={ 'Enter your Task !' }
                style={{
                    height: 40,
                    width: 350,
                    borderColor: 'gray',
                    borderWidth: 1,
                    paddingLeft: 10,
                    paddingRight: 10,
                    borderRadius: 5,
                    margin: 5
                }}
                onChangeText={ TextInputValue => newTask = TextInputValue }

            />
            <Button
                title=" ADD TASK"
                style={{
                    height: 40,
                    width: 350,
                    borderColor: 'gray',
                    borderWidth: 1,
                    borderRadius: 5,
                    margin: 5
                }}
                onPress={ addNewTask }
            />
        </View>
    )
};

export default TaskAdd;