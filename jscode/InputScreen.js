import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Keyboard
} from 'react-native';

import { Toast, Label, Button, Input } from 'teaset';

export default class InputScreen extends Component {
    static  navigationOptions = ({ navigation, screenProps }) => ({
        headerTitle : '身份证'
    });

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
        navigate('PicScreen');
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputWrapper}>
                    <Label style={styles.leftText} text={'身份证号'} />
                    <Input
                        style={styles.input}
                        value={this.state.numid}
                        placeholder='请填写身份证号'
                        maxLength={18}
                        placeholderColor='#999'
                        onChangeText={text => this.setState({numid: text})}
                    />
                </View>
                <Button style={styles.submitBtn}
                        onPress={()=>this.btnEvent()}
                        title={'提交'}
                        titleStyle={styles.submitText}/>
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
        justifyContent : 'center',
        alignItems : 'center'
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
