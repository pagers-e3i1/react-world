import { createContext, useContext, useMemo } from "react";

const TabsContext = createContext<{
  activeTab: string | null;
  onChangeActiveTab: (tabValue: string) => void;
}>({
  activeTab: null,
  onChangeActiveTab: () => {},
});

interface TabsContextProviderProps {
  activeTab: string | null;
  onChangeActiveTab: (value: string) => void;
}

export const TabsContextProvider = ({
  activeTab,
  onChangeActiveTab,
  children,
}: React.PropsWithChildren<TabsContextProviderProps>) => {
  const contextValue = useMemo(
    () => ({ activeTab, onChangeActiveTab }),
    [activeTab, onChangeActiveTab]
  );

  return (
    <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTabsContext = () => useContext(TabsContext);
