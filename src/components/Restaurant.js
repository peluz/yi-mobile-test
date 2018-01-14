import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

const Restaurant = (props) => {
    return (
        <View style={styles.containerStyle}>
            <View style={styles.mainStyle}>
                <Image style={styles.imageStyle} source={props.image} />
                <View style={styles.infoStyle}>
                    <Text style={styles.titleStyle}>{props.restaurant.name}</Text>
                    <View style={styles.detailStyle}>
                         <Text >{props.restaurant.type}</Text>
                         <Text>{props.restaurant.price}</Text>
                    </View>
                    <View style={styles.detailStyle}>
                        <Text >{props.restaurant.distance}</Text>
                        <Text >{props.restaurant.neigborhood}</Text>
                    </View>
                </View>
                <View>
                    <Text>{props.restaurant.rating}</Text>
                </View>
            </View>
            <View style={styles.commentView}>
                <Text style={styles.commentStyle}>{`"${props.restaurant.comment}"`}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 65,
        width: 95,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5
    },

    titleStyle: {
        color: '#D06600',
        fontFamily: 'Roboto',
        fontSize: 20
    },

    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderColor: '#E0E0E0',
    },

    mainStyle: {
        flexDirection: 'row',
        flex:3,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    infoStyle: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },

    commentStyle: {
        textAlign: 'left',
    },

    commentView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignSelf: 'stretch'
    },

    detailStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        padding: 5
    }
});

export default Restaurant;