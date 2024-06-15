import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"

const TodoTab = ({
    todayTaskList
}: any) => {
    return (
        <Tabs isFitted variant='enclosed'>
            <TabList mb='1em'>
                <Tab>Today</Tab>
                <Tab>Tomorrow</Tab>
                <Tab>For to do</Tab>
                <Tab>Someday</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    {todayTaskList()}
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
                <TabPanel>
                    <p>3!</p>
                </TabPanel>
                <TabPanel>
                    <p>4!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export { TodoTab }