import { createStore, compose } from "redux";
import { browserHistory } from "react-router";
import { syncHistoryWithStore} from "react-router-redux";

import clients from './data/clients';
import { reducers } from "./reducers/index";

const defaultState = {
  clients
};

const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

// create the store
const store = createStore(reducers, defaultState, enhancers);
const history = syncHistoryWithStore(browserHistory, store);


// export
export { store, history };
