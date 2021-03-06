import React from 'react';
import { Text, View } from 'react-native';


const Header = (props) => {
    const { textStyles, viewStyles } = styles;
    return (
        <View style={viewStyles}>
            <Text style={textStyles}>{ props.headerText }</Text>
        </View>
    );
};

const styles = {
    textStyles: {
        fontSize: 20,
    },
    viewStyles: {
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        position: 'relative',
    }
};

export { Header };
