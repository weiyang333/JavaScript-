//  1 2 3 4 5 6 7 8 9
//1 + + + + + + + + +
// 2+ + + + + + + + +
// 3+ + + + + + + + +
// 4+ + + + + + + + +
// 5+ + + + + + + + +
// 6+ + + + + + + + +
// 7+ + + + + + + + +
// 8+ + + + + + + + +
// 9+ + + + + + + + +
'use strict'
class Game
{
    constructor(){
        this.board = new Board();
        this.playerRow = 0;
        this.playerCol = 0;
        this.CPURow = 0;
        this.CPUCol = 0;
    }
    GameLoop(){
        while(true){
            this.board.ShowBoard();
            this. PlayerRound();
            if(this.IsPlayerWin())
            {
                alert('恭喜您赢了');
                break;
            }
            this.CPURound();
            if(this. IsCPUWin())
            {
                alert('很遗憾 你输了');
                break;
            }
        }
    }
    IsPlayerWin()
    {
        let hengLeft = -1;
        let hengRight = 1;
        let coherentCount = 1;
        //横
        while(this.playerCol+hengLeft >=0 && this.board.IsBlack(this.playerRow,this.playerCol+hengLeft))
        {
            coherentCount++;
            hengLeft--;
        }
        while(this.playerCol+hengRight <=8 && this.board.IsBlack(this.playerRow,this.playerCol+hengRight))
        {
            coherentCount++;
            hengRight++;
        }
        if(coherentCount >=5)
        {
            return true;
        }
        //竖
        let shuUp = -1;
        let shuDown = 1;
        coherentCount = 1;
        while(this.playerRow+shuUp >=0 && this.board.IsBlack(this.playerRow+shuUp,this.playerCol))
        {
            coherentCount++;
            shuUp--;
        }
        while(this.playerCol+shuDown <=8 && this.board.IsBlack(this.playerRow+shuDown,this.playerCol))
        {
            coherentCount++;
            shuDown++;
        }
         if(coherentCount >=5)
        {
            return true;
        }
       //  \
        let zuoShangRow = -1;
        let zuoShangCol =-1;
        let youXiaRow = 1;
        let youXiaCol = 1;
        coherentCount = 1;
        while(this.playerRow+zuoShangRow >=0 && this.playerCol+zuoShangCol >=0 &&this.board.IsBlack(this.playerRow+zuoShangRow,this.playerCol+zuoShangCol))
        {
            coherentCount++;
           zuoShangRow--;
            zuoShangCol--;
        }
        while(this.playerCol+youXiaCol <=8 &&this.playerRow+youXiaRow <=8 &&this.board.IsBlack(this.playerRow+youXiaRow,this.playerCol+youXiaCol))
        {
            coherentCount++;
            youXiaRow++;
            youXiaCol++;
        }
         if(coherentCount >=5)
        {
            return true;
        }
        //  /
        let youShangRow = -1;
        let youShangCol =1;
        let zuoXiaRow = 1;
        let zuoXiaCol = -1;
         coherentCount = 1;
         while(this.playerRow+youShangRow >=0 && this.playerCol+youShangCol <=8 &&this.board.IsBlack(this.playerRow+youShangRow,this.playerCol+youShangCol))
        {
            coherentCount++;
           youShangRow--;
            youShangCol++;
        }
        while(this.playerCol+zuoXiaCol >=0 &&this.playerRow+zuoXiaRow <=8 &&this.board.IsBlack(this.playerRow+zuoXiaRow,this.playerCol+zuoXiaCol))
        {
            coherentCount++;
            zuoXiaRow++;
            zuoXiaCol--;
        }
        if(coherentCount >=5)
        {
            return true;
        }
    }
    IsCPUWin()
    {
         let hengLeft = -1;
        let hengRight = 1;
        let coherentCount = 1;
        //横
        while(this.CPUCol+hengLeft >=0 && this.board.IsWhite(this.CPURow,this.CPUCol+hengLeft))
        {
            coherentCount++;
            hengLeft--;
        }
        while(this.CPUCol+hengRight <=8 && this.board.IsWhite(this.CPURow,this.CPUCol+hengRight))
        {
            coherentCount++;
            hengRight++;
        }
        if(coherentCount >=5)
        {
            return true;
        }
        //竖
        let shuUp = -1;
        let shuDown = 1;
        coherentCount = 1;
        while(this.CPURow+shuUp >=0 && this.board.IsWhite(this.CPURow+shuUp,this.CPUCol))
        {
            coherentCount++;
            shuUp--;
        }
        while(this.CPUCol+shuDown <=8 && this.board.IsWhite(this.CPURow+shuDown,this.CPUCol))
        {
            coherentCount++;
            shuDown++;
        }
         if(coherentCount >=5)
        {
            return true;
        }
       //  \
        let zuoShangRow = -1;
        let zuoShangCol =-1;
        let youXiaRow = 1;
        let youXiaCol = 1;
        coherentCount = 1;
        while(this.CPURow+zuoShangRow >=0 && this.CPUCol+zuoShangCol >=0 &&this.board.IsWhite(this.CPURow+zuoShangRow,this.CPUCol+zuoShangCol))
        {
            coherentCount++;
           zuoShangRow--;
            zuoShangCol--;
        }
        while(this.CPUCol+youXiaCol <=8 &&this.CPURow+youXiaRow <=8 &&this.board.IsWhite(this.CPURow+youXiaRow,this.CPUCol+youXiaCol))
        {
            coherentCount++;
            youXiaRow++;
            youXiaCol++;
        }
         if(coherentCount >=5)
        {
            return true;
        }
        //  /
        let youShangRow = -1;
        let youShangCol =1;
        let zuoXiaRow = 1;
        let zuoXiaCol = -1;
         coherentCount = 1;
         while(this.CPURow+youShangRow >=0 && this.CPUCol+youShangCol <=8 &&this.board.IsWhite(this.CPURow+youShangRow,this.CPUCol+youShangCol))
        {
            coherentCount++;
           youShangRow--;
            youShangCol++;
        }
        while(this.CPUCol+zuoXiaCol >=0 &&this.CPURow+zuoXiaRow <=8 &&this.board.IsWhite(this.CPURow+zuoXiaRow,this.CPUCol+zuoXiaCol))
        {
            coherentCount++;
            zuoXiaRow++;
            zuoXiaCol--;
        }
        if(coherentCount >=5)
        {
            return true;
        }
        return false;
    }
    CPURound()
    {
        //防守式AI
        let finalRow = 0;
        let finalCol = 0;
        let coherentCount = 1;
        let maxCoherentCount = 1;
        //横
        let hengLeft = -1;
        let hengRight = 1;
        while(this.playerCol+hengLeft >=0 && this.board.IsBlack(this.playerRow,this.playerCol+hengLeft))
        {
            coherentCount++;
            hengLeft--;
        }
        while(this.playerCol+hengRight <=8 && this.board.IsBlack(this.playerRow,this.playerCol+hengRight))
        {
            coherentCount++;
            hengRight++;
        }
        if(coherentCount >= maxCoherentCount)
        {
            if(this.board.IsEmpty(this.playerRow,this.playerCol+hengLeft))
            {
                finalRow = this.playerRow;
                finalCol = this.playerCol + hengLeft;
                maxCoherentCount = coherentCount;
            }
            else if(this.board.IsEmpty(this.playerRow,this.playerCol+hengRight))
             {
                finalRow = this.playerRow;
                finalCol = this.playerCol + hengRight;
                maxCoherentCount = coherentCount;
             }
        }
        //竖
        let shuUp = -1;
        let shuDown = 1;
        coherentCount = 1;
        while(this.playerRow+shuUp >=0 && this.board.IsBlack(this.playerRow+shuUp,this.playerCol))
        {
            coherentCount++;
            shuUp--;
        }
        while(this.playerCol+shuDown <=8 && this.board.IsBlack(this.playerRow+shuDown,this.playerCol))
        {
            coherentCount++;
            shuDown++;
        }
        if(coherentCount >= maxCoherentCount)
        {
            if(this.board.IsEmpty(this.playerRow+shuUp,this.playerCol))
            {
                finalRow = this.playerRow+shuUp;
                finalCol = this.playerCol;
                maxCoherentCount = coherentCount;
            }
            else if(this.board.IsEmpty(this.playerRow+shuDown,this.playerCol))
            {
                finalRow = this.playerRow+shuDown;
                finalCol = this.playerCol + hengRight;
                maxCoherentCount = coherentCount;
            }
        }
            // \
        let zuoShangRow = -1;
        let zuoShangCol =-1;
        let youXiaRow = 1;
        let youXiaCol = 1;
        coherentCount = 1;
        while(this.playerRow+zuoShangRow >=0 && this.playerCol+zuoShangCol >=0 &&this.board.IsBlack(this.playerRow+zuoShangRow,this.playerCol+zuoShangCol))
        {
            coherentCount++;
           zuoShangRow--;
            zuoShangCol--;
        }
        while(this.playerCol+youXiaCol <=8 &&this.playerRow+youXiaRow <=8 &&this.board.IsBlack(this.playerRow+youXiaRow,this.playerCol+youXiaCol))
        {
            coherentCount++;
            youXiaRow++;
            youXiaCol++;
        }
        if(coherentCount >= maxCoherentCount)
        {
            if(this.board.IsEmpty(this.playerRow+zuoShangRow,this.playerCol+zuoShangCol))
            {
                finalRow = this.playerRow+zuoShangRow;
                finalCol = this.playerCol+zuoShangCol;
                maxCoherentCount = coherentCount;
            }
            else if(this.board.IsEmpty(this.playerRow+youXiaRow,this.playerCol+youXiaCol))
            {
                finalRow = this.playerRow+youXiaRow;
                finalCol = this.playerCol + youXiaCol;
                maxCoherentCount = coherentCount;
            }
            
        }

        // /
        let youShangRow = -1;
        let youShangCol =1;
        let zuoXiaRow = 1;
        let zuoXiaCol = -1;
         coherentCount = 1;
         while(this.playerRow+youShangRow >=0 && this.playerCol+youShangCol <=8 &&this.board.IsBlack(this.playerRow+youShangRow,this.playerCol+youShangCol))
        {
            coherentCount++;
           youShangRow--;
            youShangCol++;
        }
        while(this.playerCol+zuoXiaCol >=0 &&this.playerRow+zuoXiaRow <=8 &&this.board.IsBlack(this.playerRow+zuoXiaRow,this.playerCol+zuoXiaCol))
        {
            coherentCount++;
            zuoXiaRow++;
            zuoXiaCol--;
        }
        if(coherentCount >= maxCoherentCount)
        {
            if(this.board.IsEmpty(this.playerRow+youShangRow,this.playerCol+youShangCol))
            {
                finalRow = this.playerRow+youShangRow;
                finalCol = this.playerCol+youShangCol;
                maxCoherentCount = coherentCount;
            }
            else if(this.board.IsEmpty(this.playerRow+zuoXiaRow,this.playerCol+zuoXiaCol))
            {
                finalRow = this.playerRow+zuoXiaRow;
                finalCol = this.playerCol + zuoXiaCol;
                maxCoherentCount = coherentCount;
            }
            
        }

        this.board.Down(finalRow,finalCol,false);
        this.CPURow = finalRow;
        this.CPUCol = finalCol;
    }
    
