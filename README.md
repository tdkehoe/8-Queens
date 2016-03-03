# 8 Queens

This was a technical interview assignment. In the [Eight Queens Puzzle](https://en.wikipedia.org/wiki/Eight_queens_puzzle) you put eight queens on a chessboard, all in safe positions. It's usually solved with a recursive algorithm but I don't know recursive programming so I wrote a program that places seven queens on the board, and another program that places eight rooks on the board.

First I wrote ```8_Rooks.js```:

```
R - - - - - - -
- R - - - - - -
- - R - - - - -
- - - R - - - -
 - - - - R - - -
- - - - - R - -
- - - - - - R -
- - - - - - - R
```

Then I added diagonals and got ```5_Queens.js```:

```
Q - - - - - - -
- - - Q - - - -
- Q - - - - - -
- - - - Q - - -
- - Q - - - - -
- - - - - - - -
- - - - - - - -
- - - - - - - -
```

By commenting out lines 326-332 I got ```7_Queens.js```:

```
Q - - - - - - -
- - - - Q - - -
- Q - - - - - -
- - - - - Q - -
- - Q - - - - -
- - - - - - Q -
- - - Q - - - -
- - - - - - - -
```

I wrote a [blog post](https://github.com/tdkehoe/blog/wiki/Abstracting-JavaScript) last year about writing nested loops by first writing out the code without loops, then abstracting one loop, and finally abstracting the 2nd loop. It's slow and tedious at first but saves time (and mental strain) debugging nested loops.

I started with ```1_Rook.js```, which uses a one-dimensional array to represent one row of the chessboard, and uses a ```for``` loop in a ```forEach``` loop to place one rook in the first square.

Next I wrote ```8_Rooks_1stLoop.js``` with a two-dimensional array representing the entire chessboard, a ```forEach``` loop iterating through each row, and eight single ```for``` loops nested in the ```forEach``` loop,
each iterating through the squares of each row placing one rook correctly in each row.

Finally I abstracted the eight singles ```for``` loops into a single third-level (nested) ```for``` loop in ```8_Rooks_2ndLoop.js```. The third loop iterates through each square in a column.

* ```8_Rooks.js``` (no loops) is 496 lines.
* ```8_Rooks_1stLoop.js``` (eight single loops nested in a forEach loop) is 91 lines.
* ```8_Rooks_2ndLoop.js``` (triple nested loops) is 26 lines.

As much as I enjoy programming challenges like this, in my experience JavaScript is more about connecting resources, e.g., getting Node's ```app.js``` to talk to the ```express.Router``` module while each route uses the Mongoose Node module to query the MongoDB database and then sends the data as a JSON object to the API so that the Angular front-end can receive the data, then setting up two-way data binding so that Angular can display
the data in the views, which are controlled by Angular's router, etc. The challenges are choosing components that will work well together and getting them to talk to each other. Five months after graduation my classmates are still slacking each other asking which components work best with other components.

For my [Galvanize capstone project](https://github.com/tdkehoe/peerjs) I hooked up WebRTC video conferencing with a cloud database (Firebase) to give Angular five-way data binding (two users each with two-way data binding connected via AngularFire cloud data binding). You can go to the website, see a list of players waiting for a game, click a name and open a video conference window, then play a tic-tac-toe game with the other user. The code isn't pretty and it's just a tic-tac-toe game but our Director of Instruction told me that his jaw dropped when I demo'd it at our Hiring Day.

To make an analogy, in the years that I was an electronics engineer I used little of the math I learned in college, and instead studied telephone-book sized catalogs from distributors to see what parts were available, then figured out how to put the pieces together.

If you're looking for a coder who can recursively write triple nested loops to iterate over two-dimensional arrays, last summer I AirBnB hosted two wonderfully nice MIT students interning at Google. If you need
someone to figure out how to hook up stuff no one has ever put together to make apps that solve customers' problems, that's what Galvanize graduates do.
