import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import Camera from 'react-native-camera';
import { Toast, Button } from 'teaset';
let isGo = true;

export default class PictureScreen extends Component {
    static  navigationOptions = ({ navigation, screenProps }) => ({
        headerLeft : <Button style={{marginLeft:10, borderColor:'transparent'}}
                             onPress={()=>{
                                  isGo = false;
                                  let {goBack} = navigation;
                                  goBack();
                             }}
                             titleStyle={{color:'black'}}
                             title={'返回'}/>,
        headerTitle : '摄像'
    });

    componentDidMount() {
        isGo = true;
        this.takePicture();
    };

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    };

    takePicture = () => {
        let { navigate } = this.props.navigation;
        const options = { mode : Camera.constants.CaptureMode.video };
        this.camera && this.camera.capture(options)
            .then((data) => {
                isGo && navigate('ResultScreen');
            })
            .catch(err => {
                if (err) {
                    Toast.message('失败');
                }
            });
        this.timer = setTimeout(() => {
            this.camera.stopCapture();
        }, 3000)
    };

    render() {
        return (
            <View style={styles.container}>
                <Camera
                    ref={(cam) => {
                       this.camera = cam;
                    }}
                    style={styles.preview}
                    type={Camera.constants.Type.front}
                    aspect={Camera.constants.Aspect.fill}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#fff'
    },
    preview : {
        flex : 1,
        justifyContent : 'space-between',
        alignItems : 'flex-end',
        flexDirection : 'row',
    },
    toolBar : {
        width : 200,
        margin : 40,
        backgroundColor : '#000000',
        justifyContent : 'space-between',
    },
    button : {
        flex : 0,
        backgroundColor : '#fff',
        borderRadius : 5,
        color : '#000',
        padding : 10,
        margin : 40,
    }
});
