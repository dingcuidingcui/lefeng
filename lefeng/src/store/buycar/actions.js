

/*
    actions中处理的都是异步请求的方法，数据的方法都写在这里

*/
import { SYNC_UPDATE } from "./const"
export default {
    initCar( {commit} ){
        //当数据更新之后我们进行初始化
        console.log("succ data inited")
        let cars = getCars();
        commit( SYNC_UPDATE,cars );
    },
    //1.添加购物车   2.数量的加减   3.删除
    addCar( {commit} ,lists){
        // console.log(lists)
        // 拿到数据之后后端要存储数据库
        setTimeout( () => {
            let cars = getCars(); //获取本地存储的数据
            
            //some(callback) 这个给我们返回的事一个true或者false
            let isHas = cars.some( item =>{
                if( item.id === lists.id){
                    //如果成立，说明已经存在这条数据
                    item.num++;
                    return true;
                }
            })
            //如果没有这条数据，就添加一天新的
            if( !isHas){
                lists.num=1;
                cars.push(lists);
            }
            localStorage.cars = JSON.stringify( cars)
            commit( SYNC_UPDATE, cars )
        }, 200);       
    },
    //数量的加减
    reduceCar( {commit} ,lists){
        setTimeout( () => {
            let cars = getCars();
            cars = cars.filter( (item) => {
                if( item.id === lists.id){
                    item.num--;
                    if( item.num <= 0){
                        return false;
                    }
                    return true;
                }
                return true;
            })
            localStorage.cars = JSON.stringify( cars)
            commit( SYNC_UPDATE, cars )
        },200)
   
    }
}

function getCars(){
    return JSON.parse(localStorage.cars? localStorage.cars : '[]')
}