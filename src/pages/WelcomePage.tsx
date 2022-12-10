import FormContainer from "../components/FromContainer/FrormContainer";
import Progress from "../components/Progress/Progress";

const WelcomePage = () => {
  return (
    <main className="flex min-h-full">
      <Progress />
      <FormContainer />
    </main>
  );
};

export default WelcomePage;
