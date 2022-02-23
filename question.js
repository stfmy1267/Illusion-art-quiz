const quiz = [
    // 1問目
    {
        // 問題文の設定
        question: 'Q:つながっている線はどれかな?',
        // 問題の画像
        image: 'img/img1.jpeg',
        // 回答の選択肢を設定
        answers: ['A', 'B', 'C', 'D'],
        // 問題の答えを設定
        correct: 'C',
        // 解説の設定
        img_ans: 'img/img1_ans.jpeg',
        commentary: 'これはポッゲンドルフ錯視といい、斜めの線が障害物に遮蔽されたときに、線がずれているように見えるという錯視です。'
    },
    // ２問目
    {
        question: 'Q:隠れている動物はなにかな?',
        image: 'img/img2.jpeg',
        answers: ['虎', '犬', '猫', '猿'],
        correct: '犬',
        img_ans: 'img/img2_ans.jpeg',
        commentary: '解答図のように、補助線を引いてみると、よくわかります。これは「主観的輪郭」を利用した「錯覚アート」になります。'
    },
    //3問目
    {
        question: 'Q:牛のなかに隠れている数字は?',
        image: 'img/img3.jpeg',
        answers: ['1030', '1020', '2021', '1019'],
        correct: '2021',
        img_ans: 'img/img3.jpeg',
        commentary: '今年2021年の干支は丑年です。それにちなんだ作品になります。※解答図はありません。'
    }
];
const quizLength = quiz.length;   // 問題数
let quizIndex = 0;    // 問題の順番
let score = 0;    // 得点

const $whatQ = document.getElementById('whatQ');
const $nextbutton = document.getElementById('nextQuiz');
const $come_button = document.getElementById('btn');
const $coment = document.getElementById('ans');
const $img_ans = document.getElementById('img_ans');
const $seikai = document.getElementById('seikai');
const $fuseikai = document.getElementById('fuseikai');
let slectNumber = 0;
let $array_button = [];
while (slectNumber < 4) {
    $array_button[slectNumber] = document.getElementById('slect-' + slectNumber);
    slectNumber++;
}
const buttonLength = $array_button.length;
const $start = document.getElementById('start');
const timer = document.getElementById('timer');
const $go = document.getElementById('prepar');
const $box = document.getElementById('box1');
const $score_sum = document.getElementById('score_sum');
const $box3 = document.getElementById('box3');
let startTime = 1500;
let timerId;
let stopTimer;
let go = 3;
let timer_stop = 1;
let x = 1;

function random(array, num) {
    let a = array;
    let t = [];
    let r = [];
    let l = a.length;
    let n = num < l ? num : l;
    while (n-- > 0) {
        let i = Math.random() * l | 0;
        r[n] = t[i] || a[i];
        --l;
        t[i] = t[l] || a[l];
    }

    return r;
}
let rand = [0, 1, 2];

let rand1 = random(rand, 3);


const go_count = () => {
    setTimeout(function () {
        if (go > 0) {
            go--;
            $go.textContent = go;
            go_count();
        } else {
            $box.style.visibility = 'hidden';
            $go.style.visibility = 'hidden';
            count_down();
        }
    }, 1000);
}

const updateTimetText = () => {
    let sec = Math.floor(startTime / 100);　//残り時間「秒」を格納する変数
    let ms = startTime % 100;   // 残り時間「ミリ秒」を格納する変数
    sec = ('0' + sec).slice(-2);
    if (ms < 10) {
        ms = (ms + '0').slice(-3);
    }
    // console.log(ms);
    if (sec > 9) {
        timer.style.color = '#535353';
    } else if (sec > 5) {
        timer.style.color = '#ff6600';
    } else {
        timer.style.color = 'red';
    }
    timer.textContent = sec + ':' + ms;
}

