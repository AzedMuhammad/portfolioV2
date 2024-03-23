import Footer from "./Footer";
import SocialMedia from "./SocialMedia";
import Suggestion from "./Suggestion";

const Contact = () => {
  return (
    <>
      <div className="w-full bg-darkBlue">
        <div className="container flex flex-row mx-auto">
          <SocialMedia />
          <Suggestion />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
