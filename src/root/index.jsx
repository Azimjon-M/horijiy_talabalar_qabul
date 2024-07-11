import { Route, Routes } from "react-router-dom";
import routItems from "../utils/routes";
import Navbar from "../components/Navbar";
import Saidbar from "../components/Saidbar";
import Login from "../views/Login";
import NotFoundPage from "../views/NotFoundPage";

export const Root = () => {
    return (
        <div>
            <Routes>
                {/* USER */}
                <Route element={<Navbar />}>
                    {routItems.map((routeItem) => {
                        const ElementParent = routeItem.element;
                        return (
                            !routeItem.isPrivate && (
                                <Route
                                    key={routeItem.id}
                                    path={routeItem.path}
                                    element={<ElementParent />}
                                />
                            )
                        );
                    })}
                </Route>
                {/* ADMIN */}
                <Route element={<Saidbar />}>
                    {routItems.map((routeItem) => {
                        const ElementParent = routeItem.element;
                        return (
                            routeItem.hidden && (
                                <Route
                                    key={routeItem.id}
                                    path={routeItem.path}
                                    element={<ElementParent />}
                                />
                            )
                        );
                    })}
                </Route>
                <Route element={<Login />} path="/login" />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
};

export default Root;
