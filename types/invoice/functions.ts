import moment from "moment";

const toPriceString = (price: number) => {
    return price?.toLocaleString(undefined, {minimumFractionDigits: 2});
};

const toDateFormat = (_date: string) => {
    return moment(_date).format("DD MMM YYYY");
};

export {
    toPriceString,
    toDateFormat,
};
