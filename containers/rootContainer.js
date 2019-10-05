import { connect } from 'react-redux'
import Root from '../screens/root'

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action)}
});

// Map state function to component props
const mapStateToProps = (state) => ({
    user: state.user
});

// Connect React to Redux
const root = connect(mapStateToProps, mapDispatchToProps)(Root);

export default root