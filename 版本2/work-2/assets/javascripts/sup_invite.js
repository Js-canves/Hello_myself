/**
 * Created by mac on 2017/2/21.
 */
$(document).ready(function(){
    var oInv ={
        init:function(){
            FastClick.attach(document.body);
            this.reback();
        },
        reback:function(){
            $(".reback").on("click",function(){
                window.history.go(-1);
            });
        }
    }
    oInv.init();
})