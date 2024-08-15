const db = require('../Config/db');

const getProjects = async (req, res) => {
    try {
        const [projects] = await db.promise().query("SELECT * FROM projects WHERE type = 'web-development'");
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getProjects };
