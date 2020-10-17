import React, { useState, useEffect } from 'react';
import {Button, Image,Text, View,TouchableOpacity, Platform} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { Block } from './components';
import Picker from './components/picker.js'
//import Button from 'react-native-button';

export default function ImagePickerExample() {
  const [imageBefore, setImageBefore] = useState(null);
  const [imageAfter, setImageAfter] = useState(null);
  const [selectImport, setselectImport] = useState(1);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImageBefore = async () => {
    if(selectImport === 1){
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
         aspect: [3, 4],
        quality: 1,
        base64: true
      });
      console.log(result);
      if (!result.cancelled) {
        setImageBefore(result.uri);
      }
    }
    if(selectImport === 0){
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [3, 4],
        quality: 1,
        base64: true
      });
      console.log(result);
      if (!result.cancelled) {
        setImageBefore(result.uri);
      }
    }   
  
  };
  const pickImageAfter = async () => {
    if(selectImport === 1){
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [3, 4],
        quality: 1,
        base64: true
      });
      console.log(result);
      if (!result.cancelled) {
        setImageAfter(result.uri);
      }
    }
    if(selectImport === 0){
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
         aspect: [3, 4],
        quality: 1,
        base64: true
      });
      console.log(result);
      if (!result.cancelled) {
        setImageAfter(result.uri);
      }
    } 
  };
   const onPressItem = async (item) =>{
    setselectImport(item);
    console.log(item)
  }
  return (
    
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}>
      <Block style={{alignItems: "center"}}>
      <Picker style={{ width: 300, height: 200}} onPressItem={(itemPress) => { onPressItem(itemPress) }}  />
      </Block>

      <Block padding={30}>
      <TouchableOpacity
        style ={{
          height: 40,
          width:222,
          borderRadius:40,
          backgroundColor : "#2196f3",
          marginLeft :50,
          marginRight:50,
          alignItems: 'center',
          marginTop :20
        }}
        
        onPress={() => pickImageBefore()}
      >
        <Text style ={{paddingTop :10, color: 'white'}}>Tải lên mặt trước CCCD/CMTND</Text>
      </TouchableOpacity> 
      {imageBefore && <Image source={{ uri: imageBefore }} style={{ width: 300, height: 200, marginTop: 10 }} />}
      </Block>
     
          
      <Block padding={30}>
      
      <TouchableOpacity
        style ={{
          height: 40,
          width:222,
          borderRadius:40,
          backgroundColor : "#2196f3",
          marginLeft :50,
          marginRight:50,
          alignItems: 'center',
          marginTop :20
        }}
        
        onPress={() => pickImageAfter()}
      >
        <Text style ={{paddingTop :10, color: 'white'}}>Tải lên mặt sau CCCD/CMTND</Text>
      </TouchableOpacity> 
      {imageAfter && <Image source={{ uri: imageAfter }} style={{ width: 300, height: 200, marginTop: 10 }} />}
      </Block>

      {(imageBefore !== null && imageAfter !== null) && (
        <Block >
        <Button title="Lấy thông tin CCCD/CMTND"  />
        </Block>
      )}
  </View>
    
  );
}
