import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Modal,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { People } from '../model/data'
import { ScrollView } from 'react-native-gesture-handler';
import { Title } from 'react-native-paper';
import CustomSearch from '../components/CustomSearch';


const OrganizationList = ({ route }) => {
  
  const [modalVisible, setModalVisible] = useState(false);
  const { item } = route.params;
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');


  useEffect(() => {
    setData(People)
  })
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffff' }}>
      <ScrollView style={{ padding: 10 }}>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <View>
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', left: 30 }}>
                    <Title style={styles.modalText}>LOG BOOK</Title>
                    <View style={{ left: 70, bottom: 15 }}>
                      <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold' , color:'red'}}>X</Text>
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
                  <TouchableOpacity style={{
                    left: 170,
                    backgroundColor: '#1B56D8',
                    padding: 10,
                    width: 80,
                    borderRadius: 10,
                    alignItems: 'center'
                  }}><Text style={{ fontWeight: 'bold', color: 'white' }}>SUBMIT</Text></TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
          <View style={{ flex: 1, top: 10 }}>
            <View style={{ alignItems: 'center', padding: 10 }}>
              <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{item.title}</Text>
            </View>
          </View>
        <CustomSearch setSearch={setSearch}/>
          <TouchableOpacity onPress={() => setModalVisible(true)}
            style={{ left: 265, fontWeight: 'bold' }}>
            <Text style={{ fontWeight: 'bold' }}>ADD LOG</Text>
          </TouchableOpacity>
          {data.filter((item) => {
            if (search === "") {
              return item;
            } else if (item.title.toLowerCase().includes(search.toLocaleLowerCase())) {
              return item;
            }
            return false
          }).map(item => (
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
                  }}>{item.title}</Text>
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
          ))
          }
        </KeyboardAvoidingView>
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

