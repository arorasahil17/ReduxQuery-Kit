import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import { routes } from "./routes";
import { Suspense } from "react";
import Spinner from "./components/ui/Spinner";
import NotFound from "./components/ui/NotFound";

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            {routes.map(({ name, path, component: Component }) => {
              return (
                <Route
                  key={name}
                  path={path}
                  element={
                    <Suspense fallback={<Spinner />}>
                      <Component />
                    </Suspense>
                  }
                />
              );
            })}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
