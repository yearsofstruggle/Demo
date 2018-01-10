import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import Camera from 'react-native-camera';
import { Toast, Label, Button } from 'teaset';
let isGo = true;

export default class PicScreen extends Component {
    static  navigationOptions = ({ navigation, screenProps }) => ({
        headerLeft : <Button style={{marginLeft:10,borderColor:'transparent',backgroundColor:'#f5f5f5'}}
                             onPress={()=>{
                                  isGo = false;
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

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    };

    componentDidMount() {
        isGo = true;
        this.timer = setTimeout(() => {
            this.takePicture();
        }, 3000)
    };

    takePicture = () => {
        let { navigate } = this.props.navigation;
        this.camera && this.camera.capture()
            .then((data) => {
                this.setState({ imagePath : data.path });
                isGo && navigate("PictureScreen");
            })
            .catch(err => {
                if (err) {
                    Toast.message('失败');
                }
            });

    };

    render() {
        return (
            <View style={styles.container}>
                <Camera
                    ref={(camera) => {
                       this.camera = camera;
                    }}
                    style={styles.preview}
                    captureTarget={Camera.constants.CaptureTarget.temp}
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
    button : {
        flex : 0,
        backgroundColor : '#fff',
        borderRadius : 5,
        color : '#000',
        padding : 10,
        margin : 40,
    }
});
