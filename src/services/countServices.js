const COUNT_KEY = "counts";

export const getCount = () => {
    const data = localStorage.setItem[COUNT_KEY];
    return data ? JSON.parse(data) : [];
};

export const saveCount = (counts) => {
    localStorage.setItem(COUNT_KEY, JSON.stringify(counts));
}