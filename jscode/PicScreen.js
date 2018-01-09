import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import Camera from 'react-native-camera';
import { Toast } from 'teaset';

export default class PicScreen extends Component {
    static  navigationOptions = ({ navigation, screenProps }) => ({
        headerLeft : <Text style={{marginLeft:10}} onPress={()=>{
                       let {goBack} = navigation;
                       goBack();
                   }}>返回</Text>,
        headerTitle:'拍照'
    });

    state = {
        cameraType : Camera.constants.Type.back,
        imagePath : '',
    }

    //切换前后摄像头
    switchCamera() {
        var state = this.state;
        if (state.cameraType === Camera.constants.Type.back) {
            state.cameraType = Camera.constants.Type.front;
        } else {
            state.cameraType = Camera.constants.Type.back;
        }
        this.setState(state);
    };

    takePicture = () => {
        let { navigate } = this.props.navigation;
        this.camera && this.camera.capture()
            .then((data) => {
                console.log(data);
                this.setState({ imagePath : data.path });
            })
            .catch(err => {
                if (err) {
                    Toast.message('失败');
                }
            });
    };

    renderContainer = () => {
        if (this.state.imagePath) {
            return <View style={{flex:1}}>
                    <Image style={{flex:1}} source={{ uri:this.state.imagePath }}/>
                    <Text style={[styles.button,{position:'absolute'}]} onPress={()=>{
                            let { navigate } = this.props.navigation;
                            navigate('PictureScreen');
                        }}>[上传]</Text>
                </View>
        }
        return (
            <View style={{flex:1}}>
                <Camera
                    ref={(cam) => {
                       this.camera = cam;
                    }}
                    style={styles.preview}
                    captureTarget={Camera.constants.CaptureTarget.temp}
                    type={this.state.cameraType}
                    aspect={Camera.constants.Aspect.fill}>
                    <Text style={styles.button} onPress={()=>this.switchCamera()}>[切换摄像头]</Text>
                    <Text style={styles.button} onPress={()=>this.takePicture()}>[拍照]</Text>
                </Camera>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.renderContainer()
                }
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
    button : {
        flex : 0,
        backgroundColor : '#fff',
        borderRadius : 5,
        color : '#000',
        padding : 10,
        margin : 40,
    }
});
