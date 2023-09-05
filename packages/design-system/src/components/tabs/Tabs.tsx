import { TabPanelProps, TabProps, TabsProps } from "./Tabs.types";
import { tabCustomStyle, tabListStyle } from "./Tabs.css";
import { TabsContextProvider, useTabsContext } from "contexts";

/** 기본적인 탭 컴포넌트입니다. */
export const Tabs = ({
  children,
  ...rests
}: React.PropsWithChildren<TabsProps>) => {
  return <TabsContextProvider {...rests}>{children}</TabsContextProvider>;
};

export const TabList = ({ children }: React.PropsWithChildren) => {
  return <div className={tabListStyle}>{children}</div>;
};

export const Tab = ({ value, children }: React.PropsWithChildren<TabProps>) => {
  const { activeTab, onChangeActiveTab } = useTabsContext();
  const activeVariant = activeTab === value ? "active" : "inActive";

  const handleClick = () => {
    onChangeActiveTab(value);
  };

  return (
    <div className={tabCustomStyle[activeVariant]} onClick={handleClick}>
      {children}
    </div>
  );
};

export const TabPanels = ({
  children,
  ...rests
}: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) => {
  return <div {...rests}>{children}</div>;
};

export const TabPanel = ({
  children,
  value,
}: React.PropsWithChildren<TabPanelProps>) => {
  const { activeTab } = useTabsContext();

  if (activeTab !== value) return null;

  return <>{children}</>;
};

Tabs.TabList = TabList;
Tabs.Tab = Tab;
Tabs.TabPanels = TabPanels;
Tabs.TabPanel = TabPanel;
