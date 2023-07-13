const tbody = document.querySelector("#tbody");

async function getTask() {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/v1/todo/");
        const data = await response.json();
        console.log("data",data);   
        renderItems(data);
    } catch (error) {
        console.log(`Error ${error}`);
    }
}

function renderItems(data) {
    tbody.innerHTML = "";
    data.forEach((task) => {
        tbody.innerHTML += `
        <tr>
            <td>${task.title}</td>
            <td>${task.body}</td>
            <td>${task.created_at}</td>
            <td>${task.done_at}</td>
            <td>${task.updated_at}</td>
            <td>${task.status}</td>
        </tr>
        `
    });
}
getTask();