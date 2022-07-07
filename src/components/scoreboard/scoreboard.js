import './scoreboard.scss'
import axios from 'axios';

const ScoreBoard = () => {

    async function buildScoreboard  () {

        let userList;

        await axios.get("http://localhost:8000/users/getAllUsers").then((response) => {
            console.log(response.data);
            userList = response.data;
            userList.sort((a, b) => {
                return b.highscore - a.highscore;
            })
            console.log(userList)
        })

        const rankOne = userList[0];
        const rankTwo = userList[1];
        const rankThree = userList[2];
        const rankFour = userList[3];
        const rankFive = userList[4];

        displayScoreboard(rankOne, rankTwo, rankThree, rankFour, rankFive);
    }

    const displayScoreboard = (one, two, three, four, five) => {

        const rankOneName = document.getElementById("rank-one-name");
        const rankOneScore = document.getElementById("rank-one-score");
        const rankTwoName = document.getElementById("rank-two-name");
        const rankTwoScore = document.getElementById("rank-two-score");
        const rankThreeName = document.getElementById("rank-three-name");
        const rankThreeScore = document.getElementById("rank-three-score");
        const rankFourName = document.getElementById("rank-four-name");
        const rankFourScore = document.getElementById("rank-four-score");
        const rankFiveName = document.getElementById("rank-five-name");
        const rankFiveScore = document.getElementById("rank-five-score");

        rankOneName.innerHTML += `<div className="scoreboard-username">${one.username}</div>`
        rankTwoName.innerHTML += `<div className="scoreboard-username">${two.username}</div>`
        rankThreeName.innerHTML += `<div className="scoreboard-username">${three.username}</div>`
        rankFourName.innerHTML += `<div className="scoreboard-username">${four.username}</div>`
        rankFiveName.innerHTML += `<div className="scoreboard-username">${five.username}</div>`

        rankOneScore.innerHTML += `<div className="scoreboard-score">${one.highscore}</div>`
        rankTwoScore.innerHTML += `<div className="scoreboard-score">${two.highscore}</div>`
        rankThreeScore.innerHTML += `<div className="scoreboard-score">${three.highscore}</div>`
        rankFourScore.innerHTML += `<div className="scoreboard-score">${four.highscore}</div>`
        rankFiveScore.innerHTML += `<div className="scoreboard-score">${five.highscore}</div>`
    }

    buildScoreboard();

    return (
        <div className="scoreboard-main flex-col">

            <div className="scoreboard-title flex-row">Scoreboard</div>

            <div className="flex-row scoreboard-labels">
                <div className="scoreboard-label-rank">Rank</div>
                <div className="scoreboard-label-name">Username</div>
                <div className="scoreboard-label-score">Highscore</div>
            </div>
            
            <div className="scoreboard-list flex-col">
                <div className="scoreboard-item flex-row">
                    <div className="scoreboard-rank">1</div>
                    <div className="scoreboard-user" id="rank-one-name"></div>
                    <div className="scoreboard-highscore" id="rank-one-score"></div>
                </div>
                <div className="scoreboard-item flex-row">
                    <div className="scoreboard-rank">2</div>
                    <div className="scoreboard-user" id="rank-two-name"></div>
                    <div className="scoreboard-highscore" id="rank-two-score"></div>
                </div>
                <div className="scoreboard-item flex-row">
                    <div className="scoreboard-rank">3</div>
                    <div className="scoreboard-user" id="rank-three-name"></div>
                    <div className="scoreboard-highscore" id="rank-three-score"></div>
                </div>
                <div className="scoreboard-item flex-row">
                    <div className="scoreboard-rank">4</div>
                    <div className="scoreboard-user" id="rank-four-name"></div>
                    <div className="scoreboard-highscore" id="rank-four-score"></div>
                </div>
                <div className="scoreboard-item flex-row">
                    <div className="scoreboard-rank">5</div>
                    <div className="scoreboard-user" id="rank-five-name"></div>
                    <div className="scoreboard-highscore" id="rank-five-score"></div>
                </div>
            </div>

        </div>
    )
}

export default ScoreBoard