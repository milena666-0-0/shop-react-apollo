import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { ApolloProvider } from "react-apollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

import { Router } from "./routes/Router";
import ProductsPageContainer from "./pages/ProductsPage/containers/ProductsPageContainer";
import ProductDetailsContainer from "./pages/ProductDetailsPage/containers/ProductDetailsContainer";
import CartPageContainer from "./pages/Сart/containers/CartPageContainer";
import MainLayout from "./components/MainLayout/index";
import { configureStore } from "./store/configureStore";

import "./styles/normolize.css";

const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: "http://localhost:4000/graphql",
});

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ApolloProvider client={client}>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<MainLayout>
							<Router>
								<ProductsPageContainer />
								<ProductDetailsContainer />
								<CartPageContainer />
							</Router>
						</MainLayout>
					</PersistGate>
				</Provider>
			</ApolloProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
