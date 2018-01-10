import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import { Button } from 'teaset';

export default class ResultScreen extends Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        header : null
    });

    btnEvent = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'InputScreen'})
            ]
        })
        this.props.navigation.dispatch(resetAction)
    }

    render() {
        return (
            <View style={styles.container}>
                <Button style={{height:44, borderColor:'transparent'}} onPress={()=>this.btnEvent()} titleStyle={styles.btnText} title={'提交成功返回'}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#fff',
        justifyContent : 'center',
        alignItems : 'center',
    },
    btnText:{
        color:'black',
    }
});
