const pool = require("../../databse");

exports.create = async (req, res) => {
    try {
        const {
            id,
            name,
            price,
            discount,
            quantityAvailable,
            category,
            currentPrice,
        } = req.body;

        const values = [
            id,
            name,
            price,
            discount,
            quantityAvailable,
            category,
            currentPrice,
        ];

        const text =
            "INSERT INTO product(id, name, price, discount, quantity, category, current_price) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *";

        const data = await pool.query(text, values);

        return res.status(200).json(data);
    } catch (error) {
        return res.status(400).json(error);
    }
};

const reviews = [
    {
        name: "Anh Tran",
        avatar: "/images/featured-1.jpg",
        description:
            "<p>Sản phẩm rất tốt. Mặc vào cho cảm giác thoải mái, hợp thời trang. Sẽ tiếp tục ủng hộ shop trong tương lai.</p>",
        punctuation: 2,
    },
    {
        name: "Anh Tran",
        avatar: "/images/featured-1.jpg",
        description:
            "<p>Sản phẩm rất tốt. Mặc vào cho cảm giác thoải mái, hợp thời trang. Sẽ tiếp tục ủng hộ shop trong tương lai.</p>",
        punctuation: 4,
    },
    {
        name: "Anh Tran",
        avatar: "/images/featured-1.jpg",
        description:
            "<p>Sản phẩm rất tốt. Mặc vào cho cảm giác thoải mái, hợp thời trang. Sẽ tiếp tục ủng hộ shop trong tương lai.</p>",
        punctuation: 5,
    },
];

const punctuationReview = {
    countOpionions: 81,
    punctuation: 4.5,
    votes: [
        {
            value: 1,
            count: 1,
        },
        {
            value: 2,
            count: 10,
        },
        {
            value: 3,
            count: 10,
        },
        {
            value: 4,
            count: 20,
        },
        {
            value: 5,
            count: 40,
        },
    ],
};

const priceFormat = (price) => {
    return price.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
    });
};

exports.getAll = async (req, res) => {
    try {
        const productQuery = "SELECT * FROM PRODUCT";

        const product = await pool
            .query(productQuery)
            .then((data) => data.rows);

        product.map((p) => {
            p.colors = p.colors.split(", ");
            p.sizes = p.sizes.split(", ");
            p.punctuationReview = punctuationReview;
            p.images = [p.images];
            p.reviews = reviews;
            p.currentPrice = priceFormat(p.current_price);
            p.price = priceFormat(p.price);
            return p;
        });

        return res.status(200).json(product);
    } catch (error) {
        return res.status(400).json(error);
    }
};

exports.getById = async (req, res) => {
    try {
        const { id } = req.params;

        const values = [id];

        const productQuery = "SELECT * FROM PRODUCT WHERE ID=$1";

        const product = await pool
            .query(productQuery, values)
            .then((data) => data.rows[0]);

        product.colors = product.colors.split(", ");
        product.sizes = product.sizes.split(", ");
        product.punctuationReview = punctuationReview;
        product.reviews = reviews;
        product.images = [product.images];
        product.currentPrice = priceFormat(product.current_price);
        delete product.current_price;
        product.price = priceFormat(product.price);

        return res.status(200).json(product);
    } catch (error) {
        return res.status(400).json(error);
    }
};
