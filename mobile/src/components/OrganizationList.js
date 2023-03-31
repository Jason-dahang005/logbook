import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Modal,
  StyleSheet
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { People } from '../model/data'
import { ScrollView } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { Title } from 'react-native-paper';
const OrganizationList = ({ route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { item } = route.params;
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(People)
  })
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffff' }}>
      <ScrollView style={{ padding: 10 }}>
        <View>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{ flexDirection: 'row', alignItems: 'center', left: 30 }}>
                  <Title style={styles.modalText}>LOG BOOK</Title>
                  <View style={{ left: 80, bottom: 20 }}>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                      <Text style={{ fontSize: 15, fontWeight: 'bold' }}>X</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{
                  flexDirection: 'row',
                  borderColor: '#C6C6C6',
                  borderWidth: 1,
                  borderRadius: 8,
                  paddingHorizontal: 10,
                  paddingVertical: 8,
                  margin: 10
                }}>
                  <TextInput placeholder=' First Name'></TextInput>
                </View>
                <View style={{
                  flexDirection: 'row',
                  borderColor: '#C6C6C6',
                  borderWidth: 1,
                  borderRadius: 8,
                  paddingHorizontal: 10,
                  paddingVertical: 8,
                  margin: 10
                }}>
                  <TextInput placeholder=' Last Name'></TextInput>
                </View>
                <View style={{
                  flexDirection: 'row',
                  borderColor: '#C6C6C6',
                  borderWidth: 1,
                  borderRadius: 8,
                  paddingHorizontal: 10,
                  paddingVertical: 8,
                  margin: 10
                }}>
                  <TextInput placeholder='Description'></TextInput>
                </View>
                <TouchableOpacity style={{ alignItems: 'center' }}><Text style={{ fontWeight: 'bold' }}>SUBMIT</Text></TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ alignItems: 'center', padding: 10 }}>
            <Text style={{ fontSize: 30 }}>{item.subtitle}</Text>
            <Text>{item.title}</Text>
          </View>
        </View>
        <View style={{
          flexDirection: 'row',
          borderColor: '#C6C6C6',
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 10,
          paddingVertical: 8,
          margin: 10
        }}>
          <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            style={{ marginRight: 5 }}
          />
          <TextInput placeholder="Search" />
        </View>
        <TouchableOpacity onPress={() => setModalVisible(true)}
          style={{ left: 265, fontWeight: 'bold' }}>
          <Text>ADD LOG</Text>
        </TouchableOpacity>
        {data.map(item => {
          return (
            <View
              key={item.id}
              style={{
                borderColor: "gray",
                borderWidth: 1,
                borderRadius: 20,
                margin: 5,
              }}>
              <View style={{ margin: 20, alignItems: 'center' }}>
                <ImageBackground source={item.poster}
                  style={{ width: 35, height: 35 }}
                  imageStyle={{ borderRadius: 25 }} />
                <Text
                  style={{
                    color: '#333',
                    fontSize: 14,
                    textTransform: 'uppercase'
                  }}> {item.title}</Text>
                <Text
                  style={{
                    color: "black"
                  }}> {item.Description}</Text>
                <View style={{ left: 130, paddingTop: 10, top: 10 }}>
                  <Text
                    style={{
                      color: "black"
                    }}>{item.time}</Text>
                </View>
              </View>
            </View>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

export default OrganizationList

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  modalView: {
    margin: 30,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginLeft: 50,
    fontWeight: 'bold'
  }
})

