import { useState } from 'react';
import {  Modal } from 'react-native';
import { Alert } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { Button } from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native';




const frutas = [
  {
    id: '',
    name: '', 
   
  },
  
];

function Home() {
  const [modalVisible,setModalVisible]= useState<boolean>(false)
  const [frutas, setFrutas] = useState<string[]>([]);
  const [newfruta, setNewFruta] = useState<string>('');

  const handleSaveNewFruta = ()=>{

    setFrutas([...frutas, newfruta]);
  }
  
  return (

  

    <SafeAreaView style={styles.container}>
      
   
      <View style={styles.container}>
      {frutas.map((frutas) => {
        return (
          <View>
            <Text style={styles.item}>{frutas}</Text>
          </View>
        );
      })}
    </View>


      <View style={styles.button}>
        <Button
          title="Agregar"
          onPress={() => setModalVisible(true)} 
        />
      </View>
      <Modal
        animationType='slide'
        onDismiss={() => console.log('close')}
        onShow={() => console.log('show')}
        transparent
        visible={modalVisible}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0.5)',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <View
            style={{
              width: '60%',
              height: '50%',
              backgroundColor: '#FFFAFA',
            }}>             
              <TextInput
                onChangeText={(value)=> setNewFruta(value)} 
                style={styles.input}
                placeholder="Nombre de la fruta a ingresar"            
              />
            <View 
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <TouchableOpacity>
                <Button 
                  onPress={() => {
                    handleSaveNewFruta()
                    Alert.alert('La fruta se agregó')
                    setModalVisible(false)
                  }}  

                  title="Agregar"
               />
              </TouchableOpacity>
              <View >
              <TouchableOpacity>
                <Button
                  title="Cerrar"
                  onPress={() => setModalVisible(false)}
                     
                />
              </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 100,
    paddingHorizontal: 40,
    borderRadius: 30, 
    backgroundColor: '#FFB6C',
    marginHorizontal: 100,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Home;




