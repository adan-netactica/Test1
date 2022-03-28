import React from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import {
    formatDate,
    getCountdownParts,
} from './api';

const styles = StyleSheet.create({ 
    card: {
        flexDirection: 'row',
        backgroundColor: '#D09393',
        flex: 1,
        padding: 10,
        paddingTop: 10,
        paddingBottom: 20,
        margin: 10,
        marginTop: 5,
        marginBottom: 5,
        height: 200

    },
    box: {
        flexDirection: "column",
        
    },
    box1: {
        flex: 5,
        backgroundColor: '#D2EA82',
        justifyContent: 'center'
    },
    box2: {
        flex: 10,
        backgroundColor: '#82EAD0'
    }
});

export default function EventCard ({ event }){

    return( 
        <View style={styles.card}>
            
            <View style={[styles.box, styles.box1]}>
            <Image
                style={{width: '100%', height: '50%'}}
                source={{uri:'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg'}}
            />

            </View>
            <View style={[styles.box, styles.box2]}>
                <View style={[]}>
                    <Text >Prueba 1</Text>
                </View>
                <View style={[]}>
                    <Text >Prueba 1</Text>
                </View>
                <View style={[]}>
                    <Text >Prueba 1</Text>
                </View>
                <View style={[]}>
                    <Text >8 comments</Text>
                </View>
            </View>
            
           
        </View>
    );
}

EventCard.propTypes = {
    event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date)
    }),
};