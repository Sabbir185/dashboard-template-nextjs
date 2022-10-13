import { get, post, put, del } from './api_helpers'


// user API's
export const verifyUserAPI = data => get('/user/verify', data);
export const fetchProfile = data => get('/user/verify', data);
export const fetchSiteSettings = data => get('/user/verify', data);

export const editUserAPI = (data, queryValue) => put('/user/edit', data, queryValue);
export const deleteUserAPI = data => del('/user/delete', data);
export const userProfilePasswordChangeAPI = data => post('/user/passwordChange', data);
