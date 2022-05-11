/*
 Buscando e contando dados em Arrays

    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
    - Contar o número de categorias e o número de livros em cada categoria
    - Contar o número de autores
    - Mostrar livros de Elena Ferrante
    - Transformar  a função acima em uma função que irá receber o nome do autor
    e devolver os livros desse autor
*/

const booksByCathegory = [
    
    {
        category: 'Literatura colombiana',
        books:[
            {
                title: 'Cem Anos de Solidão',
                author: 'Gabriel García Marquez',
        },
        {
            title: 'Crônica de Uma Morte Anunciada', 
            author: 'Gabriel García Marquez',
        },
        {
            title: 'Do amor e Outros Demônios',
            author: 'Gabriel García Marquez',
        }
     ],
    },

    {
        category: 'Literatura italiana',
        books: [
            {
                title:'A filha perdida',
                author: 'Elena Ferrante',
            },
            {
                title: 'Frantumaglia',
                author: 'Elena Ferrante',
            },
            {
                title: 'A amiga genial',
                author: 'Elena Ferrante',
            }
         ],
    }
]

const totalCategories = booksByCathegory.length

console.log(totalCategories);
for(let category of booksByCathegory){
    console.log('Total de livros da categoria:', category.category)
    console.log(category.books.length)
}

function countAuthors(){
    let authors = [];
    
    for(let category of booksByCathegory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }

    console.log('Total de autores:', authors.length)
}

countAuthors();

function booksOfAuthor(author){
    let books = [];
    
    for(let category of booksByCathegory){
        for(let book of category.books){
            if(book.author === author){
                books.push(book.title)
            }
        }
    }

    console.log(`Livros de ${author}: ${books.join(", ")}`)
}

booksOfAuthor('Elena Ferrante');