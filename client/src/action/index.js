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
export const DELETE_TASK_ITEM = 'DELETE_TASK_ITEM';
export const ADD_NEWS_ITEM = 'ADD_NEWS_ITEM';
export const DELETE_NEWS_ITEM = 'DELETE_NEWS_ITEM';
export const ADD_YOUTUBE_ITEM = 'ADD_YOUTUBE_ITEM';
export const DELETE_YOUTUBE_ITEM = 'DELETE_YOUTUBE_ITEM';
export const SET_PROJECT_TITLE = 'SET_PROJECT_TITLE';
export const ADD_PROJECT_ITEM = 'ADD_PROJECT_ITEM';
export const DELETE_PROJECT_ITEM = 'DELETE_PROJECT_ITEM';
export const ADD_STATISTIC_ITEM = 'ADD_STATISTIC_ITEM';
export const DELETE_STATISTIC_ITEM = 'DELETE_STATISTIC_ITEM';
export const ADD_TEEM_ITEM = 'ADD_TEEM_ITEM';
export const DELETE_TEEM_ITEM = 'DELETE_TEEM_ITEM';
export const SET_MAP_TITLE = 'SET_MAP_TITLE';
export const SET_MAP_COORDINATES = 'SET_MAP_COORDINATES';
export const SET_FOOTER_ADDRESS = 'SET_FOOTER_ADDRESS';
export const SET_FOOTER_LOGO = 'SET_FOOTER_LOGO';
export const SET_FOOTER_LOGO_TYPE = 'SET_FOOTER_LOGO_TYPE';
export const SET_COPY = 'SET_COPY';

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

export function addTaskItem(text, img, imgType, id) {
  return {
    type: ADD_TASK_ITEM,
    item: {
      id: id,
      text: text,
      img: img,
      imgType: imgType
    }
  }
}

export function deleteTaskItem(id) {
  return {
    type: DELETE_TASK_ITEM,
    id
  }
}

export function addNewsItem(text, img, imgType, id) {
  return {
    type: ADD_NEWS_ITEM,
    item: {
      id: id,
      text: text,
      img: img,
      imgType: imgType
    }
  }
}

export function deleteNewsItem(id) {
  return {
    type: DELETE_NEWS_ITEM,
    id
  }
}

export function addYoutubeItem(text, link, id) {
  return {
    type: ADD_YOUTUBE_ITEM,
    item: {
      id: id,
      text: text,
      link: link
    }
  }
}

export function deleteYoutubeItem(id) {
  return {
    type: DELETE_YOUTUBE_ITEM,
    id
  }
}

export function setProjectTitle(title) {
  return {
    type: SET_PROJECT_TITLE,
    title
  }
}

export function addProjectItem(title, text, img, imgType, id) {
  return {
    type: ADD_PROJECT_ITEM,
    item: {
      id: id,
      title: title,
      text: text,
      img: img,
      imgType: imgType
    }
  }
}

export function deleteProjectItem(id) {
  return {
    type: DELETE_PROJECT_ITEM,
    id
  }
}

export function addStatisticItem(text, count, img, imgType, id) {
  return {
    type: ADD_STATISTIC_ITEM,
    item: {
      id: id,
      text: text,
      count: count,
      img: img,
      imgType: imgType
    }
  }
}

export function deleteStatisticItem(id) {
  return {
    type: DELETE_STATISTIC_ITEM,
    id
  }
}

export function addTeemItem(name, prof, img, imgType, social, id) {
  return {
    type: ADD_TEEM_ITEM,
    item: {
      id: id,
      name: name,
      prof: prof,
      img: img,
      social,
      imgType: imgType
    }
  }
}

export function deleteTeemItem(id) {
  return {
    type: DELETE_TEEM_ITEM,
    id
  }
}

export function setMapTitle(title) {
  return {
    type: SET_MAP_TITLE,
    title
  }
}

export function setMapCoordinates(value) {
  return {
    type: SET_MAP_COORDINATES,
    value
  }
}

export function setFooterAddress(address) {
  return {
    type: SET_FOOTER_ADDRESS,
    address
  }
}

export function setFooterLogo(img) {
  return {
    type: SET_FOOTER_LOGO,
    img
  }
}

export function setFooterLogoType(imgType) {
  return {
    type: SET_FOOTER_LOGO_TYPE,
    imgType
  }
}

export function setCopy(copy) {
  return {
    type: SET_COPY,
    copy
  }
}
