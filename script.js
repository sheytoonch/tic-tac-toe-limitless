window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');

    let CANVAS_WIDTH = canvas.getBoundingClientRect().width;
    let CANVAS_HEIGHT = canvas.getBoundingClientRect().height;

    const orthogonalNeighborVectors = [[0, -1], [0, 1], [-1, 0], [1, 0]];
    const diagonalNeighborVectors = [[-1, -1], [1, -1], [-1, 1], [1, 1]];
    let gameOver = false;

    const screenInfoH2 = document.getElementById('screenInfoH2'); // TODO: delete later
    let iterationsToRefreshFPS = 50;


    class InputHandler {
        constructor() {
            this.keys = [];
            window.addEventListener('keydown', e => { // if key is clicked
                if ((   e.key === 'w'  ||
                        e.key === 'a'  ||
                        e.key === 's'  ||
                        e.key === 'd') &&
                        this.keys.indexOf(e.key) === -1) {
                    this.keys.push(e.key);
                }
            });
            window.addEventListener('keyup', e => { // if key is released
                if (    e.key === 'w'  ||
                        e.key === 'a'  ||
                        e.key === 's'  ||
                        e.key === 'd') {
                    this.keys.splice(this.keys.indexOf(e.key), 1);
                }
            });
        }
    }


    class Game {
        constructor() {
            this.minX = 0;
            this.maxX = 0;
            this.minY = 0;
            this.maxY = 0;
            this.turnFinished = false;
            this.fields = [new Field(0, 0, this.currentPlayer)];
        }

        nextTurn() {

        }
    }


    class Player {
        constructor(i) {
            this.i = i;
        }
    }


    class Field {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.visited = false;
            this.size = 200;
            this.image = new Image();
        }
    }


    const input = new InputHandler();
    const game = new Game();

    let lastTime = 0;

    function animate(timestamp) {
        const deltaTime = timestamp - lastTime;
        lastTime = timestamp;

        CANVAS_WIDTH = canvas.getBoundingClientRect().width;
        CANVAS_HEIGHT = canvas.getBoundingClientRect().height;



        // TODO: delete if statement below
        if (iterationsToRefreshFPS > 0) {
            iterationsToRefreshFPS--;
        } else {
            screenInfoH2.innerText = `Width: ${CANVAS_WIDTH} x Height: ${CANVAS_HEIGHT} | FPS: ${Math.floor(1000/deltaTime)}, deltaTime: ${Math.trunc(deltaTime * 10) / 10}`; // TODO: delete later
            iterationsToRefreshFPS = 50;
        }
        requestAnimationFrame(animate);
    }

    animate(0);

});