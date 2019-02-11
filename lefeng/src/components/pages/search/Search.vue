<template>
    <div class="search-box">
        <div class="search-head">
            <input type="text" placeholder="韩束集团">
            <router-link to="/Home" tag="p">取消</router-link>
        </div>
        <div class="groom">
            <h3>大家都在搜</h3>
            <ul>
                <router-link to="/List" tag="li">保湿水乳</router-link>
                <router-link to="/List" tag="li">面部护肤</router-link>
                <router-link to="/List" tag="li">自然堂</router-link>
                <router-link to="/List" tag="li">御泥坊</router-link>
                <router-link to="/List" tag="li">口红</router-link>
                <router-link to="/List" tag="li">香水</router-link>
                <router-link to="/List" tag="li">去眼袋</router-link>
                <router-link to="/List" tag="li">洁面</router-link>
                <router-link to="/List" tag="li">眼霜</router-link>
                <router-link to="/List" tag="li">资深堂</router-link>
            </ul>
        </div>
    </div>
</template>


<script>
// import List from "../list/List"
export default {
    // name:"Search",
    // methods:{      

        //     keydown(){
        //         this.$router.go(List.vue)
                      
        // }

        // onkeydow(e){
        //     if(e.keyCode==13){
        //     this.$router.go(List.vue)
        //     }
        // }

    // document.onkeydown = function(e){
    //     if(e.keyCode==13){
    //         var msg2 = na.value+ '说：'+ msg.value
    //         socket.emit('receive', msg2)
    //         msg.value = ''
    //             content.innerHTML += '  ' +msg2 + '<br/>'
    //         }
    //     }



    // }
}
</script>


<style lang="scss" scoped>
    .search-box{
        width:7.5rem;
        background:#f0f0f0;
        overflow: hidden;
        .search-head{
            width:7.5rem;height:0.88rem;
            input{
                width:5.1rem;height:0.5rem;
                padding-left: 0.2rem;
                margin:0.15rem 0 0 0.3rem;
                float:left;
            }
            p{
                width:1rem;height:0.51rem;
                line-height:0.51rem;
                border:1px solid rgb(207, 104, 104);
                float:right;
                margin:0.17rem 0.3rem 0 0;
                font-size:0.3rem;
                border-radius:0.1rem;
            }
        }
        .groom{
            width:7.5rem;
            h3{
                width:7.5rem;height:0.32rem;
                text-align: left;
                margin:0.3rem 0 0 0.3rem;
                color: #000000;
                font-size: 0.3rem;
            }
            ul{
                width:7.5rem;
                li{
                    width:1.4rem;height:0.5rem;
                    border:1px solid rgb(207, 104, 104);
                    float:left;
                    margin:0.2rem 0.2rem;
                    text-align: center;
                    line-height:0.5rem;
                    font-size: 0.3rem;
                    border-radius:0.1rem;
                }
            }
        }
    }
</style>

