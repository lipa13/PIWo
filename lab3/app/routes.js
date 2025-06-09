import {index, route} from "@react-router/dev/routes";

export default [
    index("routes/home.jsx"),
    route("shop", "routes/shop.jsx"),
    route("sell", "routes/sell.jsx"),
    route("account", "routes/account.jsx"),
];
