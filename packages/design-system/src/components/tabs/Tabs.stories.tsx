import type { Meta } from "@storybook/react";
import { useState } from "react";

import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
};

export default meta;

export const Default = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <Tabs
      activeTab={activeTab}
      onChangeActiveTab={(value) => setActiveTab(value)}
    >
      <Tabs.TabList>
        <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
        <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
        <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
      </Tabs.TabList>
      <Tabs.TabPanels style={{ marginTop: "36px" }}>
        <Tabs.TabPanel value="tab1">Tab 1 content</Tabs.TabPanel>
        <Tabs.TabPanel value="tab2">Tab 2 content</Tabs.TabPanel>
        <Tabs.TabPanel value="tab3">Tab 3 content</Tabs.TabPanel>
      </Tabs.TabPanels>
    </Tabs>
  );
};
