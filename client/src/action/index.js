export const FETCH_DATA_PENDING = 'GET_DATA_PENDING';
export const FETCH_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const FETCH_DATA_ERROR = 'GET_DATA_ERROR';
export const SET_TEL = 'SET_TEL';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_SOCIAL_FB = 'SET_SOCIAL_FB';
export const SET_SOCIAL_INSTA = 'SET_SOCIAL_INSTA';
export const SET_SOCIAL_YOUTUBE = 'SET_SOCIAL_YOUTUBE';
export const SET_HEADER_LOGO = 'SET_HEADER_LOGO';
export const SET_HEADER_LOGO_TYPE = 'SET_HEADER_LOGO_TYPE';
export const SET_HEADER_TEXT = 'SET_HEADER_LOGO_TEXT';
export const SET_HEADER_TITLE = 'SET_HEADER_TITLE';
export const SET_TASK_TITLE = 'SET_TASK_TITLE';
export const ADD_TASK_ITEM = 'ADD_TASK_ITEM';
export const ADD_TASK_DATA = 'ADD_TASK_DATA';

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

export function setHeaderLogo(img) {
  return {
    type: SET_HEADER_LOGO,
    img
  }
}

export function setHeaderLogoType(imgType) {
  return {
    type: SET_HEADER_LOGO_TYPE,
    imgType
  }
}

export function setHeaderTitle(title) {
  return {
    type: SET_HEADER_TITLE,
    title
  }
}

export function setHeaderText(text) {
  return {
    type: SET_HEADER_TEXT,
    text
  }
}

export function setTaskTitle(title) {
  return {
    type: SET_TASK_TITLE,
    title
  }
}

export function addTaskItem(text, img, imgType) {
  return {
    type: ADD_TASK_ITEM,
    item: {
      text: text,
      img: img,
      imgType: imgType
    }
  }
}

