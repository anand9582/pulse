import MainCountingIDGenerator, { insertIDIntoData } from "./MainCountingID";

const NavItems = [
    {
        itemName: "Our Solutions",
        itemURL: "#",
    },
    {
        itemName: "Industries",
        itemURL: "#",
    },
    {
        itemName: "Our Pricing",
        itemURL: "#",
    }
];


(() => {
    insertIDIntoData(MainCountingIDGenerator, NavItems);
})();

export default NavItems;