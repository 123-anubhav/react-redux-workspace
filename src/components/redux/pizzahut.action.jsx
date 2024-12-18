import { BUY_PIZZA } from "./pizzahut.actionType"

let buyPizza = () => {
    return {
        type: BUY_PIZZA,
        payload: "pizza buying"
    }
}

export { buyPizza };