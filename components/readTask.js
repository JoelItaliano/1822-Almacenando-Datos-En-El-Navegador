import { createTask } from "./addTask.js";
import dateElement from "./dateElemets.js"
import { uniqueDates, ordenDates } from "../services/date.js";

export const displayTasks = () => {
    const list = document.querySelector("[data-list]");
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    const date = uniqueDates(taskList);
    ordenDates(date);

    date.forEach(date => {
        const dateMoment = moment(date, "DD/MM/YYYY");
        list.appendChild(dateElement(date))
        taskList.forEach((task) => {
            const taskDate = moment(task.dateFormat, "DD/MM/YYYY")
            const diff = dateMoment.diff(taskDate);
            if(diff === 0) {
                list.appendChild(createTask(task))
            }
            
        });
    })

    
}