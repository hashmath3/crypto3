import axios from "axios";
import { COIN_GECKO_URL } from "../constants";
const today = new Date();

export const getPriorDate = (days) => {
  return new Date(new Date().setDate(today.getDate() - days));
};