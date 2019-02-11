<template>
    <div class="car-box">
        <div class="header-bar">
            <p>购物车</p>
            <span class="icon-arrow-left" @click="goback"></span>
            <span class="icon-menu"></span>
        </div>
        <div class="car-cont" v-if="isShow">
            <div class="conta">
                <div class="box">
                    <img src="//img02.hua.com/m/empty_cart3.png"/>
                    <p class="car-text">别让你的心意空空如也~</p>
                    <router-link to="/List" tag="a"><a href="javascript" class="car-gohome">去购物</a></router-link>
                </div>              
            </div>
        </div>


        <div class="buycar" v-else>
            <ul>
                <li v-for="car in cars" :key="car.id"> 
                    <div class="left">
                        <p><img :src="car.src" alt=""></p>
                        <p>名称：{{car.title}}</p>
                        <p>单价：{{car.price}}</p>
                    </div>
                    <div class="right">
                        <button type="button" name="button" @click="reduceCar(car)">-</button>
                        <p>{{car.num}}</p>
                        <button type="button" name="button" @click="addCar(car)">+</button>
                    </div>
                </li>
            </ul>
            <i>数量：{{totalInfo.num}}</i>            
            <i>总价：￥{{totalInfo.price}}</i>
            <router-link to="/List" tag="a"><a href="javascript" class="car-gohome">要买更多</a></router-link>
        </div>



    </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from "vuex";
import cars from "vuex"
export default {
    name: 'Shopcar',
    props: ['isShow'],
    isShow:true,
    created(){
        console.log(this.cars)
        this.inpt();
    },
    computed: {
         
        ...mapGetters(['totalInfo']),
        ...mapState({
            cars: state => state.buycar.cars
        })
    },
    methods:{
        inpt(){
            if(cars.length>0){
                this.isShow = false;
            }
        },
      ...mapActions(['addCar','reduceCar']),  
      goback(){
        this.$router.go(-1)
      }
    }
}
</script>

<style lang="scss" scoped>
    .car-box{
        width: 7.5rem;
        height: auto;
        overflow: hidden;
        box-sizing: border-box;
        .header-bar{
            height: 0.88rem;
            text-align: center;
            background: rgba(250, 250, 250, 0.9);
            border-bottom: 1px solid #E4E4E4;
            padding: 0 0.24rem;
            position: relative;
            p{
                font-size: 0.32rem;
                line-height: 0.88rem;
                text-align: center;
                white-space: nowrap;
                text-overflow: clip;
                overflow: hidden;
            }
            .icon-arrow-left{
                display: inline-block;
                width: 0.48rem;
                height: 0.48rem;
                background: url(//img02.hua.com/m/icon/iconChevronLeft@2x.png) no-repeat center center;
                background-size: 0.48rem 0.48rem;
                position: absolute;
                left: 0.24rem;
                top: 0.2rem;
            }
            .icon-menu{
                display: inline-block;
                width: 0.48rem;
                height: 0.48rem;
                background: url(//img02.hua.com/m/icon/iconMore@2x.png) no-repeat center center;
                background-size: 0.48rem 0.48rem;
                position: absolute;
                right: 0.32rem;
                top: 0.2rem;
            }
        }
        .car-cont{
            border: 0;
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            .conta{
                max-width: 12.8rem;
                margin: 0 auto;
                border-bottom: none !important;
                background: #ffffff;
                overflow: hidden;
                .box{
                    text-align: center;
                    img{
                        margin: 0.6rem 0 0.2rem 0;
                        width: 100%;
                    }
                    .car-text{
                        font-size: 0.28rem;
                        text-align: center;
                        color: rgb(75,75,75);
                    }
                    .car-gohome{
                        display: inline-block;
                        height: 0.64rem;
                        line-height: 0.64rem;
                        padding: 0 0.4rem;
                        color: #ff6a00;
                        border: 1px solid #ff6a00;
                        border-radius: 3px;
                        margin: 0.4rem 0;
                    }
                }
                .car-lb{
                    background-color: #fff !important;
                    border-top: 0.16rem solid #eee;
                    padding-left: 0.32rem !important;
                    border-bottom: none !important;
                    clear: both;
                    color: #666666;
                    height: 0.76rem;
                    line-height: 0.76rem;
                    padding: 0 0.2rem;
                    text-align: left;
                }
                .main{
                    width: 100%;
                    overflow-x: scroll;
                    margin: 0 auto;
                    max-width: 12.8rem;
                    font-size: 0.28rem;
                    .activity-list{
                        width: 10.24rem;
                        overflow: hidden;
                        padding-left: 0.16rem; 
                        .activity-item{
                            margin-top: 0 !important;
                            width: 1.68rem !important;
                            float: left;
                            text-align: center;
                            a{
                                border: none !important;
                                margin-right: 0.4rem !important;
                                display: block;
                                width: auto;
                                padding: 0px;
                                margin-right: 0.16rem;
                                border-radius: 1px;
                                .activity-img{
                                    width: 100%;
                                    height: auto;
                                    margin-top: 0.24rem !important;
                                }
                                .act-name{
                                    font-size: 0.2rem;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                    color: #232323;
                                }
                                .act-price{
                                    font-size: 0.24rem !important;
                                    color: rgb(35,35,35) !important;
                                    line-height: 0.48rem;
                                }
                            }
                        }
                    }
                }
            }
        }


        .buycar{
            width:7.5rem;
            ul{
                width:7rem;
                li{
                    width:7rem;
                    display: flex;
                    margin:0.3rem 0 0 0.2rem;
                    box-shadow:0.01rem 0.01rem 0.05rem;
                    color:#606060;
                    .left{
                        width:4rem;
                        p:nth-child(1){
                            width:1.8rem;
                            padding: 0.1rem;
                            float: left;
                            img{
                                width:100%;height:100%;
                            }
                        } 
                        p:nth-child(2){
                            width:1.8rem;height:0.5rem;
                            float: left;
                            font-size:0.3rem;
                            margin-top:20%;
                            text-align:left;
                            padding-left: 0.2rem;
                        }    
                        p:nth-child(3){
                            width:1.8rem;height:0.5rem;
                            float: left;
                            font-size:0.3rem;
                            text-align:left;
                            padding-left: 0.2rem;
                        }            
                    }
                    .right{
                        width:2.5rem;
                        margin-left:0.3rem;
                        button{
                            width:0.8rem;height:0.4rem;
                            float: left;
                            margin-top:1.1rem;
                        }
                        p{
                            width:0.6rem;
                            float: left;
                            margin-top:1.1rem;
                        }
                    }
                }
            }
        }
        .car-gohome{
            display: inline-block;
            height: 0.64rem;
            line-height: 0.64rem;
            padding: 0 0.4rem;
            color: #ff6a00;
            border: 1px solid #ff6a00;
            border-radius: 3px;
            margin: 0.4rem 0;
        }
        i{
            width:45%;
            float: left;
            box-sizing: border-box;
            margin-left: 0.2rem;
            margin-top: 0.5rem;
            border: 0.01rem solid #808080;
        }
    }
</style>
