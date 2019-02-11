<template>
    <div class="regist-box">
        <form action="get" class="regist-form">
            <p>
                <input type="text" placeholder="请输入用户名">
                </p>
            <p>
                <input type="password" placeholder="请输入0~16位数字、字母、字符">
            </p>
            <p>
                <button type="button">注册</button>
            </p>            
            <p>
                <router-link to="/Login"><a href="JavaScript:;">已经注册马上登陆</a></router-link>
            </p>
        </form>
        <router-link to="/Home" class="icon-home">
            <a href="javascript:;"><i class="fa fa-home"></i></a>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "Regist"
}
</script>

<style lang="scss" scoped>
.regist-box{
    width: 7.5rem;
    height: 5rem;
    margin-top: 0.8rem;
    padding: 0 0.4rem;
    p{
        width: 6.7rem;
        height: 0.8rem;
        margin: 0.2rem 0;
        line-height: 0.8rem;
        input{
            width: 6.2rem;
            height: 100%;
            border: 1px solid #ccc;
            margin-bottom: 0.2rem;
            background:#e0e0e0;
            padding-left:0.4rem;
            font-size:0.35rem;
        }
        button{
            width: 100%;
            height: 100%;
            background: #ff0056;
            color: white;
            font-weight: bold;
            font-size: 0.4rem;    
        }
        a{
            text-decoration: none;
            color: #3195cb;
            font-size: 0.20rem;
        }
    }
    .icon-home{
        width:1rem;height:1rem;
        background: rgba($color: #000000, $alpha:0.5);
        z-index: 10;
        position: fixed;
        bottom:1.5rem;
        right:0.5rem;
        border-radius:0.5rem;
        .fa{
            font-size: 0.8rem;
            text-align: center;
            line-height: 1rem;
            color:#e0e0e0;
        }
    }
}
</style>

