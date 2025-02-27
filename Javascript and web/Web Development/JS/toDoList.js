document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>

                <button class="delete">
                    <i class='far fa-trash-alt'><i>
                <button/>

            <div/>
        `
        var current_tasks = document.querySelectorAll('.delete')
        for(i=0; i<current_tasks.length; i++ ){
            current_tasks[i].onclick =function(){
                this.parentNode.remove()  //this is something new
            }
        }

        var tasks = document.querySelectorAll('.task')
        for(i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed') //this is also new
            }
        }

        document.querySelector('#newtask input').value = ''
    }

}

//below here is the ChatGPT version which prevents having two bin icons

/**
 * 
        document.querySelector('#push').onclick = function(){
            if(document.querySelector('#newtask input').value.length == 0){
                alert("Please Enter a Task");
            } else {
                const taskContainer = document.createElement('div');
                taskContainer.className = 'task';
                
                const taskName = document.createElement('span');
                taskName.id = 'taskname';
                taskName.textContent = document.querySelector('#newtask input').value;

                const deleteButton = document.createElement('button');
                deleteButton.className = 'delete';
                deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>';
                deleteButton.onclick = function() {
                    taskContainer.remove();
                };

                taskContainer.appendChild(taskName);
                taskContainer.appendChild(deleteButton);

                taskContainer.onclick = function() {
                    taskContainer.classList.toggle('completed');
                };

                document.querySelector('#tasks').appendChild(taskContainer);
                
                document.querySelector('#newtask input').value = '';
            }
        }
 * 
*/
