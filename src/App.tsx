import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "./router/layout/layout";
import { RoutePaths } from "./router/enum/route-paths";
import { Home } from "./modules/home";
import { Contacts } from "./modules/contacts";
import { Settings } from "./modules/settings";

import "react-toastify/dist/ReactToastify.css";

const client = new QueryClient();

const App: React.FC = () => {
  return (
    <div>
      <QueryClientProvider client={client}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path={RoutePaths.HOME} element={<Home />} />
              <Route path={RoutePaths.CONTACTS} element={<Contacts />} />
              <Route path={RoutePaths.SETTINGS} element={<Settings />} />
            </Route>
          </Routes>
        </Router>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
          theme="dark"
        />
      </QueryClientProvider>
    </div>
  );
};

export default App;
