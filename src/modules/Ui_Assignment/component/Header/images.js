import logoImage from "../../images/logoImages/logo.png";

export default function useImages() {
  const LogoImage = () => {
    return <img src={logoImage} alt={`logoImage`} />;
  };
  return { LogoImage };
}
