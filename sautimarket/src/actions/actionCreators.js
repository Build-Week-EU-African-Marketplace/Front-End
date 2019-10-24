import axiosWithAuth from "../auth/axiosWithAuth";
import { userActions,itemActions } from "../actions/actions";

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

export function removeUser() {
    return {
        type: userActions.REMOVE_USER,
    }
}

//items actioncreators

export const addItem = (item) => dispatch => {

    const options = {
        method:"POST",
        url:baseUrl + "/items/additem/",
        data:item,
    }
    
    axiosWithAuth(options)
    .then(res => {
        console.log(res.data);
        const [id] = res.data;
        item.id = id;
        dispatch({
            type:itemActions.ADD_ITEM,
            payload:item
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
        alert("couldnt delete item");
    })
}

export const getItems = () => dispatch => {

    const options = {
        method:"GET",
        url:baseUrl + "/items",
    }
    
    axiosWithAuth(options)
    .then(res => {
        console.log(res.data)
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

export const editItem = (item) => dispatch => {

    const options = {
        method:"PUT",
        url:baseUrl + "/items/"+item.id,
        data:item
    }
    
    axiosWithAuth(options)
    .then(res => {
        console.log("edited ",res.data)
        dispatch({
            type:itemActions.EDIT_ITEM,
            payload:item
        });
    })
    .catch(err => {
        alert("couldnt edit item");
    })
}