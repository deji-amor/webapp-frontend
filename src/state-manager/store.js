import { configureStore, combineReducers } from "@reduxjs/toolkit"
import uiReducer from "./reducers/UI/ui"
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
import ticketEditionReducer from "./reducers/tickets/ticketEdition"
import ticketDetailsReducer from "./reducers/tickets/ticketDetails"
import ticketHistoryReducer from "./reducers/tickets/ticketHistory"
import testingReducer from "./reducers/tickets/testing"
import ticketsReducer from "./reducers/tickets/tickets"
import reportsReducer from "./reducers/reports/report"
import ticketReportReducer from "./reducers/reports/tickets/ticketreport"
import customerReportReducer from "./reducers/reports/customers/customers"
import dashboardReducer from "./reducers/dashboard/dashboard"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
import thunk from "redux-thunk"

const persistConfig = {
	key: "root",
	storage,
	blacklist: [
		"ui",
		"loginAdmin",
		"loginCustomer",
		"forgotpassword",
		"resetpassword",
		"logout",
		"ticketCreation",
		"ticketEdition",
		"ticketDetails",
		"ticketHistory",
        "testing",
		"tickets",
        "customers",
        "users",
        "reports",
        "ticketReports",
        "customerReports",
        "dashboard"
	],
};

const rootReducers = combineReducers({
    ui: uiReducer,
    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer,
    loginAdmin: loginAdminReducer,
    loginCustomer: loginCustomerReducer,
    superAdmin: superAdminReducer,
    logout: logoutReducer,
    authUser: authUserReducer,
    users: usersReducer,
    ticketCreation: ticketCreationReducer,
    ticketEdition: ticketEditionReducer,
    ticketDetails: ticketDetailsReducer,
    ticketHistory: ticketHistoryReducer,
    testing: testingReducer,
    tickets: ticketsReducer, 
    customers: customersReducer,
    reports: reportsReducer,
    ticketReports: ticketReportReducer,
    customerReports: customerReportReducer,
    dashboard: dashboardReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)

// 