import express from "express";
import { 
    createCard,
    getDisplayCard,
    getUserCards,
    deleteCard,
    updateCard,
    getGeneralCard,
    getCardIdByShortCode
} from "../controllers/cardsController.js";
import { isAuthenticatedUser, isUserVerified } from "../middleware/auth.js";

const router = express.Router();

router.route("/short/:id").get(getCardIdByShortCode);
router.route("/new").post(isAuthenticatedUser, isUserVerified, createCard);
router.route("/details/:id").get(getDisplayCard);
router.route("/detailed/:id").get(isAuthenticatedUser,  isUserVerified, getGeneralCard);
router.route("/user").get(isAuthenticatedUser, isUserVerified, getUserCards);
router.route("/edit/:id")
    .delete(isAuthenticatedUser, isUserVerified, deleteCard)
    .put(isAuthenticatedUser, isUserVerified, updateCard);

export default router;
