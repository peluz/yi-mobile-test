import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import images from '../assets/images';
import Spinner from './Spinner';
import Category from './Category';

class CategoriesList extends Component {
    state = { loading: true, categories: [] };

    componentWillMount() {
        setInterval(() => {
          this.setState({loading: false, categories: this.props.categories});
        }, 1500);
    }

    renderCategories() {
        if (this.state.loading) {
            return <Spinner />
        }
        else {
            return this.state.categories.map(category => 
                <Category key={category.name} name={category.name} image={images[category.name]} />
            );
        }
    }

    render() {

        return (
            <View style={styles.containerStyle}>
                <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollStyle} horizontal>
                    {this.renderCategories()}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scrollStyle: {
        paddingLeft: 40,
        paddingRight: 20,
        justifyContent: 'space-around',
    },
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesList;