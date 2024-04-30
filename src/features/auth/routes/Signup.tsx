import { useNavigate } from "react-router-dom";
import { SignupForm } from "../components/SignupForm";

const Signup = () => {
  const navigate = useNavigate();

  return <SignupForm onSuccess={() => navigate("/app")} />;
};

export default Signup;
