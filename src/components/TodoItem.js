import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const TodoItem = ({ item, onDelete }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{item.text}</Text>
            <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(item.id)}>
                <Text style={styles.deleteText}>Hapus</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        marginVertical: 5,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    text: {
        fontSize: 16,
        flex: 1, // Allow text to take remaining space
    },
    deleteButton: {
        marginLeft: 10,
        backgroundColor: '#ff4d4d',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    deleteText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default TodoItem;
