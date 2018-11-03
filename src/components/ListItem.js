import React, { Component } from 'react';
import { 
    Text, 
    View, 
    TouchableWithoutFeedback, 
    LayoutAnimation, 
    Platform, 
    UIManager 
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

    componentWillMount() {
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
    
    componentWillUpdate() {
        LayoutAnimation.spring();
    }


    renderDescription() {
        const { isExpandable } = this.props;
        const { description } = this.props.library.item;

        if (isExpandable) {
            return <Text style={styles.descriptionStyle}>{description}</Text>;
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library.item;
        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    descriptionStyle: {
        paddingLeft: 8,
        paddingRight: 5,
        marginBottom: 8,
        flex: 1
    }
};

const mapStateToProps = (state, ownProps) => {
    const isExpandable = state.selectedLibraryId === ownProps.library.item.id;
    return { isExpandable };
};

export default connect(mapStateToProps, actions)(ListItem);
