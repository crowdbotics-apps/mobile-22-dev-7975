import axios from "axios"
import {
  BOOLEANPLUGIN_USERNAME,
  BOOLEANPLUGIN_PASSWORD
} from "react-native-dotenv"
const booleanplugin = axios.create({
  baseURL: "https://www.google.com",
  auth: { username: BOOLEANPLUGIN_USERNAME, password: BOOLEANPLUGIN_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function get_albums_read({ ids }) {
  return booleanplugin.get(`/albums`, { params: { ids: ids } })
}
export const apiService = { get_albums_read }
