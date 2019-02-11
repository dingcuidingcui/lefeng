

export default {
    totalInfo(state){
        let total = {num:0, price:0}
        state.cars.forEach( item => {
            total.num += item.num; 
            total.price += item.num * item.price.slice(1); 
        }); 
        return total;
    }
}