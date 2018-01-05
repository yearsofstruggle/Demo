import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import { NavigationActions } from 'react-navigation'

export default class ResultScreen extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        header : null
    });

    render() {
        return (
            <View style={styles.container}>
                <Text style={{height:44}} onPress={()=>{
                    const resetAction = NavigationActions.reset({
                         index: 0,
                         actions: [
                            NavigationActions.navigate({ routeName: 'InputScreen'})
                         ]
                    })
                    this.props.navigation.dispatch(resetAction)
                }}>提交成功返回</Text>
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
});
