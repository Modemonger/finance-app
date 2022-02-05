import { createContext, useReducer } from "react";
import CategoryReducer from "../reducer/CategoryReducer";
import { GiBellPepper, GiHouse, GiTreasureMap } from "react-icons/gi";

const initialState = {
    categories:[
        {
            category: 'Food',
            icon: <GiBellPepper/>
        },
        {
            category: 'Housing',
            icon: <GiHouse />
        },
        {
            category: 'Travel',
            icon: <GiTreasureMap />
        }
    ]
}

export const CategoryContext = createContext(initialState);

export const CategoryProvider = ({children}) => {
    const [state, dispatch] = useReducer(CategoryReducer,initialState);

    function deleteCategory(id) {
        dispatch({
            type: 'DELETE_CATEGORY',
            payload: id 
        });
    }

    function addCategory(id){
        dispatch({
            type: 'ADD_CATEGORY',
            payload: id
        });
    }

    return(
        <CategoryContext.Provider value={{
            categories: state.categories,
            deleteCategory,
            addCategory
        }}>
            {children}
        </CategoryContext.Provider>
    )
}