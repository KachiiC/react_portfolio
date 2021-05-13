// COMPONENTS
import SiteCard from 'Pages/SiteComponents/SiteCard'
import SiteModal from 'Pages/SiteComponents/SiteModal'
import SiteTable from 'Pages/SiteComponents/SiteTable'
import SiteTabs from 'Pages/SiteComponents/SiteTabs'
import SiteTimeline from 'Pages/SiteComponents/SiteTimeline'
// DATA
import CardData from './ComponentsData/CardData'
import ModalData from './ComponentsData/ModalData'
import TableData from './ComponentsData/TableData'
import TabsData from './ComponentsData/TabsData'
import TimelineData from './ComponentsData/TimelineData'
// INTRODUCTIONS
import {
    SiteCardIntroduction, 
    SiteTablesIntroduction,
    SiteTimelineIntroduction,
    SiteTabsIntroduction,
    SiteModalIntroduction
} from './ComponentsText/ComponentsIntroductions'
// DESCRIPTIONS
import {
    SiteCardsDescription,
    SiteTableDescription,
    SiteTimelineDescription,
    SiteTabsDescription,
    SiteModalDescription
} from './ComponentsText/ComponentsDescriptions'

const SiteComponents = [
    {
        title: "React Cards",
        introduction: SiteCardIntroduction,
        component: <SiteCard data={CardData}/>,
        description: SiteCardsDescription
    },
    {
        title: "React Table",
        introduction: SiteTablesIntroduction,
        component: <SiteTable data={TableData}/>,
        description: SiteTableDescription
    
    },
    {
        title: "React Timeline",
        introduction: SiteTimelineIntroduction,
        component: <SiteTimeline data={TimelineData} />,
        description: SiteTimelineDescription
    
    },
    {
        title: "React Tabs",
        introduction: SiteTabsIntroduction,
        component: <SiteTabs tabs={TabsData} />,
        description: SiteTabsDescription
    },
    {
        title: "React Modal",
        introduction: SiteModalIntroduction,
        component: <SiteModal data={ModalData}/>,
        description: SiteModalDescription
  }
]

export default SiteComponents