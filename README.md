# Color Text Script 

## A script that produces an HTML file with colored text based on an input text file. Built with JavaScript. 

I built this script because I wanted to automatically color a large amount of text by attaching a prefix to each line. For example, I want the line `GREEN: This is green.` to be converted to HTML `This is green.`, formatted as green text. 

## Installation 

To modify the code to suit your purposes, you can use an IDE such as [VS Code](https://code.visualstudio.com/).

To change the text to color, modify the file called `data.txt` at the root directory. This text file should contain the lines of text you want to color.

To change the prefixes and the corresponding colors, modify the file called `hexRefs.js`. 

## Usage 

To run the application on your local machine, you can run `node index.js` from the command line.

## License 

MIT License

Copyright © 2020 Rory Kees

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
