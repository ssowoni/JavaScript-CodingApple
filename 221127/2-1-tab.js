
//첫번째 버튼을 누르면 orange라는 클래스를 부착하고
//첫번째 div 박스도 보여져야 한다. 
//그럼 기존의 orange가 붙여져 있는 다른 버튼은 없어져야 된다. 

//자주쓰는 셀렉터는 변수에 담아두는 게 좋다. 
//var 버튼 =  $('.tab-button')
// 버튼.removeClass('orange');

const buttonCount = $('.tab-button').length;
console.log(buttonCount);

//반복문 안에 있는 변수 만ㄷ들 때 let으로 해줘야 된다. 
//for(let i=0; i<3; i++){
for(let i=0; i<buttonCount; i++){
//아래와 같이 쓰면 tab-button의 모든 요소들을 찾아줌 
//.eq(index) 쓰면 몇번째 요소를 찾는지 설정할 수 있다.
$('.tab-button').eq(i).on('click',function(){

    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(i).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(i).addClass('show');


})
}


// 반복문 사용하는 방법
// for(횟수){
// console.log('안녕');
// }

// for(var i=0; i<3;i++){
//     console.log('안녕');

// }

