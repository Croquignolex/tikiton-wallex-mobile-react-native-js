import { connect } from 'react-redux'
import LoginScreen from '../screens/auth/loginScreen'

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action)}
});

// Map state function to component props
const mapStateToProps = (state) => ({
    validation: state.validation
});

// Connect React to Redux
const login = connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

export default login