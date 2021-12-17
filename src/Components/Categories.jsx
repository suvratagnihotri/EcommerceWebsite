import styled from "styled-components"
import { categories } from "../data"
import { CategoryItems } from "./CategoryItems"

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`

export const Categories = () => {
    return (
        <Container>
            {categories.map(categoryItem=>(
                <CategoryItems item={categoryItem}/>
            ))}
        </Container>
    )
}
