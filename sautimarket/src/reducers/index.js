import { userActions, itemActions } from "../actions/actions";

export const userReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case userActions.ADD_USER:
      return { ...state, payload };

    case userActions.REMOVE_USER:
      return {};

    case userActions.LOGIN_USER:
      return { ...state, payload };

    default:
      return state;
  }
};

export const itemsReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case itemActions.ADD_ITEM:
      return [...state, payload ];

    case itemActions.DELETE_ITEM:
      return state.filter(el => el.id !== payload.id);

    case itemActions.GET_ITEMS:
      return payload;

    case itemActions.GET_ONE_ITEM:
      return state.find(item => item.id === payload.id) || {};

    case itemActions.GET_ALL_ITEMS_IN_CATEGORY:
      return state;

    case itemActions.EDIT_ITEM:
      const index = state.findIndex(el => el.id === payload.id);
      const cOfState = [...state];
      cOfState[index] = payload;
      return cOfState;

    default:
      return state;
  }
};
