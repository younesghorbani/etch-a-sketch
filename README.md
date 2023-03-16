# Etch-A-Sketch

This project is about making a browser-based version of 
the drawing toy "Etch-A-Sketch".<br>
The way it works is that the user must first choose how many cells 
on each side the part of the page that is designated for drawing should have. 
Then there are three different modes for drawing in front of the user. 
**Normal mode:** In this mode, the user can color the cells of 
the specified section by selecting the desired color from the color picker tool.
**Shading mode:** In this mode, every time the user moves the mouse 
into the cells of the specified section, that cell will be filled with black color 
at different levels (from 10 to 100%).
**Colorful Mode:** In this mode, any cell that the user moves 
the mouse into will be filled with a random color.<br>
This project was a relatively difficult but fun project for me. 
Writing the codes for "Normal" and "Colorful" modes were easy, 
but writing the codes for the "Shading" mode was a bit difficult and 
took two or three days of my time. In the end, I realized that my chosen solution 
was wrong and that was the reason for not achieving the desired result. 
At first, I thought that in order to determine the time when the black color 
becomes 100%, I should consider the opacity and the background color, 
but then I realized that by adding a specific class name to that mode 
and considering the presence or absence of that class and also considering 
the amount of opacity each time the mouse enters each cell, 
it can be distinguished from other modes and that class name can be used 
like an on/off switch. Then I extended this method to other modes 
so that all three modes can be distinguished from each other.