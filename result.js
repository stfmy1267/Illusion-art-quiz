let url = new URL(window.location.href);
let params = url.searchParams;
let $score_sum = (params.get('name'));
const result = document.getElementById("result");
const word =  document.getElementById("word");
const words =["神様","天才","一般人","凡人"];


if ($score_sum == 3){
  word.innerHTML =words[0];
  result.innerHTML = "スコア・・・3/3点";
}else if ($score_sum == 2){
  word.innerHTML =words[1]
  result.innerHTML = "スコア・・・2/3点";
}else if ($score_sum == 1) {
  word.innerHTML =words[2]
  result.innerHTML = "スコア・・・1/3点";
}else{
  word.innerHTML =words[3]
  result.innerHTML = "スコア・・・0/3点";
}
