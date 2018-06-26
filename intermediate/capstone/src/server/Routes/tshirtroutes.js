import Express from "express";
const router = express.Router();
const {list,show } = require( "../controllers/tshirtController");


router.get("/tshirts", list);
router.get("/tshirt/:id", show);



module.exports = router;