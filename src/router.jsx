import {createBrowserRouter} from "react-router";
import App from "./App.jsx";
import {Home} from "./pages/Home.jsx";
import {Contact} from "./pages/Contact.jsx";
import {About} from "./pages/About.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
        ]
    }
])