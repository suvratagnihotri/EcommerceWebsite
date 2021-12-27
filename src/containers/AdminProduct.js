import { useState } from "react";
import styled from "styled-components";
import Footer from "../Components/Footer";
import { Navbar } from "../Components/Navbar";

const Container = styled.div`
    background-color: white;
    text-align: center;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h3`
color: grey;
`;

const Form = styled.form`
    width: max-content;
    height: max-content;
    display: flex;
    flex: 1;
    align-items: center;
    display: block;
    justify-content: center;
    border: 1px solid black;
    align-self: center;
    border-radius: 5px;
`;

const Label = styled.label`
    display: flex;
    color: grey;
    display: block;
    margin-top: 20px;
    justify-content: space-between;
`;

const Input = styled.input`
    border: 2px solid lightgray;
    border-radius: 5px;
    margin-left: 10px;
    width: 320px;
    height: 25px;
`;

const Button = styled.button`
    cursor: pointer;
    width: 320px;
    height: 30px;
    color: white;
    background-color: black;
    border-radius: 10px;
    border: 2px solid lightgray;
    margin-top: 10px;
`;

const Select = styled.select`
    width: 320px;
    height: 25px;
    color: grey;
    margin-top: 20px;
    border: 2px solid lightgray;
    border-radius: 5px;
    margin-left: 10px;
`;



export const AdminProduct = () => {
    const [name,setName] = useState("");
    const [price,setPrice] = useState(0);
    const [category,setCategory] = useState("");
    const [mainUrl,setMainUrl] = useState("");
    const [imageUrl1,setImageUrl1] = useState("");
    const [imageUrl2,setImageUrl2] = useState("");
    const [imageUrl3,setImageUrl3] = useState("");


    function validateForm() {
        isValidHttpUrl(mainUrl)
        return name.length > 0 && price.length > 0 && isValidHttpUrl(mainUrl) && isValidHttpUrl(imageUrl1)&& isValidHttpUrl(imageUrl2)&& isValidHttpUrl(imageUrl3);
      }

    function isValidHttpUrl (string) {
        let url;
        
        try {
          url = new URL(string);
        } catch (_) {
          return false;  
        }
      
        return url.protocol === "http:" || url.protocol === "https:";
      }


    const handleFormSubmit = (event) =>{
        event.preventDefault();
        console.log("Name of Product is :",{name})
        console.log("MainUrl of Product is :",{mainUrl})
        console.log("ImageUrl1 of Product is :",{imageUrl1})
        console.log("ImageUrl2 of Product is :",{imageUrl2})
        console.log("ImageUrl3 of Product is :",{imageUrl3})
        console.log("Price of Product is :",{price})
        console.log("Category of Product is :",{category})
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name:name,category:category,mainUrl:mainUrl,
                imageUrl1:imageUrl1,imageUrl2:imageUrl2,imageUrl3:imageUrl3,price:price })
        };
        fetch('http://localhost:8080/products/add', requestOptions)
        .then(response => response.json())
        .then(data => {
            if (data === true) {  
                console.log(data);
                console.log("Product added successfully ");  
                event.target[0].value = "";
                setName("");
                event.target[1].value = "";
                setPrice(0);
                event.target[2].value = "";
                setMainUrl("");
                event.target[3].value = "";
                setImageUrl1("");
                event.target[4].value = "";
                setImageUrl2("");
                event.target[5].value = 0;
                setImageUrl3("");
                // event.target[6].value = 0;
                // event.target[7].value = "";

                
            }
            else{
              console.log("Product cannot be added.");
            }
        });

    }


    return (
        <Container>
            <Navbar/>
            <Form onSubmit={(event)=>handleFormSubmit(event)}>
                <Title>Add Product</Title>
            <Label name="namelabel">
                Product Name:
                <Input type="text" name="name" value={name}onChange={(e)=>setName(e.target.value)}/>
            </Label>
            <Label name="mainurl">
                Main Image URL:
                <Input type="text" name="mainUrl" value={mainUrl} onChange={(e)=>setMainUrl(e.target.value)}/>
            </Label>
            <Label name="url1">
                Second Image URL:
                <Input type="text" name="imageUrl1" value={imageUrl1} onChange={(e)=>setImageUrl1(e.target.value)}/>
            </Label>
            <Label name="url2">
                Third Image URL:
                <Input type="text" name="imageUrl2" value={imageUrl2} onChange={(e)=>setImageUrl2(e.target.value)}/>
            </Label>
            <Label name="url3">
                Fourth Image URL:
                <Input type="text" name="imageUrl3" value={imageUrl3} onChange={(e)=>setImageUrl3(e.target.value)}/>
            </Label>
            <Label name="pricelabel">
                Product Price:
                <Input type="text" name="price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
            </Label>
            <Label name="category">
                Category:
                <Select value={category} onChange={(e)=>setCategory(e.target.value)}>
                    <option value="Sweat-Shirt" name="optionA">
                        Sweat-Shirt
                    </option>
                    <option value="Shirt" name="optionB">
                        Shirt
                    </option>
                    <option value="Jeans" name="optionC">
                        Jeans
                    </option>
                    <option value="T-Shirt" name="OptionD">
                        T-Shirt
                    </option>
                    <option value="Sweater" name="OptionE">
                        Sweater
                    </option>
                    <option value="Shoes" name="OptionF">
                        Shoes
                    </option>
                    <option value="Shirts" name="OptionG">
                        Shirts
                    </option>
                    <option value="Others" name="OptionH">
                        Others
                    </option>
                </Select>
            </Label>
            <Button type="submit" value="Submit" disabled={!validateForm()}>Add Product</Button>
            </Form>
            <Footer/>
        </Container>
    )
}
