import { ContentLayout } from "@/components/Layout";
import PlanList from "../components/PlanList";

// This component just wraps single or multiple components under one layout
const Plans = () => {
  const style = {
    display: "flex",
    justifyContent: "left",
  };

  return (
    <ContentLayout title="Plans">
      <div style={style}>
        <div style={style}>
          <PlanList />
          <PlanList />
        </div>
        <div style={style}>
          <PlanList />
          <PlanList />
        </div>
      </div>
    </ContentLayout>
  );
};

export default Plans;
