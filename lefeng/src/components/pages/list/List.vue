<template>
    <div class="list-box">
        <img class="cover" src="http://b.appsimg.com/upload/hhcapps/2018/09/30/104/hhc15382879477777ose.png">
        <p class="pms-bar"><span class="item">全场满99包邮</span></p>
        <section class="sections">
            <div class="sorted"><i></i>↑↓价格</div>
            <div class="sorted"><i></i>↑↓销量</div>
            <div class="sorted"><i class="fa fa-filter"></i>筛选</div>
        </section>
       <div class="goods-list">
            <ul class="img-background">
                <router-link v-for = "list in lists"  :key = "list.id"  :to=" '/Detail?id='+list.id " tag="li" class="img-background">
                    <div><img :src="list.src"></div>
                    <div class="title"> 
                        <p> {{list.title}} </p>
                        <p> {{list.describe}} </p>
                    </div>    
                    <div class="price">
                        <p> {{list.price}} </p>
                        <p> {{list.price1}} </p>
                        <p :class="list.car"></p>
                    </div>                   
                </router-link>
            </ul>
        </div>
        
        <router-link to="/Shopcar" tag="div" class="cart-wrap">
            <a href="javascript:;"><i class="fa fa-shopping-cart"></i></a>
        </router-link>
        <router-link to="/Home" class="icon-home">
            <a href="javascript:;"><i class="fa fa-home"></i></a>
        </router-link>
    </div>
</template>


<script> 
export default {
    name:"List",
        data(){
        return {
            lists:[]
        }
    },
    created(){
        this.getLists()
    },
    methods: {
        getLists(){
            this.$http.get("/static/list.json")
                .then( res => {
                    this.lists = res.data
                })
        }
    }
}
</script>


<style lang="scss" scoped>
    .cover{
        width:7.5rem;
        height:3rem;
        img{
            width:100%;height:100%;
        }
    }
    .pms-bar{
        color: #fff;
        width:7.5rem;height:0.6rem;line-height:0.6rem;
        background-color: #595971;
        font-size:0.3rem;
        .item{
            display:block;
            text-align: left;
            margin-left:0.3rem;
        }
    }
    .sections{
        width:7.5rem;height:0.82rem;
        display: flex;
        border-bottom: 1px solid #ccc;
        .sorted{
            width:2.5rem;height:100%;
            text-align: center;
            line-height:0.82rem;
            border-right: 1px solid #ccc;
            color:#000000;
            font-size:0.3rem;
        }
    }
    .goods-list{
        width:7.5rem;
        height:auto;
        ul{
            width:100%;
            li{
                box-sizing: border-box;
                width: 50%;
                float: left;
                margin-bottom: -1px;
                border-bottom: 1px solid rgba(0,0,0,.12);
                padding: .1rem;
                border-right: 1px solid rgba(0,0,0,.12);
                img{
                    width:3.1rem;height:3.72rem;                   
                }
                .title{
                    width:3.75rem;
                    height:0.28rem;
                    p:nth-child(1){
                        color:#000000;
                        width:1rem;height:0.28rem;
                        float: left;
                        text-align: left;
                    }
                    p:nth-child(2){
                        height:0.28rem;
                        width:2.5rem;
                        white-space:nowrap;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        color:#909090;
                    }
                }
                .price{
                    width:3.75rem;height:0.5rem;
                    box-sizing: border-box;
                    p:nth-child(1){
                        width:0.9rem;
                        font-size:0.4rem;
                        color: #000000;
                        float:left;
                    }
                    p:nth-child(2){
                        width:0.6rrem;
                        color:#909090;
                        float:left;
                        text-decoration: line-through;
                        font-size: 0.3rem;
                        margin:0.1rem 0 0 0.3rem;
                    }
                    p:nth-child(3){
                        width:0.6rem;
                        font-size: 0.4rem;
                        float:right;
                        margin:0.1rem 0.3rem 0 0;
                    }
                }                
            }
        }
    }
    .cart-wrap{
        width:1rem;height:1rem;
        background: rgba($color: #000000, $alpha:0.5);
        z-index: 10;
        position: fixed;
        bottom:1.5rem;
        border-radius:0.1rem;
        margin-left: 0.3rem;
        .fa{
            font-size: 0.8rem;
            text-align: center;
            line-height: 1rem;
            color:#fa3939;
        }
    }
    .icon-home{
        width:1rem;height:1rem;
        background: rgba($color: #000000, $alpha:0.5);
        z-index: 10;
        position: fixed;
        bottom:1.5rem;
        right:0.5rem;
        border-radius:0.1rem;
        .fa{
            font-size: 0.8rem;
            text-align: center;
            line-height: 1rem;
            color:#e0e0e0;
        }
    }
</style>
