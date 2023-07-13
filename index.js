const tbody = document.querySelector("#tbody");

async function getTask() {
    try {
        1;
        const response = await fetch("http://127.0.0.1:8000/api/v1/todo/");
        const {ok, data} = await response.json();
        console.log("data",data);   
        if (ok) renderItems(data);
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