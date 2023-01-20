import NavBar from "../../components/navbar";
import "./index.css";

const MainLayout = ({ children }) => {
  return (
    <div className="MainLayout">
      <NavBar />
      {children}
    </div>
  );
};

export default MainLayout;
