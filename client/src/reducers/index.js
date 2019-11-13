import {
  FETCH_DATA_PENDING, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR, SET_TEL, SET_EMAIL,
  SET_SOCIAL_FB, SET_SOCIAL_INSTA, SET_SOCIAL_YOUTUBE, SET_HEADER_LOGO, SET_HEADER_LOGO_TYPE, SET_HEADER_TEXT,
  SET_HEADER_TITLE, SET_TASK_TITLE, ADD_TASK_ITEM, DELETE_TASK_ITEM, ADD_NEWS_ITEM, DELETE_NEWS_ITEM, ADD_YOUTUBE_ITEM,
  DELETE_YOUTUBE_ITEM, ADD_PROJECT_ITEM, DELETE_PROJECT_ITEM, SET_PROJECT_TITLE, ADD_STATISTIC_ITEM, DELETE_STATISTIC_ITEM,
  ADD_TEEM_ITEM, DELETE_TEEM_ITEM
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
    data: [],
    deleteItem: []
  },
  news: {
    data: [],
    deleteItem: []
  },
  youtube: {
    data: [],
    deleteItem: []
  },
  project: {
    title: '',
    big_img: '',
    items: [],
    deleteItem: []
  },
  statistic: {
    data: [],
    deleteItem: []
  },
  teem: {
    data: [],
    deleteItem: []
  },
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
        },
        data: {
          ...state.data,
          task: {
            ...state.data.task,
            data: [
              ...state.data.task.data,
              action.item
            ]
          }
        }
      };
    case DELETE_TASK_ITEM:
      let arr = state.data.task.data.filter(el=> el.id !== action.id);
      return {
        ...state,
        data: {
          ...state.data,
          task: {
            ...state.data.task,
            data: arr
          }
        },
        form: {
          ...state.form,
          task: {
            ...state.form.task,
            deleteItem: [
                ...state.form.task.deleteItem,
                action.id
            ]
          }
        }
      };
    case ADD_NEWS_ITEM:
      return {
        ...state,
        form: {
          ...state.form,
          news: {
            ...state.form.news,
            data: [
              ...state.form.news.data,
              action.item
            ]
          }
        },
        data: {
          ...state.data,
          news: [
            ...state.data.news,
            action.item
          ]
        }
      };
    case DELETE_NEWS_ITEM:
      let arr1 = state.data.news.filter(el=> el.id !== action.id);
      console.log(action.id)
      return {
        ...state,
        data: {
          ...state.data,
          news: arr1
        },
        form: {
          ...state.form,
          news: {
            ...state.form.news,
            deleteItem: [
              ...state.form.news.deleteItem,
              action.id
            ]
          }
        }
      };
    case ADD_YOUTUBE_ITEM:
      return {
        ...state,
        form: {
          ...state.form,
          youtube: {
            ...state.form.youtube,
            data: [
              ...state.form.youtube.data,
              action.item
            ]
          }
        },
        data: {
          ...state.data,
          youtube: [
            ...state.data.youtube,
            action.item
          ]
        }
      };
    case DELETE_YOUTUBE_ITEM:
      let arr2 = state.data.youtube.filter(el=> el.id !== action.id);
      console.log(action.id)
      return {
        ...state,
        data: {
          ...state.data,
          youtube: arr2
        },
        form: {
          ...state.form,
          youtube: {
            ...state.form.youtube,
            deleteItem: [
              ...state.form.youtube.deleteItem,
              action.id
            ]
          }
        }
      };
    case SET_PROJECT_TITLE:
      return {
        ...state,
        form: {
          ...state.form,
          project: {
            ...state.form.project,
            title: action.title
          }
        }
      };
    case ADD_PROJECT_ITEM:
      return {
        ...state,
        form: {
          ...state.form,
          project: {
            ...state.form.project,
            items: [
              ...state.form.project.items,
              action.item
            ]
          }
        },
        data: {
          ...state.data,
          project: {
            ...state.data.project,
            items: [
              ...state.data.project.items,
              action.item
            ]
          }
        }
      };
    case DELETE_PROJECT_ITEM:
      let arr3 = state.data.project.items.filter(el=> el.id !== action.id);
      return {
        ...state,
        data: {
          ...state.data,
          project: {
            ...state.data.project,
            items: arr3
          }
        },
        form: {
          ...state.form,
          project: {
            ...state.form.project,
            deleteItem: [
              ...state.form.project.deleteItem,
              action.id
            ]
          }
        }
      };
    case ADD_STATISTIC_ITEM:
      return {
        ...state,
        form: {
          ...state.form,
          statistic: {
            ...state.form.statistic,
            data: [
              ...state.form.statistic.data,
              action.item
            ]
          }
        },
        data: {
          ...state.data,
          statistic: [
            ...state.data.statistic,
            action.item
          ]
        }
      };
    case DELETE_STATISTIC_ITEM:
      let arr4 = state.data.statistic.filter(el=> el.id !== action.id);
      console.log(action.id)
      return {
        ...state,
        data: {
          ...state.data,
          statistic: arr4
        },
        form: {
          ...state.form,
          statistic: {
            ...state.form.statistic,
            deleteItem: [
              ...state.form.statistic.deleteItem,
              action.id
            ]
          }
        }
      };
    case ADD_TEEM_ITEM:
      return {
        ...state,
        form: {
          ...state.form,
          teem: {
            ...state.form.teem,
            data: [
              ...state.form.teem.data,
              action.item
            ]
          }
        },
        data: {
          ...state.data,
          teem: [
            ...state.data.teem,
            action.item
          ]
        }
      };
    case DELETE_TEEM_ITEM:
      let teemArr = state.data.teem.filter(el=> el.id !== action.id);
      console.log(action.id)
      return {
        ...state,
        data: {
          ...state.data,
          teem: teemArr
        },
        form: {
          ...state.form,
          teem: {
            ...state.form.teem,
            deleteItem: [
              ...state.form.teem.deleteItem,
              action.id
            ]
          }
        }
      };
    default:
       return state;
  }

}
