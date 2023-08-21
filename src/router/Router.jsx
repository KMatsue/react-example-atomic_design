import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { DefalutLayout } from "../components/templates/DefaultLayout";
import { HeaderOnly } from "../components/templates/HeaderOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <DefalutLayout>
              <Top />
            </DefalutLayout>
          }
        />

        <Route
          path="/users"
          element={
            <HeaderOnly>
              <Users />
            </HeaderOnly>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
