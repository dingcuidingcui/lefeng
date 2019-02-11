<template>
    <div class="head-box">
        <nav>
            <i class="logo">         
            </i>
            <router-link to="/Search" tag="a" class="search-bar">
                <i class="fa fa-search"></i>
                韩束集团
            </router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Head",
    data(){
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
    nav{
        width:7.5rem;
        height:0.88rem;
        background:#fc1158;
        .logo{
            display: inline-block;
            position: absolute;
            left: 0;
            top: 0.05rem;
            width: 1.14rem;
            height: 0.52rem;
            vertical-align: middle;
            background-size: cover;
            background-position: 50%;
            background-repeat: no-repeat;
            margin: .09rem 0 0 .15rem;
            background-image:url("../../../assets/logo.png");      
        }
        .search-bar{
            display: block;
            border-radius: 5px;
            height: .6rem;
            background-color: rgba(0,0,0,.2);
            line-height: .6rem;
            color: hsla(0,0%,100%,.7);
            position: absolute;
            left: 1.6rem;
            right: .1rem;
            top:0.15rem;   
            width:5.7rem; 
            font-size:0.35rem;        
        }
    }
 

</style>

