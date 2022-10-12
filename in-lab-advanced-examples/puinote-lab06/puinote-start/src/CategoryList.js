import React, {useState} from "react";
import './App.css';


const useLocalStorage = (storageKey, fallbackState) => {
    const [value, setValue] = React.useState(
      JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
    );
  
    React.useEffect(() => {
      localStorage.setItem(storageKey, JSON.stringify(value));
    }, [value, storageKey]);
  
    return [value, setValue];
  }


const colorList = [];

const CategoryList = () => {
    const [newCategory, setNewCategory] = useState("");
    const [categorylist, setCategorylist] = useLocalStorage("categoryList", 
          [{name: "All", color: "black"}])
        

    
    const addNewCategory = () => {
        if (newCategory.length > 0) {
            let newCategoryItem = {
                name: newCategory,
                color: colorList[(categorylist.length -1) %5]
            };

            setCategorylist([...categorylist, newCategoryItem]);
        }
    }
    const handelCategoryChange = (event) => {
        setNewCategory(event.target.value);
    }
    return(
        <div>
            <p>Show Category:</p>
            {categorylist.map(
                (category, idx) => {
                    return <button key={idx}
                    style = {{...categoryButtonStyle, backgroundColor: category.color}}
                    onClick={() => {this.filterButtonHandler(category.name)}}>
                        {category.name}</button>
                }
            )}

            <div><button style={{...categoryButtonStyle, backgorundColor:'#212121'}} 
                onClick = {addNewCategory}></button></div>
          
        </div>
    )
}