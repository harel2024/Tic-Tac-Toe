export var player;
(function (player) {
    player["X"] = "X";
    player["O"] = "O";
})(player || (player = {}));
export var Status;
(function (Status) {
    Status["IN_PROGRESS"] = "IN_PROGRESS";
    Status["DRAW"] = "DRAW";
    Status["X_WON"] = "X_WON";
    Status["O_WON"] = "O_WON";
})(Status || (Status = {}));
export var Winner;
(function (Winner) {
    Winner["X"] = "X";
    Winner["O"] = "O";
})(Winner || (Winner = {}));
