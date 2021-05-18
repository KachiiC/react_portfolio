// COMPONENTS
import SiteCard from 'Pages/Components/SiteComponents/SiteCard'
import SiteModal from 'Pages/Components/SiteComponents/SiteModal'
import SiteTable from 'Pages/Components/SiteComponents/SiteTable'
import SiteTabs from 'Pages/Components/SiteComponents/SiteTabs'
import SiteCarousel from 'Pages/Components/SiteComponents/SiteCarousel'
// DATA
import CarouselData from './ComponentsData/CarouselData'
import CardData from './ComponentsData/CardData'
import ModalData from './ComponentsData/ModalData'
import TableData from './ComponentsData/TableData'
import TabsData from './ComponentsData/TabsData'
// INTRODUCTIONS
import {
    SiteCardIntroduction, 
    SiteTablesIntroduction,
    SiteTabsIntroduction,
    SiteModalIntroduction,
    SiteCarouselIntroduction
} from './ComponentsText/ComponentsIntroductions'
// DESCRIPTIONS
import {
    SiteCardsDescription,
    SiteTableDescription,
    SiteTabsDescription,
    SiteModalDescription,
    SiteCarouselDescription
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
    },
    {
        title: "React Carousel",
        introduction: SiteCarouselIntroduction,
        component: <SiteCarousel data={CarouselData}/>,
        description: SiteCarouselDescription,
    }
]

export default SiteComponents