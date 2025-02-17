import axios from "axios"
const newConnector = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/14675/share/mab3PmJr5FxdzpVxaWukHykZ7fw",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const mobilenovAPI = axios.create({
  baseURL: "https://mobile-6-nov-dev-14675.botics.co/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_customtext_list(action) {
  return mobilenovAPI.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read(action) {
  return mobilenovAPI.get(`/api/v1/customtext/${action.id}/`)
}
function api_v1_customtext_update(action) {
  return mobilenovAPI.put(`/api/v1/customtext/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_customtext_partial_update(action) {
  return mobilenovAPI.patch(`/api/v1/customtext/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_homepage_list(action) {
  return mobilenovAPI.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read(action) {
  return mobilenovAPI.get(`/api/v1/homepage/${action.id}/`)
}
function api_v1_homepage_update(action) {
  return mobilenovAPI.put(`/api/v1/homepage/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_homepage_partial_update(action) {
  return mobilenovAPI.patch(`/api/v1/homepage/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_jhgjh_list(action) {
  return mobilenovAPI.get(`/api/v1/jhgjh/`)
}
function api_v1_jhgjh_create(action) {
  return mobilenovAPI.post(`/api/v1/jhgjh/`, null, { data: action.data })
}
function api_v1_jhgjh_read(action) {
  return mobilenovAPI.get(`/api/v1/jhgjh/${action.id}/`)
}
function api_v1_jhgjh_update(action) {
  return mobilenovAPI.put(`/api/v1/jhgjh/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_jhgjh_partial_update(action) {
  return mobilenovAPI.patch(`/api/v1/jhgjh/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_jhgjh_delete(action) {
  return mobilenovAPI.delete(`/api/v1/jhgjh/${action.id}/`)
}
function api_v1_login_create(action) {
  return mobilenovAPI.post(`/api/v1/login/`)
}
function api_v1_signup_create(action) {
  return mobilenovAPI.post(`/api/v1/signup/`, null, { data: action.data })
}
function api_v1_ttttggkjgkh_list(action) {
  return mobilenovAPI.get(`/api/v1/ttttggkjgkh/`)
}
function api_v1_ttttggkjgkh_create(action) {
  return mobilenovAPI.post(`/api/v1/ttttggkjgkh/`, null, { data: action.data })
}
function api_v1_ttttggkjgkh_read(action) {
  return mobilenovAPI.get(`/api/v1/ttttggkjgkh/${action.id}/`)
}
function api_v1_ttttggkjgkh_update(action) {
  return mobilenovAPI.put(`/api/v1/ttttggkjgkh/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_ttttggkjgkh_partial_update(action) {
  return mobilenovAPI.patch(`/api/v1/ttttggkjgkh/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_ttttggkjgkh_delete(action) {
  return mobilenovAPI.delete(`/api/v1/ttttggkjgkh/${action.id}/`)
}
function rest_auth_login_create(action) {
  return mobilenovAPI.post(`/rest-auth/login/`, null, { data: action.data })
}
function rest_auth_logout_list(action) {
  return mobilenovAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(action) {
  return mobilenovAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(action) {
  return mobilenovAPI.post(`/rest-auth/password/change/`, null, {
    data: action.data
  })
}
function rest_auth_password_reset_create(action) {
  return mobilenovAPI.post(`/rest-auth/password/reset/`, null, {
    data: action.data
  })
}
function rest_auth_password_reset_confirm_create(action) {
  return mobilenovAPI.post(`/rest-auth/password/reset/confirm/`, null, {
    data: action.data
  })
}
function rest_auth_registration_create(action) {
  return mobilenovAPI.post(`/rest-auth/registration/`, null, {
    data: action.data
  })
}
function rest_auth_registration_verify_email_create(action) {
  return mobilenovAPI.post(`/rest-auth/registration/verify-email/`, null, {
    data: action.data
  })
}
function rest_auth_user_read(action) {
  return mobilenovAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(action) {
  return mobilenovAPI.put(`/rest-auth/user/`, null, { data: action.data })
}
function rest_auth_user_partial_update(action) {
  return mobilenovAPI.patch(`/rest-auth/user/`, null, { data: action.data })
}
export const apiService = {
  api_v1_customtext_list,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_homepage_list,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_jhgjh_list,
  api_v1_jhgjh_create,
  api_v1_jhgjh_read,
  api_v1_jhgjh_update,
  api_v1_jhgjh_partial_update,
  api_v1_jhgjh_delete,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_ttttggkjgkh_list,
  api_v1_ttttggkjgkh_create,
  api_v1_ttttggkjgkh_read,
  api_v1_ttttggkjgkh_update,
  api_v1_ttttggkjgkh_partial_update,
  api_v1_ttttggkjgkh_delete,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
