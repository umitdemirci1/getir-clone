import App from '../App';

import {
    createBrowserRouter,
} from "react-router-dom";
import Yemek from '../pages/yemek/Yemek';
import Main from '../pages/main/home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Main />
            },
            {
                path: "/yemek",
                element: <Yemek />
            }
        ]
    },
]);

export default router;