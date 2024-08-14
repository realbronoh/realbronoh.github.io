import { useTranslation } from "react-i18next";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between gap-8 p-12 pb-0">
      <Title />
      <Links />
    </header>
  );
};

const Title = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-3 items-center sm:items-start">
      <h1 className="not-prose text-4xl font-semibold">{t("header.name")}</h1>
      <h2 className="not-prose text-lg">{t("header.description")}</h2>
    </div>
  );
};

const Links = () => {
  return (
    <div className="flex flex-col items-center sm:items-end">
      <Icons />
      <p>Email: realbro.noh@gmail.com</p>
    </div>
  );
};

const Icons = () => {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 bg-red-600"></div>
      <div className="w-12 h-12 bg-red-600"></div>
      <div className="w-12 h-12 bg-red-600"></div>
    </div>
  );
};

export default Header;
