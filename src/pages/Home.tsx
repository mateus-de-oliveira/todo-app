import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { Header } from '../components/Header'
import { MyTasksList } from '../components/MyTasksList'
import { TodoInput } from '../components/TodoInput'

interface Task {
  id: number
  title: string
  done: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [darkMode, setDarkMode] = useState(false)
  const toggleSwitch = () => setDarkMode((previousState) => !previousState)

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle != '') {
      const newTask = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false,
      }
      //TODO - add new task if it's not

      setTasks([...tasks, newTask])
    }
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    let task = tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done
      }

      return task
    })

    setTasks(task)
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    let newTasks = tasks.filter((task) => task.id !== id)
    setTasks(newTasks)
  }

  return (
    <>
      <Header darkMode={darkMode} toggleSwitch={toggleSwitch} />
      <View style={darkMode ? dark.home : light.home}>
        <TodoInput darkMode={darkMode} addTask={handleAddTask} />

        <MyTasksList
          darkMode={darkMode}
          tasks={tasks}
          onPress={handleMarkTaskAsDone}
          onLongPress={handleRemoveTask}
        />
      </View>
    </>
  )
}

const light = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

const dark = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#1F1F1F',
  },
})
