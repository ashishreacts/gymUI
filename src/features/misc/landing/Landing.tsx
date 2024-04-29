import { Head } from "@/components/Head";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <>
      <Head title="Landing" />
      Landing Page
      <ul>
        <li>
          <Link to="/app">
            Go to Main App (default is plans, so you will be redirected)
          </Link>
        </li>
        <li>
          <Link to="/app/plans">Go to Plans</Link>
        </li>
      </ul>
    </>
  );
};
