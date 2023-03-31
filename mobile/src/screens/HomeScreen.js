import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, Modal} from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ImageBackground } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';
import { Organization, People } from '../model/data';
import { Title } from 'react-native-paper';



export default function HomeScreen({ navigation }) {

  const [modalVisible,setModalVisible] = useState(false);
  const [search,setSearch] = useState('');
  const [buttonTab, setbuttonTab] = useState(1);
  const onSelectSwitch = value => {
    setbuttonTab(value);
  }
  const searchFilter = () => {
    return search ? Organization.filter((data) => data.title.toLocaleLowerCase() === search.toLocaleLowerCase() ) : Organization 
  }
  const filtered = searchFilter()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={{ padding: 20 }}>
          <View>
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.button} onPress={()=>setModalVisible(false)}>
                    <Text>X</Text> 
                    </TouchableOpacity>
                    <Title style={styles.modalText}>Organization</Title>
                  </View>
                  <View style={{
                    flexDirection: 'row',
                    borderColor: '#C6C6C6',
                    borderWidth: 1,
                    borderRadius: 8,
                    paddingHorizontal: 10,
                    paddingVertical: 8,
                    margin:10
                  }}>
                  <TextInput placeholder='Organization Name'></TextInput>
                  </View>
                  <View style={{
                    flexDirection: 'row',
                    borderColor: '#C6C6C6',
                    borderWidth: 1,
                    borderRadius: 8,
                    paddingHorizontal: 10,
                    paddingVertical: 8,
                    margin:10
                  }}>
                  <TextInput placeholder='Description'></TextInput>
                  </View>
                  <TouchableOpacity style={{ left: 220,}}><Text>ADD</Text></TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20
          }}>
          <Text style={{ fontSize: 16 }}>Hello! Gwapo Salman</Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require("../assets/images/Pic/Alberto_conversi_profile_pic.jpg")}
              style={{ width: 35, height: 35 }}
              imageStyle={{ borderRadius: 25 }} />
          </TouchableOpacity>
        </View>

        {/* search bar */}
        <View style={{
          flexDirection: 'row',
          borderColor: '#C6C6C6',
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 10,
          paddingVertical: 8
        }}>
          <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            style={{ marginRight: 5 }}
          />
          <TextInput value={search} onChangeText={setSearch} placeholder="Search" />
        </View>

        <View style={{ marginVertical: 20 }}>
          <CustomSwitch
            selectionMode={1}
            option1="Organization"
            option2="People"
            onSelectSwitch={onSelectSwitch}
          />
        </View>
        {buttonTab == 1 && filtered.map(item => (
          <ListItem
            key={item.id}
            photo={item.poster}
            title={item.title}
            subTitle={item.subtitle}
            buttonTab={buttonTab}
            onPress={() =>
              navigation.navigate('OrganizationList', {
                item
              })
            }
          />
        ))}

        {buttonTab == 2 && People.map(item => (
          <ListItem
            key={item.id}
            photo={item.poster}
            title={item.title}
            subTitle={item.subtitle}
            buttonTab={buttonTab}
            onPress={() =>
              navigation.navigate('Details', {
                item
              })
            }
          />
        ))}
        
      </ScrollView>
        {buttonTab == 1 && (
          <View>
            <TouchableOpacity style={styles.addButton}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.addButtontext}>+</Text>
            </TouchableOpacity>
          </View>
        )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    zIndex: 10,
    right: 30,
    bottom: 30,
    backgroundColor: '#323938',
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,

  },
  addButtontext: {
    color: '#fff',
    fontSize: 24,
  },
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
  button: {
    borderRadius: 50,
    padding: 5,
    marginTop: 1,
    marginLeft: 1,
  },
  modalText: {
    marginLeft:50,
  }

});
