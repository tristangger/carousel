import React, { Dispatch } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/store";
import { init } from "./actions/init";

const create = (config) => {
    const dispatchStore = store.dispatch as typeof store.dispatch | Dispatch<any>;
    dispatchStore(init(config));
    render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById(config.container),
    );
};

export { create };
