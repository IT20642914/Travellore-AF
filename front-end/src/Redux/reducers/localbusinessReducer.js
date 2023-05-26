import {localBusinessesActionType} from "../actionTypes/localBusinessesActionTypes";

const initialState={
    lbproducts:[],
};

const localbusinessReducer = (state = initialState,{type,payload}) =>{
    switch(type){
        case localBusinessesActionType.ADD_LBPRODUCT:
            return{
                ...state,
                lbproducts: [...state.lbproducts, payload.newLBProductData],
            };


        case localBusinessesActionType.UPDATE_LBPRODUCT:
            return{
                ...state,
                lbproducts:state.lbproducts.map((lbproduct)=>{
                    if(lbproduct.id === payload.lbproductID){
                        return{
                            ...lbproduct,
                            ...payload.updatedLBProductData,
                        };
                    }
                    return lbproduct;
                }),
            };

        case localBusinessesActionType.DELETE_LBPRODUCT:
            return {
                ...state,
                lbproducts:state.lbproducts.filter((lbproduct)=> lbproduct._id !== payload.lbproductID),
            };

        case localBusinessesActionType.GET_ALL_LBPRODUCT:
                console.log('Fetching products from reducer');
                  return {state
                  }


        case localBusinessesActionType.SET_LBPRODUCTS_AXIOS:
                    return{
                        lbproducts: payload.lbproducts
                    }
        
        default:
             return state;
     }
};

export default localbusinessReducer;