const tarefas = [
    'estudar funções',
    'estudar funções agregadoras',
    'arrumar casa',
    'reunião do trabalho'
]

function mostrarTarefas(listaTarefas) {
    const ul = document.querySelector('#taskList')
    ul.innerHTML = ''
    listaTarefas.forEach(tarefa => {
        const li = `<li>${tarefa}</li>`
        ul.innerHTML += li
    })
}

function filtrarTarefas() {
    const textoFiltrado = document.querySelector('#searchInput').value
    const tarefasFiltradas = tarefas.filter(tarefa => tarefa.includes(textoFiltrado))
    
    mostrarTarefas(tarefasFiltradas) // Toda vez que eu clico no botão
}

mostrarTarefas(tarefas) // Primeira vez que a página é carregada
