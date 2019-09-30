import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'

//import * as actions from '../actions/authAction'
import LoginScreen from '../screens/auth/loginScreen'

/*const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});*/

const mapStateToProps = (state) => ({
    user: state.user
});

const login = connect(mapStateToProps)(LoginScreen);

export default login