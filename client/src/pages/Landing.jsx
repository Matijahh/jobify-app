import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby photo booth normcore godard, cornhole tofu man braid etsy
            poke mlkshk church-key four dollar toast art party snackwave. Before
            they sold out polaroid narwhal roof party, messenger bag pok pok
            bespoke 3 wolf moon farm-to-table chambray fanny pack snackwave
            adaptogen. 3 wolf moon cloud bread actually tonx, lo-fi narwhal fit
            single-origin coffee sus hot chicken.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="Job Hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
