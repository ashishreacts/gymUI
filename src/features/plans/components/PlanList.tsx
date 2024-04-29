import { CryptoIcon, CurrencyCode } from "@/components/Elements";

const PlanList = () => {
  const plans = [
    {
      id: 1,
      name: "Basic Plan",
      price: "$9.99/month",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: "$19.99/month",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    },
  ];

  return (
    <div>
      <h2>Choose a Plan</h2>
      <CryptoIcon currencyCode={CurrencyCode.BTC} />
      <ul>
        {plans.map((plan) => (
          <li key={plan.id}>
            <h3>{plan.name}</h3>
            <p>{plan.price}</p>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanList;
