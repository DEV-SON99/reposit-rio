const input = document.getElementById('valor')
const valores = document.getElementById('valores')


const add = () => {

    // condição para evitar valor vazio
    if (!input.value.trim()) {
        input.focus()
        return
    }

    // criando os elementos para a lista
    const node = document.createElement('li')
    const textNode = document.createTextNode(input.value)
    node.append(textNode)
    valores.append(node)

    input.value = ''
}

const misturar = () => {
    const vetor = Array.from(valores.children).map(li => parseInt(li.innerHTML));
    shuffle(vetor, vetor.length);
    valores.innerHTML = vetor.map(num => `<li>${num}</li>`).join('');
}

// trocar os valores de duas posições de um vetor
const swap = (v,i,j) => {
    [v[i], v[j]] = [v[j], v[i]]
}

// embaralhar os elementos de um vetor
const shuffle = (v,q) => {
    for (let i = 0; i < q; i++) {
        const a = Math.floor(Math.random() * v.length);
        const b = Math.floor(Math.random() * v.length);
        swap(v, a, b);
    }
}

//ordenar um vetor de inteiros com o algoritmo Bubble Sort

const bubble_sort = (v) => {
    let n = v.length;
            for (let i = 0; i < n - 1; i++) {
                for (let j = 0; j < n - i - 1; j++) {
                    if (v[j] > v[j + 1]) {
                        swap(v, j, j + 1);
                    }
                }
            }
}

// ordenar um vetor de inteiros utilizando o algoritmo Selection Sort

const selection_sort = (v) => {
    let n = v.length;
            for (let i = 0; i < n - 1; i++) {
                let minIdx = i;
                for (let j = i + 1; j < n; j++) {
                    if (v[j] < v[minIdx]) {
                        minIdx = j;
                    }
                }
                swap(v, i, minIdx);
            }
}

//ordenar um vetor de inteiros com o algoritmo Quick Sort
const quick_sort = (v,low,high) => {
    if (low < high) {
        let pi = particionamento(v, low, high);
        quick_sort(v, low, pi - 1);
        quick_sort(v, pi + 1, high);
    }
}

// de apoio a quick_sort, tendo como parâmetros o vetor, posição inicial, posição final e valor do pivot

const particionamento = (v,low,high) => {
    let pivot = v[high];
            let i = (low - 1);

            for (let j = low; j < high; j++) {
                if (v[j] < pivot) {
                    i++;
                    swap(v, i, j);
                }
            }
            swap(v, i + 1, high);
            return (i + 1);
}

const ordenar = () => {
    const algoritmo = document.getElementById('algoritmo');
    const vetor = Array.from(valores.children).map(li => parseInt(li.innerHTML));

    switch (algoritmo.value) {
        case 'bubble':
            bubble_sort(vetor);
            break;
        case 'selection':
            selection_sort(vetor);
            break;
        case 'quick':
            quick_sort(vetor, 0, vetor.length - 1);
            break;
    }

    valores.innerHTML = vetor.map(num => `<li>${num}</li>`).join('');
}