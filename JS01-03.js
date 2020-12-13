<<<<<<< HEAD
const tasks = ['掃除', '買い物', '散歩'];

function TaskContents(){ 
  console.log("========================");
  console.log("現在持っているタスク一覧");
  console.log("========================");
  
tasks.forEach((task, index)=> {
  console.log(index+1 + " : " + task);  
});
}
TaskContents();

for(let count = 0; count <= 5; count++){
  let answer = prompt("タスクを入力してください");
  tasks[tasks.length] = answer
  TaskContents();
}

=======
let task_content = ['掃除', '買い物', '散歩'];

function task(){ 
  console.log("========================");
  console.log("現在持っているタスク一覧");
  console.log("========================");
  
  for(let length = 0; length <task_content.length; length++){
    console.log(length + " : " + task_content[length]);
  }
}
task();

for(let count = 0; count <= 5; count++){
  let answer = prompt("タスクを入力してください");
  task_content[task_content.length] = answer
  task();
}


>>>>>>> 973c1554d84b323f19af079eb1956d080ec13529
