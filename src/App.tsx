import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { useAppSelector } from "./hooks";
import { ErrorHandler, NotFound, Layout, Home, UserDetails, OrderConfirmation } from './routes';
import { getError, getOrderStage } from './redux/slices/globalSlice';
import "./App.module.scss";

const App:FC = () => {
  const orderStage = useAppSelector(getOrderStage);
  const error = useAppSelector(getError);

  return (<Layout>
    {error ? 
    <ErrorHandler />
    :<Routes>
      {orderStage >= 0 && <Route path="/" element={<Home />} />}
      {orderStage >= 1 && <Route path="user-details" element={<UserDetails />} />}
      {orderStage >= 2 && <Route path="order-confirmation" element={<OrderConfirmation />} />}
      <Route path="*" element={<NotFound />} />
    </Routes>}
  </Layout>);
}

export default App;