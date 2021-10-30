export interface Categorias {
    id:number;
    titulo:string;
    color: string;
}

export let ListaCategorias:Array<Categorias>=[
    { id:1,
      titulo: "Entretenimiento",
      color: "green"
    },
    { id:2,
        titulo: "Mundo",
        color: "azul"
    },
    { id:3,
        titulo: "Deporte",
        color: "red"
    },
    { id:4,
        titulo: "Economia",
        color: "pink"
    },
    { id:5,
        titulo: "Salud",
        color: "azul"
    },
    { id:6,
        titulo: "Tecnologia",
        color: "red"
    }
]
