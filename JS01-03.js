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

