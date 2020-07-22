import * as types from "./constants"
export const get_albums_read = ids => ({ type: types.GET_ALBUMS_READ, ids })
export const get_albums_readSucceeded = response => ({
  type: types.GET_ALBUMS_READ_SUCCEEDED,
  response
})
export const get_albums_readFailed = error => ({
  type: types.GET_ALBUMS_READ_FAILED,
  error
})
