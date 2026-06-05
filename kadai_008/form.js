$(function() {
 // id属性がaddの要素がクリックされたら
 $('.btn').on('click', function(){
   // id属性がtargetの要素にclass属性'sample'を追加
   $('.text-box').val('クリックしました！');
 });
});