import {
  FETCH_DATA_PENDING, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR, SET_TEL, SET_EMAIL,
  SET_SOCIAL_FB, SET_SOCIAL_INSTA, SET_SOCIAL_YOUTUBE, SET_HEADER_LOGO, SET_HEADER_LOGO_TYPE, SET_HEADER_TEXT,
  SET_HEADER_TITLE, SET_TASK_TITLE, ADD_TASK_ITEM
} from "../action";

let form = {
  email: '',
  tel: '',
  header: {
    logo: '',
    logo_type: '',
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
  social: {
    fb: '',
    insta: '',
    youtube: ''
  }
};

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
  error: null,
  form
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
    case SET_TEL:
      return {
        ...state,
        form: {
          ...state.form,
          tel: action.tel
        }
      };
    case SET_EMAIL:
      return {
        ...state,
        form: {
          ...state.form,
          email: action.email
        }
      };
    case SET_SOCIAL_FB:
      return {
        ...state,
        form: {
          ...state.form,
          social: {
            ...state.form.social,
            fb: action.fb
          }
        }
      };
    case SET_SOCIAL_INSTA:
      return {
        ...state,
        form: {
          ...state.form,
          social: {
            ...state.form.social,
            insta: action.insta
          }
        }
      };
    case SET_SOCIAL_YOUTUBE:
      return {
        ...state,
        form: {
          ...state.form,
          social: {
            ...state.form.social,
            youtube: action.youtube
          }
        }
      };
    case SET_HEADER_LOGO:
      return {
        ...state,
        form: {
          ...state.form,
          header: {
            ...state.form.header,
            logo: action.img
          }
        }
      };
    case SET_HEADER_LOGO_TYPE:
      return {
        ...state,
        form: {
          ...state.form,
          header: {
            ...state.form.header,
            logo_type: action.imgType
          }
        }
    };
    case SET_HEADER_TITLE:
      return {
        ...state,
        form: {
          ...state.form,
          header: {
            ...state.form.header,
            title: action.title
          }
        }
      };
    case SET_HEADER_TEXT:
      return {
        ...state,
        form: {
          ...state.form,
          header: {
            ...state.form.header,
            text: action.text
          }
        }
      };
    case SET_TASK_TITLE:
      return {
        ...state,
        form: {
          ...state.form,
          task: {
            ...state.form.task,
            title: action.title
          }
        }
      };
    case ADD_TASK_ITEM:
      return {
        ...state,
        form: {
          ...state.form,
          task: {
            ...state.form.task,
            data: [
                ...state.form.task.data,
              action.item
            ]
          }
        }
      };
    default:
       return state;
  }

}
