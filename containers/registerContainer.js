import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../actions/registerAction'
import RegisterScreen from '../screens/auth/registerScreen'

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

const mapStateToProps = (state) => ({
    email: '',
    password: state.password,
    lastName: state.password,
    hasAgree: state.hasAgree,
    firstName: state.firstName
});

const register = connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);

export default register