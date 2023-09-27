const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

function renderElements(arr) {
  function createTaskItem(obj){
  
    const li = document.createElement("li");
    const div = document.createElement("div");
    const span = document.createElement("span");
    const p = document.createElement("p");
    const button = document.createElement("button");
    
    ul.appendChild(li);
    li.classList.add("task__item");
    
    li.appendChild(div);
    div.classList.add("task-info__container");
    
    div.appendChild(span);
    span.classList.add("task-type");
    span.textContent = "•";
    if (obj.type === "Urgente") {
      span.classList.add("span-urgent");
    }
    else if (obj.type === "Importante") {
      span.classList.add("span-important");
    } else if (obj.type === "Normal") {
      span.classList.add("span-normal");
    }
    
    div.appendChild(p);
    p.textContent = obj.title;
  
    li.appendChild(button);
    button.classList.add("task__button--remove-task");
    
  }
  const ul = document.querySelector("ul");
  
  
  for (let i = 0; i < arr.length; i++) {
    createTaskItem(tasks[i]);
  }
}

renderElements(tasks);