import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Keyboard
} from 'react-native';

import { Toast } from 'teaset';

export default class InputScreen extends Component {

    state = {
        numid : '',
    };

    btnEvent = () => {
        const flag = this.state.numid.match(/^(\d{17}[\d|x]|\d{15})$/i)
        // if (!flag) {
        //     Toast.message('请正确填写身份证号');
        //     return;
        // }
        let { navigate } = this.props.navigation;
        navigate('PictureScreen');
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputWrapper}>
                    <Text style={styles.leftText}>身份证号</Text>
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        value={this.state.numid}
                        placeholder='请填写身份证号'
                        maxLength={18}
                        placeholderColor='#999'
                        onChangeText={(text)=>{
                            this.setState({numid:text})
                        }}
                    />
                </View>
                <TouchableOpacity style={styles.submitBtn} activeOpacity={0.8} onPress={()=>this.btnEvent()}>
                    <Text style={styles.submitText}>提交</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#f5f5f5',
    },
    inputWrapper : {
        marginTop : 100,
        flexDirection : 'row',
        marginLeft : 15,
        marginRight : 15,
        height : 44,
        justifyContent:'center',
        alignItems:'center'
    },
    leftText : {
        fontSize : 15,
        color : '#454545',
    },
    input : {
        flex : 1,
        padding : 0,
        marginLeft : 20,
        fontSize : 15,
        color : '#454545',
    },
    submitBtn : {
        marginLeft : 15,
        marginRight : 15,
        marginTop : 30,
        alignItems : 'center',
        borderRadius : 10,
        height : 44,
        backgroundColor : '#4a78fe',
        justifyContent : 'center'
    },
    submitText : {
        color : 'white',
        fontSize : 15,
    }
});
