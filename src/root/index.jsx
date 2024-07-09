import { Navigate, Route, Routes } from "react-router-dom";
import { Container } from "./style";
import navbar from "../utils/navbar";
import { Sidebar } from "../components/Sidebar";

export const Root = () => {
    return (
        <Container>
            <Routes>
                <Route element={<Sidebar />}>
                    {navbar.map((parent) => {
                        const ElementParent = parent.element;
                        if (parent?.children) {
                            return parent.children.map((child) => {
                                const ElementChild = child.element;
                                return (
                                    <Route
                                        key={child.id}
                                        path={child.path}
                                        element={<ElementChild />}
                                    />
                                );
                            });
                        } else
                            return (
                                !parent.hidden && (
                                    <Route
                                        key={parent.id}
                                        path={parent.path}
                                        element={<ElementParent />}
                                    />
                                )
                            );
                    })}
                </Route>
                
                {/*  */}
                {navbar.map((parent) => {
                    const ElementParent = parent.element;
                    return (
                        parent.hidden && (
                            <Route
                                key={parent.id}
                                path={parent.path}
                                element={<ElementParent />}
                            />
                        )
                    );
                })}

                <Route path="/" element={<Navigate to={"/login"} />} />
                <Route path="*" element={<h1>404 not found</h1>} />
            </Routes>
        </Container>
    );
};

export default Root;
