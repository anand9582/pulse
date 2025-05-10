import MainCountingIDGenerator, { insertIDIntoData } from "./MainCountingID";
import { faUser, faGlobe, faHouse } from '@fortawesome/free-solid-svg-icons'

const LandingExplore = [
    {
        iconName: faUser,
        itemTitle: "population",
        itemNumber: "8.66 m"
    },
    {
        iconName: faGlobe,
        itemTitle: "territory",
        itemNumber: "513.120 km2"
    },
    {
        iconName: faHouse,
        itemTitle: "AVG price",
        itemNumber: "$946.000"
    },
];

(() => {
    insertIDIntoData(MainCountingIDGenerator, LandingExplore);
})();

export default LandingExplore;