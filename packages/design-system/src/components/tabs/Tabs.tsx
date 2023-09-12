import { useDefaultContext } from "hooks";

import { tabListStyle, tabStyle } from "./Tabs.css";
import { TabPanelProps, TabProps, TabsProps } from "./Tabs.types";
import { TabsContext, TabsContextProvider } from "./TabsContext";

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
  const { activeTab, onChangeActiveTab } = useDefaultContext(TabsContext);

  const handleClick = () => {
    onChangeActiveTab(value);
  };

  return (
    <div
      className={tabStyle({
        active: activeTab === value,
      })}
      onClick={handleClick}
    >
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
  const { activeTab } = useDefaultContext(TabsContext);

  if (activeTab !== value) return null;

  return <>{children}</>;
};

Tabs.TabList = TabList;
Tabs.Tab = Tab;
Tabs.TabPanels = TabPanels;
Tabs.TabPanel = TabPanel;
