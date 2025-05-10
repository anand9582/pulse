import MainCountingIDGenerator, { insertIDIntoData } from "./MainCountingID";

const NavItems = [
    {
        itemName: "home",
        itemURL: "/",
    },
    {
        itemName: "about",
        itemURL: "/about",
    },
    {
        itemName: "deals",
        itemURL: "/deals",
    },
    {
        itemName: "reservation",
        itemURL: "/reservation",
    }
];


(() => {
    insertIDIntoData(MainCountingIDGenerator, NavItems);
})();

export default NavItems;