import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

const Category = (props) => {

	return (
		<View style={styles.containerStyle}>
                <Image style={styles.imageStyle} source={props.image} />
                <View style={styles.overlay} />
                <Text style={styles.textStyle}>{props.name}</Text>
        </View>
	);
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 90,
        width: 90,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 2,
        marginRight: 2,
    },

    textStyle: {
        position: 'absolute',
        marginTop: 80,
        color: '#fff',
        fontFamily: 'Roboto',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 1,
    },

    containerStyle: {
        flex: 1,
        alignItems: 'center'
    },

    overlay: {
        position: 'absolute',
        height: 90,
        width: 90,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 2,
        marginRight: 2,
        backgroundColor: 'rgba(0,0,0,0.4)'
    }
});

export default Category;