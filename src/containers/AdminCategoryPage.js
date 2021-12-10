import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import { useNavigate } from "react-router-dom";
import './AdminCategory.css'

export default function AdminCategoryPage(){
    const [categories,setCategories]  = useState([
        {
          sno:1,
          Category:"Jeans",
          total_items:25
        },
        {
          sno:1,
          Category:"T-Shirts",
          total_items:25
        },
        {
          sno:1,
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
                                <button className="delete-button" onClick={() => onDelete(category)}>Delete</button>
                            </td>
                        </tr>
                        
                        })}
                    </table>
                </div>
            </body>
        </html>
    );
}