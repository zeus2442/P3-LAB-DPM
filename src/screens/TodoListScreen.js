import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import Header from '../components/Header';
import TodoItem from '../components/TodoItem';

const TodoListScreen = () => {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        console.log('TodoListScreen Mounted');
        return () => console.log('TodoListScreen Unmounted');
    }, []);

    const addTodo = () => {
        if (text.trim().length === 0) return;
        setTodos((prevTodos) => [
            ...prevTodos,
            { id: Date.now().toString(), text },
        ]);
        setText('');
    };

    const deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    return (
        <View style={styles.container}>
            <Header title="To-Do List" />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Add a new task..."
                    value={text}
                    onChangeText={setText}
                />
                <Button title="Add" onPress={addTodo} />
            </View>
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TodoItem item={item} onDelete={deleteTodo} />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginRight: 10,
        padding: 5,
        fontSize: 16,
    },
});

export default TodoListScreen;
