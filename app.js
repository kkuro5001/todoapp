$(document).ready(function() {
    //タスクの表示
    function displayTodos() {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        $('#todoList').empty();
        todos.forEach(function(todo, index) {
            $('#todoList').append(`
                <li><input type="checkbox" class="toggle" data-index="${index}" ${todo.done ? 'checked' : ''}>
                    <span style="text-decoration: ${todo.done ? 'line-through' : 'none'}; color: ${todo.done ? '#ccc' : '#000'};">
                        ${todo.text}
                    </span>
                    <button class="delete" data-index="${index}">削除</button>
                </li>
            `);
        });
    }

    // タスク追加
    $('#addTodo').click(function() {
        const newTodo = $('#input').val();
        if (newTodo) {
            const todos = JSON.parse(localStorage.getItem('todos')) || [];
            todos.push({text: newTodo, done:false });
            localStorage.setItem('todos', JSON.stringify(todos));
            $('#input').val('');  // 入力フィールドをリセット
            displayTodos();  // タスクを再表示
        }
    });

        //タスクの削除
    $('#todoList').on('click', '.delete', function() {
        const index = $(this).data('index');
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.splice(index, 1); //指定されたインデックスのタスクを削除
        localStorage.setItem('todos', JSON.stringify(todos));
        displayTodos(); //タスクを再表示
    });

    //チェックボックスの状態変更で終了状態を保存
    $('#todoList').on('change', '.toggle', function() {
        const index = $(this).data('index');
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos[index].done = this.checked; //チェックボックスの状態を保存
        localStorage.setItem('todos', JSON.stringify(todos));
        displayTodos(); //タスクを再表示
    })

    //ページ読み込み時にタスクを表示
    displayTodos();
})



// //タスク追加
// $("#addTodo").click(function() {
//     const inputTodo = $("input").val();
//     if(inputTodo !== "") {
//         $("#todoList").append("<li><input type='checkbox'>" + inputTodo + "</li>");
//         $("input").val("");
//     }
// });

// //チェックを押すと色を変える
// $('$tooList').on("change", "toggle", function() {
//     if($(this).is(":checked")) {
//         $(this).parent().css("text-decoration", "line-through");
//         $(this).parent().css("color", "#ccc");
//     } else {
//         $(this).parent().css("text-decoration", "none");
//         $(this).parent().css("color", "#000");
//     }
// });