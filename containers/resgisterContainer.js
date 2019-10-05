import { connect } from 'react-redux'
import RegisterScreen from '../screens/auth/registerScreen'

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action)}
});

// Map state function to component props
const mapStateToProps = (state) => ({
    user: state.user
});

// Connect React to Redux
const register = connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);

export default register