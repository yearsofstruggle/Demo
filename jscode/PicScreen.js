import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import Camera from 'react-native-camera';
import { Toast, Label, Button } from 'teaset';

export default class PicScreen extends Component {
    static  navigationOptions = ({ navigation, screenProps }) => ({
        headerLeft : <Button style={{marginLeft:10,borderColor:'transparent'}}
                             onPress={()=>{
                                  let {goBack} = navigation;
                                  goBack();
                             }}
                             titleStyle={{color:'black'}}
                             title={'返回'}/>,
        headerTitle : '拍照'
    });

    state = {
        imagePath : '',
    }

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
                <Button style={[styles.button,{position:'absolute'}]} onPress={()=>{
                            let { navigate } = this.props.navigation;
                            navigate('PictureScreen');
                        }} title={'[上传]'} />
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
                    type={Camera.constants.Type.front}
                    aspect={Camera.constants.Aspect.fill}>
                    <Button style={styles.button} onPress={()=>this.takePicture()} title={'[拍照]'}/>
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
