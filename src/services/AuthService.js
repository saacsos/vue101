import Axios from "axios"

let auth_key = "auth-pokedex"
let auth = JSON.parse(localStorage.getItem(auth_key))
const user = auth ? auth.user : ""
const jwt = auth ? auth.jwt : ""

const api_endpoint =
  process.env.VUE_APP_POKEDEX_ENDPOINT || "http://localhost:1337"

export default {
  isAuthen() {
    return (user !== "") & (jwt !== "")
  },

  getUser() {
    return user
  },

  getApiHeader() {
    if (jwt !== "") {
      return {
        headers: {
          Authorization: "Bearer " + jwt,
        },
      }
    } else {
      return {}
    }
  },

  async login({ email, password }) {
    try {
      let res = await Axios.post(api_endpoint + "/auth/local", {
        identifier: email,
        password: password,
      })
      if (res.status === 200) {
        localStorage.setItem(
          auth_key,
          JSON.stringify({
            user: res.data.user,
            jwt: res.data.jwt,
          })
        )
        return {
          success: true,
          user: res.data.user
        }
      } else {
        return {
          success: false,
          response: res.data,
        }
      }
    } catch (e) {
      console.error(e.response)
      return {
        success: false,
        message: e.response.data.message[0].messages[0].message,
      }
    }
  },

  logout() {
    localStorage.removeItem(auth_key)
  },

  async register({ username, email, password }) {
    try {
      let res = await Axios.post(api_endpoint + "/auth/local/register", {
        username: username,
        email: email,
        password: password,
      })

      localStorage.setItem(
        auth_key,
        JSON.stringify({
          user: res.data.user,
          jwt: res.data.jwt,
        })
      )

      return {
        success: true,
        user: res.data.user
      }
    } catch (e) {
      console.error(e.response)
      return {
        success: false,
        message: e.response.data.message[0].messages[0].message,
      }
    }
  },
}
