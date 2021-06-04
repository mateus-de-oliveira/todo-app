import React, { useState } from 'react'
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'

import checkIcon from '../assets/icons/Check.png'

interface TodoInputProps {
  addTask: (task: string) => void
  darkMode: boolean
}

export function TodoInput({ addTask, darkMode }: TodoInputProps) {
  const [task, setTask] = useState('')

  function handleAddNewTask() {
    addTask(task)
    setTask('')
    //TODO - Call addTask and clean input value
  }

  return (
    <View
      style={[
        !darkMode ? styles.inputContainer : dark.inputContainer,
        Platform.OS === 'ios' ? styles.inputIOSShadow : styles.inputAndroidShadow,
      ]}
    >
      <TextInput
        style={!darkMode ? styles.input : dark.input}
        placeholder="Adicionar novo todo..."
        placeholderTextColor={!darkMode ? '#000' : '#fff'}
        returnKeyType="send"
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
        value={task}
        //TODO - use value, onChangeText and onSubmitEditing props
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={!darkMode ? styles.addButton : dark.addButton}
        onPress={handleAddNewTask}
        //TODO - onPress prop
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#F5F4F8',
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#F5F4F8',
    color: '#000',
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  inputAndroidShadow: {
    elevation: 5,
  },
  addButton: {
    backgroundColor: '#3FAD27',
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
})

const dark = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#212136',
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#212136',
    color: '#fff',
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  inputAndroidShadow: {
    elevation: 5,
  },
  addButton: {
    backgroundColor: '#565BFF',
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
})
