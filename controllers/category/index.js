const models = require("../../models");
const slugify = require("slugify");

exports.create = async (req, res) => {
    try {
        const { name, description } = req.body;

        const slug = slugify(name).toLowerCase();

        await models.ProductCategory.create({
            name: name,
            slug: slug,
            description: description,
            created_at: new Date(),
        });

        return res.status(200).json({
            name: name,
            slug: slug,
            description: description,
        });
    } catch (error) {
        return res.status(401).json(error);
    }
};

exports.list = async (req, res) => {
    try {
        const categories = await models.ProductCategory.findAll();

        return res.status(200).json(categories);
    } catch (error) {
        return res.status(401).json(error);
    }
};

exports.read = async (req, res) => {
    try {
        const slug = req.params.slug;

        const category = await models.ProductCategory.findOne({
            where: {
                slug: slug,
            },
        });

        return res.status(200).json(category);
    } catch (error) {
        return res.status(401).json(error);
    }
};

exports.remove = async (req, res) => {
    try {
        const slug = req.params.slug;

        const category = await models.ProductCategory.findOne({
            where: {
                slug: slug,
            },
        });

        const { name } = category

        await category.destroy()

        return res.status(202).json({
            message: 'Xóa thành công.',
            name: name
        });
    } catch (error) {
        return res.status(401).json(error);
    }
};
