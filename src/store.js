import { createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
const initialState=();
const composeEnhancer =window_REDUX_DEVTOOLS_EXTENSION_COMOSE_8// compose;
export default createStore(rootReducer,initialState,composeEnhancer(applyMiddleWare(thunk))
