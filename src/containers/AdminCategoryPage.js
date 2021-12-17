import React, { useState } from "react";
import { render } from "react-dom";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import './AdminCategory.css'
import {AdminProduct} from "./AdminProduct";

export default function AdminCategoryPage(){
    let navigate = useNavigate();
    let boolVar = false
    const [categoryName, setCategoryName] = useState("")
    const [categories,setCategories]  = useState([
        {
          sno:1,
          Category:"Jeans",
          total_items:25
        },
        {
          sno:2,
          Category:"T-Shirts",
          total_items:25
        },
        {
          sno:3,
          Category:"Jackets",
          total_items:25
        }
    ])

    const onDelete = (category) => {
        console.log("I am on delete to this category")
        setCategories(categories.filter((e)=>{
            return e!=category
        }))
    } 
    const onAddProduct = (itemName) => {
        navigate("../admin-product", { replace: true });
    }
    function onShowProduct () {
      // console.log(categoryName);
        return(
          <div>
            <AdminProduct data="categoryName"/>
          </div>
        );
    }
    const displayProductPage = () => {
      console.log("inside displayPage function")
      navigate("../admin-product", { replace: true });
    }

    const wrapperFunction = (categoryName) => {
      console.log("Inside wrapper function page")
      setCategoryName(categoryName);
      onShowProduct();
      displayProductPage();
    }
      

    return (
        <html>
            <head>
                <link rel="stylesheet" href="css/style.css"/>
                <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>
                <title>AdminCategoryPage</title>
            </head>
            <body>
                <div class="categories">
                    <p class="sign" align="center">Categories</p>
                    <button class="addcategoryButton" align="center">Add Category</button>
                    <table class="table" align="center">
                        <tr>
                            <th><a>S.NO.</a></th>
                            <th><a>Category</a></th>
                            <th><a>No. Of Items</a></th>
                        </tr>
                        {categories.length===0? "No category to display.":
                        categories.map((category)=>{
                            return <tr>
                            <td>
                                {category.sno}
                            </td>
                            <td>
                                {category.Category}
                            </td>
                            <td>
                                {category.total_items}
                            </td>
                            <td>
                                <button className="add-button" onClick={() => onAddProduct(category.Category)}>Add Product</button>
                            </td>
                            <td>
                                <button className="show-button" onClick={()=>wrapperFunction(category.Category)}>Show Products</button>
                                {/* {boolVar===true? <AdminProduct categoryName={category.Category}></AdminProduct>:"Nothing could be displayed"} */}
                            </td>
                        </tr>
                        })}
                    </table>
                </div>
            </body>
        </html>
    );
}