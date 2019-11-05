import React from 'react'
import PropTypes from "prop-types";
import { View, StyleSheet } from 'react-native'

import { connect } from 'react-redux'
import COLORS from '../../helpers/colorHelper'
import STYLES from '../../helpers/styleHelper'

const DashboardScreen = ({navigation, dispatch}) => {
    // TODO: Add float button for a new transaction
    // Render
    return (
        <View />
    )
};

const styles = StyleSheet.create({

});


// Prop types from global store
DashboardScreen.propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
};


// Map dispatch function to component props
/*const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action)}
});

// Map state function to component props
const mapStateToProps = (state) => ({
    user: state.user
});

// Connect React to Redux
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);*/

export default DashboardScreen
