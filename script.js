todoList = ['todo1','todo2','todo3'];
let progressArray=[];
let doneArray=[]

let todocol=document.getElementById("todo");
let progesscol=document.getElementById("progress");
let donecol=document.getElementById("done");

function renedertodo(){
    todocol.innerHTML = "<h3>today's Todo</h3> "
    todoList.forEach((item,index) => {
        todocol.innerHTML +=`
         <div class="task" >
         <p>${item}</p>
          <button onclick=shifRight('todo',${index})>&rarr;</button>
          </div>
         `; 
 });
 
}
renedertodo();
function renderProgress(){
    progesscol.innerHTML = "<h3>Work in progress</h3> "
    progressArray.forEach((item,index) => {
        progesscol.innerHTML +=`
         <div class="task" >
         <p>${item}</p>
          <button onclick=shifRight('progress',${index})>&rarr;</button>
          <button onclick=shifLeft('progress',${index})>&larr;</button>
          </div>
         `; 
 });

}

function renderDone(){
    donecol.innerHTML = "<h3>finally done</h3> "
doneArray.forEach((item,index) => {
    donecol.innerHTML +=`
     <div class="task" >
     <p>${item}</p>
     <button onclick=shifLeft('done',${index})>&larr;</button>
      </div>
     `; 
});
}



function shifRight(colname,index){
    
     if(colname==="todo"){
        let removetodo=todoList[index];
        todoList=todoList.filter((item,i)=>{
           return  i!==index
        })
        renedertodo();
        progressArray.push(removetodo)
        renderProgress()
     }
    
     
     if(colname==="progress"){
        let removetodo=progressArray[index];
        progressArray=progressArray.filter((item,i)=>{
           return  i!==index
        })
        renderProgress();
        doneArray.push(removetodo)
        renderDone()
     }
     
}



function shifLeft(colname,index){
    
    if(colname==="done"){
       let removetodo=doneArray[index];
       doneArray=doneArray.filter((item,i)=>{
          return  i!==index
       })
      renderDone()
       progressArray.unshift(removetodo)
       renderProgress();
    }
   
    
    if(colname==="progress"){
       let removetodo=progressArray[index];
       progressArray=progressArray.filter((item,i)=>{
          return  i!==index
       })
       renderProgress();
       todoList.push(removetodo)
       renedertodo()
    }
    
}