    PlayerRound()
    {
        let inputData = prompt('请输入行列号下棋子');
        let row = Number(inputData[0])-1;
        let col = Number(inputData[1])-1;
        this.board.Down(row,col,true);
        this.playerRow = row;
        this.playerCol = col;
    }
}

class Board{
    constructor(){
        this.board = new Array(9);
        for(let i =0;i < this.board.length;i++)
        {
            this.board[i] = new Array(9);
            for(let j = 0;j < this.board[i].length; j++)
            {
                this.board[i][j] = '+';
            }
        }
        this.blackChess = '▲';
        this.whiteChess = '◻';
        this.emptyChess = '+';
    }
    ShowBoard()
    {
        console.clear();
        console.log('    1   2   3   4   5   6   7   8   9 ');
        for(let i =0; i <9; i++)
        {
            let showData = String(i+1) + ' ';
            for(let j = 0; j < 9; j++)
                {
                    showData +=  ' ' +' '+this.board[i][j]+' ';
                }
            console.log(showData);
        }
    }
    Down(row,col,isPlayer){
        if(isPlayer)
         this.board[row][col] = this.blackChess;
        else
        this.board[row][col] = this.whiteChess;
        
    }
    IsWhite(row,col)
    {
        if(this.board[row][col] === this.whiteChess)
            return true;
        else
            return false;
    }
    IsBlack(row,col)
    {
        if(this.board[row][col] === this.blackChess)
            return true;
        else
            return false;
    }
    IsEmpty(row,col)
    {
        if(this.board[row][col] === this.emptyChess)
            return true;
        else
            return false;
    }
}



let game = new Game();
game.GameLoop();
// let board = new Board();
// let inputData = prompt('请输入行列号下棋子');
// let row = Number(inputData[0])-1;
// let col = Number(inputData[1])-1;
// board.Down(row,col,true);
// board.ShowBoard();





    


 