import { styled } from "styled-components";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { CartIcon } from "./Header/Cart-icon";

const CartCount = styled.span`
    width: 19px;
    height: 19px;
    border-radius: 50%;
    padding: 0 4px;
    font-size: 10px;

    background-color: var(--delete-color);
    color: white;

    margin-left: -10px;
`

const Container = styled.div`
    position: relative;
`

export function CartControl(){
    const { value } = useLocalStorage('cart-items', [2,2,3])

    return (
        <Container>
            <CartIcon/>
            {value.length && <CartCount>{value.length}</CartCount>}
        </Container>
    )
}