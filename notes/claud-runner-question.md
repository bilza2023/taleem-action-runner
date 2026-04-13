
This is js presentation /slides running engine

I am creating a taleem-action-runner small js utility which job is to manipulate css-classes based on time. 
 
 Please read code and readme.md
 

 Now : Here are the problems

1: it is dealing with VISIBILITY  as well as Effects. Both are seperate concerns.The effects should be applied to visible elements only. This is further comlicated by the fect hidden  = hidden but  visible is not  = not hidden for visible we just remove hidden. 

2: Visibility is of 2 types 1 : hidden (opacity =0) but element is in place , structure holds  , it has border 2: removed when we want  item removed from the DOM

if am thinking of changing the action object to something like 

    {
        id: "title",
        visibility: { start: 0, end: 10 },
        effects: [],
      },
3: I still have no idea of how to apply transition effects.

4: The runner gets complete html so if we have to remove an item how do we remove it ? . In the past I use Progressive reveal in which i will give just what is to be drawn by runner but that work only with progressive reveal one by one and no other style. for example show all but highlight 1 was not possible.

5: Should the action-runner be responisbile for mamanging css-classes as well as mamaging-html ? 

6: if not then who should mamange html ? if we render html on every click it is possible but expensive. and even then we have to decided what html exist and what does not - 

7: Currently we are using groups:  1 element can be part of 1 group so on each state we remove/wipe old claases and add new. An alternative would be to apply state-progressivly in which the state is applied from time-0 upto now and the current state show ( in that case the state is accumulative and the css classes are add and remove). but if that does not effect the html management then i will like each state to be comeplte

8:should we add Visible, Hidden,Removed  as 23gorups as well ? in which the hidden has opacity 0 removed are rmeoved (can we do it adding /remvoing css classes ????? important quition ). 




dicuss: