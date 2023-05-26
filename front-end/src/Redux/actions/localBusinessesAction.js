import {localBusinessesActionType} from "../actionTypes/localBusinessesActionTypes";
import { useDispatch,useSelector } from 'react-redux';
import axios from 'axios';

export const insertLBProduct  = (newLBProductData) =>{
    return{
        type: localBusinessesActionType.ADD_LBPRODUCT,
        payload:{
            newLBProductData,
        }   
    };

};

export const updateLBProduct  =(lbproductID, updatedLBProductData)=>{
    console.log("lbproductID,updatedLBProductData",lbproductID,updatedLBProductData)
        return{
            type:localBusinessesActionType.UPDATE_LBPRODUCT,
            payload:{
                lbproductID,
                updatedLBProductData
            }
        }
}


export const deleteLBProduct=(lbproductID,accessKey)=>{
   
    console.log("deletLBProductAction",lbproductID,accessKey)
  
        return async (dispatch) => {
            try {
              // Send the delete request to the API
              await axios.delete(`http://localhost:9090/api/lbproduct/${lbproductID}`, {
                headers: {
                  Authorization: `Bearer ${accessKey}`, // Include the token in the headers
                },
              });
              // Dispatch the action to update the state
              dispatch({
                type: 'DELETE_LBPRODUCT',
                payload: {
                    lbproductID,
                },
              });
            } catch (error) {
              // Handle any errors
              console.log('Error deleting lbproduct:', error);
            }
          };
}

export const getAllLBProducts=()=>{

    console.log("getAllLBProducts from localBusinesses Action")
    return{
        type:localBusinessesActionType.GET_ALL_LBPRODUCT,   
    }
}

export const setLBProducts=(lbproducts)=>{

    console.log("getAllLBProducts from localBusinesses Action")
    return{
        type:localBusinessesActionType.SET_LBPRODUCTS_AXIOS,   
        payload:{
            lbproducts
        }
    }
}

    
