import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import images from '../assets/images';
import Spinner from './Spinner';
import Restaurant from './Restaurant';

class RestaurantList extends Component {
    state = { loading: true, list: [] };

    componentWillMount() {
        setInterval(() => {
          this.setState({loading: false, list: this.props.list});
        }, 1500);
    }

    renderRestaurants() {
        if (this.state.loading) {
            return <Spinner />
        }
        else {
            return this.state.list.map(list => 
                <Restaurant key={list.name} restaurant={list} image={images[list.name]} />
            );
        }
    }

    render() {

        return (
            <View style={styles.containerStyle}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollStyle}>
                    {this.renderRestaurants()}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scrollStyle: {
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-around',
    },
    containerStyle: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default RestaurantList;