const count_down = () => {
    timerId = setTimeout(function () {
        if (timer_stop === 1) {
            startTime--;
            updateTimetText();
            if (startTime > 0) {
                count_down();
            } else {
                window.alert('タイムアップ');
                enable();
                $nextbutton.style.visibility = 'visible';
                $come_button.style.visibility = 'visible';
                $coment.style.visibility = 'visible';
            }
        }
    }, 10);
};


// 設定した回答の選択肢を取得したbuttonタグに表示させる
const setupQuiz = () => {
    // 定数の文字列をHTMLに反映させる
    document.getElementById('question').textContent = quiz[rand1[quizIndex]].question;
    document.getElementById('quiz_img').src = quiz[rand1[quizIndex]].image;
    let bottonIndex = 0;
    while (bottonIndex < buttonLength) {
        $array_button[bottonIndex].textContent = quiz[rand1[quizIndex]].answers[bottonIndex];
        bottonIndex++;
    };
    $whatQ.textContent = x + '/' + 3;
    $coment.textContent = quiz[rand1[quizIndex]].commentary;
    $nextbutton.style.visibility = 'hidden';
    $come_button.style.visibility = 'hidden';
    $coment.style.visibility = 'hidden';
};

// ボタンを有効にする
const invalid = () => {
    let i = 0;
    while (i < 4) {
        onclick = $array_button[i].disabled = false;
        $array_button[i].style.background = '#668ad8';
        $array_button[i].style.borderBottom = 'solid 4px #627295';
        i++;
    };
}

// ボタンを無効にする
const enable = () => {
    let i = 0;
    while (i < 4) {
        onclick = $array_button[i].disabled = true;
        $array_button[i].style.background = '#aaa';
        $array_button[i].style.borderBottom = 'solid 4px #aaa';
        i++;
    };
}

const clickHandler = (e) => {
    if (quiz[rand1[quizIndex]].correct === e.target.textContent) {
        window.alert('正解です');
        score++;
        $score_sum.value = score;
    } else {
        $score_sum.value = score;
        window.alert('残念、不正解です');
    }
    quizIndex++;
    if (quizIndex < quizLength) {
        $nextbutton.style.visibility = 'visible';
    } else if (quizIndex === quizLength) {
        $nextbutton.style.visibility = 'hidden';
        $box3.style.zIndex = '2';
        $score_sum.style.visibility = 'visible';
    }
    $come_button.style.visibility = 'visible';
    $coment.style.visibility = 'visible';
};

// ーーーーーーーーーーーーーーー本文ーーーーーーーーーーーーーーー//
enable();
$start.addEventListener('click', (e) => {
    go_count();
    $start.style.visibility = 'hidden';
    invalid();
});
$score_sum.style.visibility = 'hidden';
setupQuiz();

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $array_button[handlerIndex].addEventListener('click', (e) => {
        timer_stop--;
        clickHandler(e);
        enable();
    });
    handlerIndex++;
}

let flag = true;
$come_button.addEventListener('click', (e) => {
    document.querySelector("#ans").style.display = flag ? "block" : "none";
    document.getElementById('quiz_img').src = flag ? quiz[rand1[quizIndex - 1]].img_ans : quiz[rand1[quizIndex - 1]].image;
    $come_button.value = flag ? "もとに戻す" : "解説を表示する";
    flag = !flag;
    console.log(flag);
});

$nextbutton.addEventListener('click', (e) => {
    startTime = 1500;
    go = 3;
    timer_stop++;
    timer.style.color = '#535353';
    timer.textContent = '15:00';
    $go.textContent = go;
    $box.style.visibility = 'visible';
    $go.style.visibility = 'visible';
    $start.style.visibility = 'visible'
    x++;
    if (flag === false) {
        document.querySelector("#ans").style.display = flag ? "block" : "none";
        $come_button.value = flag ? "もとに戻す" : "解説を表示する";
        flag = !flag;
    }
    if (quizIndex < quizLength) {
        // 問題数がまだあればこちらを実行
        setupQuiz();
    }
});