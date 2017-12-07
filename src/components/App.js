import { bindActionCreators } from 'redux';
import {connect} from "react-redux";
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';


// export the connected class
function mapStateToProps(state) {
    return {
        clients: state.clients,
    };
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);