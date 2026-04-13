
THIS IS THE CRUX
ok i am not sure what your are saying but some part are v logical.
Forget code now : what are these 2 compiler and runner doing ?

the runner is v simple : it pick the correct state (action) for that time. 
 state: {
      focus: ["a"],
      dim: ["b", "c"]
    }

    here a,b,c  are  ids of the elements.
    so it will pick element a and then look for focus in groups
    export const groups = {
  focus: ["focus-css-class"  ],
  dim: ["dim"]
};

  and it will apply focus-css-class to element a. 
  and dim to element b and c.

Forget even the json and schema --- this is core --

1: WHAT IS RUNNER REALLY DOING NOW ? -- forget effects etc.

2: IS WHAT THE RUNNER DOING WORKS FOR US IN LONG TERMS?  in theory test eq slide  -- make examples see if this really works on different slide types (it does -- in the current state we have made some good example we can check that later)

3: SCHEMA etc etc.....after 1 and 2 is clear.


The main questions that will solve 1&2

Q1 : There is confusion between hidden/show and effects. Currently the action-player is doing both since that how it was designed BUT the new compiler sends track in which visibility is seperate. that ensure that ONLY VISIBLE ITEMS  are effected. so we need to stream line 

--> HOW visibility is controlled  and HOW  effects are controled

attention: in this app we have controller visibility in 3 phases

a: first we made player just return items which are to be shown and not others.

b: We has problem with broken lay out in which a slide looked good when complete but ugly in the middle so we started with complete html BUT hidden class added. Now the slide has complete borders etc and just the element appear t correct time.

c: NOW : This is new here : we decided these rules here again.

Q2: the group is not alwasy a single css class or can it be more than 1 also . it can be --what are the problems we can face in that -- think in depth about implementation. Also take into account and we just ADD css classes and DO-NOT remove css classes. 

Q3 ====> Important : we have 2 rules -Dicuss each rule in detail 

    1: Each element should be part of just 1 group only

    2: Each state is complete in its self no memory : (an alternative techniueq wiil be to apply state  accumulatively)

for example : now we do 

state 0 : highlight : [ a ] , dim : [b , c]

state 5 : highlight : [ b ] , dim : [a , c]   


===> This is where everything has to actually happen --> Make it happen first and then tell the up-stream system to align with it.  


