import useRootStore from "@/store";
import { useNavigate } from "react-router-dom";
import { MenuProps } from "antd";
import { logout } from "@/utils";

function useHeaderCompModel() {
  const { i8n, user } = useRootStore();
  const texts = i8n.getLocaleTexts<IHeaderCompLT>("HeaderComp");

  const navigate = useNavigate();
  const toPage = () => {
    navigate("/login");
  };

  const drownMenu = [{ key: "logout", label: texts.logout }];
  const menuClick: MenuProps["onClick"] = ({ key }) => {
    if (key === "logout") {
      logout();
    }
  };

  return { toPage, texts, i8n, drownMenu, menuClick,user };
}

export default useHeaderCompModel;
