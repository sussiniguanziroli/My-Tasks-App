import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, FlatList, Modal, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import DeleteModal from './components/DeleteModal';

export default function App() {
    const [taskInput, setTaskInput] = useState("");
    const [tasksList, setTasksList] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedTask, setSelectedTask] = useState({});

    

    // tarea validar que no sea puedan agregar tasks vacias
    //console.log("taskInput: ", taskInput);

    const emptyTaskList = () => {
        setTasksList([]);
    }

    const handleDeleteTask = () => {
        setTasksList(tasksList.filter(task => task.id != selectedTask.id))
        setModalVisible(false)
    }

    const handleAddToList = () => {
        setTasksList(prevState => [...prevState, { "id": Math.random(), "value": taskInput }]);
        setTaskInput("");
    }

    useEffect(()=>{console.log("TaskList: ",tasksList)},[tasksList])

    const handleSelectTask = (item) => {
        setSelectedTask(item)
        setModalVisible(true)
    }

    const renderTaskItem = ({ item }) => (
        <View style={styles.taskContainer}>
            <Text style={styles.tasksText}>{item.value}</Text>
            <Button title='X' color="#c71919" onPress={() => handleSelectTask(item)} />
        </View>
    )

    return (
        <>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Add a new task'
                        onChangeText={(text) => { setTaskInput(text) }}
                        value={taskInput} />
                    <Button title='+' color="#1d9225" onPress={() => { handleAddToList() }} />
                    <Button title='x' onPress={() => { emptyTaskList() }} />
                </View>
                <View style={styles.tasksContainer}>
                    <Text style={styles.title}>Pending tasks:</Text>

                    {/* {tasksList.map((task) => (

                        <View key={task.id} style={styles.taskContainer}>
                            <Text style={styles.tasksText}>{task.value}</Text>
                            <Button title='X' color="#c71919" />
                        </View>

                    ))} */}

                    <FlatList
                        data={tasksList}
                        keyExtractor={item => item.id}
                        renderItem={renderTaskItem}
                    />

                </View>

            </View>

            <DeleteModal modalVisible={modalVisible} handleDeleteTask={handleDeleteTask} setModalVisible={setModalVisible}/>

            <StatusBar style="auto" />

            
        </>
    );
}

//las medidas se relacionan con la densidad del telefono particular, no se pone unidad de medida

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#464646',
        paddingHorizontal: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        paddingTop: 60,
        paddingBottom: 40,
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        borderBottomColor: "#fff",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#ccc",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
        backgroundColor: "#ccc",
        width: '90%',
    },
    tasksContainer: {
        paddingTop: 20,
    },
    title: {
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        fontSize: 16,
    },
    taskContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        paddingVertical: 9,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    tasksText: {
        color: "#fff"
    },
    modalContainer: {
        backgroundColor: "#464646",
        flex: 1
    },
    closeButton: {
        alignSelf: 'flex-end',
        padding: 30
    },
    closeText: {
        color: "#fff",
        fontSize: 30
    },
    infoContainer: {
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    },
    
});

