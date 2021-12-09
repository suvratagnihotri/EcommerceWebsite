import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import './AdminCategory.css'

export default function AdminCategoryPage(){

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
                    <p class="sign" align="center">Sign in</p>
                    <button class="addcategoryButton" align="center">Add Category</button>
                    <table class="table" align="center">
                        <tr>
                            <th><a>Category</a></th>
                            <th><a>No. Of Items</a></th>
                        </tr>
                        <tr>
                            <td>
                                Jeans
                            </td>
                            <td>
                                15
                            </td>
                        </tr>
                    </table>
                </div>
            </body>
        </html>
    );
}