exports.getSizes = (req, res) => {

    const productsSizes = [
        {
            id: "1",
            label: "XS",
        },
        {
            id: "2",
            label: "S",
        },
        {
            id: "3",
            label: "M",
        },
        {
            id: "4",
            label: "L",
        },
        {
            id: "5",
            label: "XL",
        },
        {
            id: "6",
            label: "XXL",
        },
    ];

    return res.status(200).json(productsSizes)
};
