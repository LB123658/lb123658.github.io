# How to use LLAMA
#### Open the LLAMA editor [here](https://lb123658.github.io/code/) to start. 

### Commands
LLAMA uses simple commands to run, save, delete, download, import, clear, and print code.\
Commands are formed with: ```cmd --``` followed by the action you want to do.\
For example: ```cmd --run``` would run the code.\
*Commands are always written after the main part of the code*

### The code
The title of the LLAMA document is written at the top.
```
<file:: LLAMA Example>
```
The code above would set the title of the document to "LLAMA Example".\
The filename part is always at the top.\
To write text in LLAMA use ```create(text) "YOUR TEXT GOES HERE";```\
The following code would write "Hello."\
```
create(text) "Hello.";
```
You can also display websites in LLAMA by using ```create(webwindow) "https://your-url-goes-here";```\
```
create(webwindow) "https://wikipedia.org";
```
The code above would display Wikipedia\
To display HTML in LLAMA use the following code:\
```
create(html) "<your HTML goes here>";
```

### Tips
Use ```cmd --run``` at the end to run your code, ```cmd --print``` to print it, ```cmd --save``` to save it, ```cmd --import``` to put your last-saved code back in the editor. 

