import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'

class PickerExample extends Component {
   state = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user });
      this.props.onPressItem(user)
   }

   render() {
      return (
         <View>
            <Picker style= {styles.picker} selectedValue = {this.state.user} onValueChange = {this.updateUser}>
               <Picker.Item label = "Tải lên từ thư viện ảnh" value = "0" />
               <Picker.Item label = "Tải lên bằng chụp ảnh" value = "1" />
            </Picker>
            
         </View>
      )
   }
}
export default PickerExample

const styles = StyleSheet.create({
   text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'red'
   },
   picker:{
    borderRadius: 5,
    width: 222,
    textAlign: "center"
   }
})