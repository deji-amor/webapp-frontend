import { configureStore, combineReducers } from "@reduxjs/toolkit"
import authUserReducer from "./reducers/users/authUser"
import usersReducer from "./reducers/users/users"
import customersReducer from "./reducers/users/customers/customers"
import logoutReducer from "./reducers/logout/logout"
import loginAdminReducer from "./reducers/login/loginAdmin"
import loginCustomerReducer from "./reducers/login/loginCustomer"
import forgotPasswordReducer from "./reducers/password/forgotpassword"
import resetPasswordReducer from "./reducers/password/resetpassword"
import superAdminReducer from "./reducers/superAdminOnboarding/superadmin"
import ticketCreationReducer from "./reducers/tickets/ticketCreation"
import ticketsReducer from "./reducers/tickets/tickets"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
import thunk from "redux-thunk"

const persistConfig = {
	key: "root",
	storage,
	blacklist: [
		"loginAdmin",
		"loginCustomer",
		"forgotpassword",
		"resetpassword",
		"logout",
		"ticketCreation",
		"tickets",
        "customers"
	],
};

const rootReducers = combineReducers({
    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer,
    loginAdmin: loginAdminReducer,
    loginCustomer: loginCustomerReducer,
    superAdmin: superAdminReducer,
    logout: logoutReducer,
    authUser: authUserReducer,
    users: usersReducer,
    ticketCreation: ticketCreationReducer,
    tickets: ticketsReducer, 
    customers: customersReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)

// 