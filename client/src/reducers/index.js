import { FETCH_DATA_PENDING, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from "../action";

let initialState = {
  pending: false,
  data: {
    email: '',
    tel: '',
    header: {
      logo: '',
      title: '',
      text: ''
    },
    task: {
      title: '',
      data: []
    },
    news: [],
    youtube: [],
    project: {
      title: '',
      big_img: '',
      items: []
    },
    statistic: [],
    teem: [],
    map: {
      title: '',
      coordinates: ''
    },
    footer: {
      logo: '',
      address: ''
    },
    copy: '',
    social: []
  },
  error: null
}

export default function data(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        pending: false,
        data: {
          email: action.data.email,
          tel: action.data.tel,
          header : {
            logo: action.data.header.logo,
            tel: action.data.header.tel,
            title: action.data.header.title,
            text: action.data.header.text
          },
          task: {
            title: action.data.task.title,
            data: action.data.task.data
          },
          news: action.data.news,
          youtube: action.data.youtube,
          project: {
            title: action.data.project.title,
            bit_img: action.data.project.bit_img,
            items: action.data.project.items
          },
          statistic: action.data.statistic,
          teem: action.data.teem,
          map: {
            title: action.data.map.title,
            coordinates: action.data.map.coordinates
          },
          footer: {
            logo: action.data.footer.logo,
            address: action.data.footer.address
          },
          copy: action.data.copy,
          social: action.data.social
        }
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
          return state;
  }
}

