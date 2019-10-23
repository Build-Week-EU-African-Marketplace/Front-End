import axiosWithAuth from "../auth/axiosWithAuth";
import { userActions,itemActions } from "../actions/actions";

// action creators here (7)
// THIS IS THE PLACE FOR NASTY, IMPURE THINGS
// like moment.js, uuid, Math.random, async...
// COMPONENTS AND REDUCERS SHOULD NOT DEAL WITH THAT STUFF!

const baseUrl = "https://lbs-african-marketplace.herokuapp.com"
//users action creators
export const addUser = (user) => dispatch => {
    const options = {
        method:"POST",
        url:baseUrl + "/auth/register",
        data:user,
    }
    
    axiosWithAuth(options)
    .then(res => {
        console.log(res.data);
        dispatch({
            type:itemActions.ADD_ITEM,
            payload:res.data
        })
    })
    .catch(err => {
        alert("couldnt add item");
    })
}
// export const loginUser = (user) => dispatch => {
//     const options = {
//         method:"POST",
//         url:baseUrl + "/auth/login",
//         data:user,
//     }
    
//     axiosWithAuth(options)
//     .then(res => {
//         console.log(res.data);
//         const {token} = res.data
//         dispatch({
//             type:userActions.LOGIN_USER,
//             payload:res.data
//         })
//     })
//     .catch(err => {
//         alert("couldnt Login USER");
//     })
// }

export function removeUser() {
    return {
        type: userActions.REMOVE_USER,
    }
}

//items actioncreators

export const addItem = (item) => dispatch => {

    const options = {
        method:"POST",
        url:baseUrl + "/items/additem/",item,
        data:item,
    }
    
    axiosWithAuth(options)
    .then(res => {
        console.log(res.data);
        dispatch({
            type:itemActions.ADD_ITEM,
            payload:res.data
        })
    })
    .catch(err => {
        alert("couldnt add item");
    })
}

export const deleteItem = (id) => dispatch => {

    const options = {
        method:"DELETE",
        url:baseUrl + "/items/"+id,
    }
    
    axiosWithAuth(options)
    .then(res => {
        dispatch({
            type:itemActions.DELETE_ITEM,
            payload:{id}
        });
    })
    .catch(err => {
        alert("couldnt add item");
    })
}

export const getItems = () => dispatch => {

    const options = {
        method:"GET",
        url:baseUrl + "/items",
    }
    
    axiosWithAuth(options)
    .then(res => {
        dispatch({
            type:itemActions.GET_ITEMS,
            payload:res.data
        });
    })
    .catch(err => {
        alert("couldnt add item");
    })
}

export const getOneItem = (id) => dispatch => {
    return {
        type:itemActions.GET_ONE_ITEM,
        payload:{id}
    }
}

export const getAllItemsInCategory = (category) => dispatch => {
    
    const options = {
        method:"GET",
        url:baseUrl + "/items/"+category,
    }
    
    axiosWithAuth(options)
    .then(res => {
        dispatch({
            type:itemActions.GET_ALL_ITEMS_IN_CATEGORY,
            payload:{category}
        });
    })
    .catch(err => {
        alert("couldnt get item in category!");
    })

}


// this is a special action creator.
// instead of returning an action, it returns a function.
// the thunk middleware will intercept this action creator.
// and will call 'dispatch' for use, once the async stuff is done.

// THIS ALLOWS TO REMOVE AXIOS LOGIC FROM THE COMPONENT!!!!!!!!!
export const getStock = () => dispatch => {
//   const fruitsPromise = axios.get(fruitsApi);
//   const meatsPromise = axios.get(meatsApi);

//   Promise.all([fruitsPromise, meatsPromise])
//     .then(([fruitsApiResponse, meatsApiResponse]) => {
//       const fruits = fruitsApiResponse.data;
//       const meats = meatsApiResponse.data;

//       dispatch({ type: types.ADD_FRUITS, payload: fruits }); // :(
//       dispatch(getMeats(meats)); // :)
//     });

  // let fruits;
  // let meats;
  // axios.get(fruitsApi)
  //   .then(res => {
  //     fruits = res.data;

  //     axios.get(meatsApi)
  //       .then(res => {
  //         meats = res.data;
  //       });
  //   });
};
