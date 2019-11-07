export const FETCH_DATA_PENDING = 'GET_DATA_PENDING';
export const FETCH_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const FETCH_DATA_ERROR = 'GET_DATA_ERROR';
export const SET_TEL = 'SET_TEL';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_SOCIAL_FB = 'SET_SOCIAL_FB';
export const SET_SOCIAL_INSTA = 'SET_SOCIAL_INSTA';
export const SET_SOCIAL_YOUTUBE = 'SET_SOCIAL_YOUTUBE';

export function fetchDataPending() {
  return {
    type: FETCH_DATA_PENDING
  }
}

export function fetchDataSuccess(data) {
  return {
    type: FETCH_DATA_SUCCESS,
    data
  }
}

export function fetchDataError(error) {
  return {
    type: FETCH_DATA_ERROR,
    error
  }
}

export function setTel(tel) {
  return {
    type: SET_TEL,
    tel
  }
}

export function setEmail(email) {
  return {
    type: SET_EMAIL,
    email
  }
}

export function setSocialFb(fb) {
  return {
    type: SET_SOCIAL_FB,
    fb
  }
}

export function setSocialInsta(insta) {
  return {
    type: SET_SOCIAL_INSTA,
    insta
  }
}

export function setSocialYoutube(youtube) {
  return {
    type: SET_SOCIAL_YOUTUBE,
    youtube
  }
}

