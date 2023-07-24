import { configureStore, combineReducers } from "@reduxjs/toolkit"
import logoutReducer from "./reducers/logout/logout"
import loginAdminReducer from "./reducers/login/loginAdmin"
import loginCustomerReducer from "./reducers/login/loginCustomer"
import forgotPasswordReducer from "./reducers/password/forgotpassword"
import resetPasswordReducer from "./reducers/password/resetpassword"
import superAdminReducer from "./reducers/superAdminOnboarding/superadmin"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
import thunk from "redux-thunk"

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['loginAdmin', 'loginCustomer', 'forgotpassword', 'resetpassword', "logout"]
}

const rootReducers = combineReducers({
    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer,
    loginAdmin: loginAdminReducer,
    loginCustomer: loginCustomerReducer,
    superAdmin: superAdminReducer,
    logout: logoutReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)