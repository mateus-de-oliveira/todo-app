import React from 'react'
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native'

interface MyTasksListProps {
  tasks: {
    id: number
    title: string
    done: boolean
  }[]
  onPress: (id: number) => void
  onLongPress: (id: number) => void
  darkMode?: boolean
}

interface Props {
  darkMode: boolean
}

function FlatListHeaderComponent({ darkMode }: Props) {
  return (
    <View>
      <Text style={!darkMode ? styles.header : dark.header}>Minhas tasks</Text>
    </View>
  )
}

export function MyTasksList({ tasks, onLongPress, onPress, darkMode }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            style={item.done === true ? styles.taskButtonDone : styles.taskButton}
            //TODO - use onPress, onLongPress and style props
          >
            <View
              testID={`marker-${index}`}
              style={
                item.done === true
                  ? !darkMode
                    ? styles.taskMarkerDone
                    : dark.taskMarkerDone
                  : !darkMode
                  ? styles.taskMarker
                  : dark.taskMarker
              }
              //TODO - use style prop
            />
            <Text
              //TODO - use style prop
              style={
                item.done === true
                  ? !darkMode
                    ? styles.taskTextDone
                    : dark.taskTextDone
                  : !darkMode
                  ? styles.taskText
                  : dark.taskText
              }
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent darkMode={darkMode as boolean} />}
      ListHeaderComponentStyle={{
        marginBottom: 20,
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32,
      }}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    color: '#000',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10,
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10,
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through',
  },
})

const dark = StyleSheet.create({
  header: {
    color: '#565BFF',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#565BFF',
    marginRight: 10,
  },
  taskText: {
    color: '#fff',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(33, 33, 54, 0.5)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#565BFF',
    marginRight: 10,
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through',
  },
})
