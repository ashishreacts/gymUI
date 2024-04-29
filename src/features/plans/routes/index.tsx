import { Route, Routes } from "react-router-dom";
import Plans from "./Plans";

export const PlanRoute = () => {
  return (
    <Routes>
      <Route path="" element={<Plans />} />
      {/* Example: You can add more routes related to plan feature here */}
      {/* <Route path="/create" element={<CreatePlan />} /> */}
    </Routes>
  );
};
