import React, {Component} from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

class Restaurant extends Component {

    renderDistance(distance) {
        let text = ' m'
        if (distance > 1000)
        {
            distance /= 1000
            text = ' km'

        }
        return (
             <Text style={styles.detailText}>{distance + text}</Text>
        );
    }

    renderRating(rating) {
        let color = '#3CCD36'
        if (rating >= 8 && rating < 9) {
            color = '#93CD36'
        } else if (rating >= 7 && rating <8) {
            color = '#CBCD36'
        } else if (rating < 7) {
            color = '#CD6136'
        }
        const style = StyleSheet.flatten([styles.ratingStyle, {backgroundColor: color}])
        return (
            <View style={style}>
                <Text style={{color:'#fff'}}>{this.props.restaurant.rating.toFixed(1)}</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.mainStyle}>
                    <Image style={styles.imageStyle} source={this.props.image} />
                    <View style={styles.infoStyle}>
                        <Text style={styles.titleStyle}>{this.props.restaurant.name}</Text>
                        <View style={styles.detailStyle}>
                             <Text style={styles.detailText}>{this.props.restaurant.type}</Text>
                             <Text style={styles.detailText}>{'$'.repeat(this.props.restaurant.price)}</Text>
                        </View>
                        <View style={styles.detailStyle}>
                            {this.renderDistance(this.props.restaurant.distance)}
                            <Text style={styles.detailText}>{this.props.restaurant.neigborhood}</Text>
                        </View>
                    </View>
                    {this.renderRating(this.props.restaurant.rating)}
                </View>
                <View style={styles.commentView}>
                    <Text style={styles.commentStyle}>{`"${this.props.restaurant.comment}"`}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageStyle: {
        height: 65,
        width: 95,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        marginRight: 5
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
        marginTop: 10
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
        color: '#717171',
        fontFamily: 'Roboto',
        fontSize: 12
    },

    commentView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignSelf: 'stretch'
    },

    detailStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        flex: 1
    },

    detailText: {
        textAlign: 'left',
        flex: 1,
        fontFamily: 'Roboto',
        fontSize: 12,
        color: '#717171'
    },

    ratingStyle: {
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 2,
        borderRadius: 10,
        height: 30,
        width: 30
    }
});

export default Restaurant;