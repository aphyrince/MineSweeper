/*
    목표    :   구글 minesweeper 처럼 만들기
    할 일   :
    1. 테이블 만들기
    2. 각 셀에 지뢰 할당
    3. 각 셀에 근처 지뢰개수 할당
    4. 각 셀에 클릭 이벤트 붙이기
    5. 게임 종료 판정
    6. 남은 지뢰 개수 표시
    7. 깃발 설치 기능
    8. 클릭에 애니메이션 기능 넣기
    9. 난이도 선택 기능
*/

class Minesweeper {
    constructor(insertId) {
        // 지뢰찾기 게임이 삽입될 html 공간
        this.$Content = document.getElementById(insertId);
        this.cellList = [];
        this.mineN = 0;

        this.$ScoreBoard = this.createScoreBoard();
        this.$GameBoard = this.createGameBoard();

        this.$Content.appendChild(this.$ScoreBoard);
        this.$Content.appendChild(this.$GameBoard);

        console.log('Minesweeper 생성 ' + this);
    }

    createScoreBoard() {
        const $ScoreBoard = document.createElement("div");
        $ScoreBoard.classList.add("score_board");

        const $LeftFlag = this.createLeftFlag();
        $ScoreBoard.appendChild($LeftFlag);

        const $Timer = this.createTimer();
        $ScoreBoard.appendChild($Timer);

        return $ScoreBoard;
    }

    createGameBoard() {
        const $GameBoard = document.createElement("table");
        $GameBoard.classList.add("game_board");

        return $GameBoard;
    }

    createLeftFlag() {
        const $LeftFlag = document.createElement("div");
        $LeftFlag.classList.add("left_flag");

        const $FlagImg = document.createElement("img");
        $FlagImg.src = './flag.png';

        const $LeftFlagNumber = document.createElement("span");
        $LeftFlagNumber.classList.add('left_flag_number');
        $LeftFlagNumber.innerHTML = "40";

        $LeftFlag.appendChild($FlagImg);
        $LeftFlag.appendChild($LeftFlagNumber);

        return $LeftFlag;
    }

    createTimer() {
        const $Timer = document.createElement("div");
        $Timer.classList.add("timer");

        const $TimerImg = document.createElement("img");
        $TimerImg.src = "./timer.png";

        const $TimerNumber = document.createElement('span');
        $TimerNumber.classList.add("timer_number");
        $TimerNumber.innerHTML = 0;

        $Timer.appendChild($TimerImg);
        $Timer.appendChild($TimerNumber);

        return $Timer;
    }

}

const mine = new Minesweeper('content');