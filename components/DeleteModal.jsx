import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import React from 'react'

const DeleteModal = ( {modalVisible, handleDeleteTask, setModalVisible} ) => {
  return (
    <Modal
                animationType='slide'
                visible={modalVisible}
            >
                <View style={styles.modalContainer}>
                    <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
                        <Text style={styles.closeText}>X</Text>
                    </Pressable>
                    <View styles={styles.infoContainer}>
                        <Text style={styles.modalTitle}>Confirm Deletion?</Text>
                        <Text style={styles.modalText}>NOMBRE DE TAREA</Text>
                        <Text style={styles.modalDeleteWarning}>This action can not be undone!</Text>
                    </View>

                    <View style={styles.buttonsContainer}>
                        <Pressable
                            style={styles.cancelBtn}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.cancelText}>Cancel</Text>
                        </Pressable>
                        <Pressable
                            style={styles.deleteBtn}
                            onPress={handleDeleteTask}
                        >
                            <Text styles={styles.deleteText}>Delete</Text>
                        </Pressable>
                    </View>
                </View>
                
            </Modal>
  )
}

export default DeleteModal

const styles = StyleSheet.create({
    modalTitle: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold"
    },
    modalText: {
        color: "#fff",
        fontSize: 14
    },
    modalDeleteWarning: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 12
    },
    buttonsContainer: {
        padding: 30,
        flexDirection: 'row',
        gap: 10
    },
    deleteBtn: {
        backgroundColor: "#c71919",
        width: "48%",
        padding: 10,
        borderRadius: 15
    },
    deleteText: {
        textAlign: "center",
        fontSize: 14,
        color: "#fff",
        fontWeight: 'bold'
    },
    cancelBtn: {
        backgroundColor: "#C5C5C5",
        width: "48%",
        padding: 10,
        borderRadius: 15
    },
    cancelText: {
        textAlign: "center",
        fontSize: 14,
        color: "#474646"
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
})