import { createContext, useMemo } from "react";

export const TabsContext = createContext<
  | { activeTab: string | null; onChangeActiveTab: (tabValue: string) => void }
  | null
  | undefined
>(null);

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
    [activeTab, onChangeActiveTab],
  );

  return (
    <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>
  );
};
