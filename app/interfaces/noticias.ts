export interface Noticias {
    id:number;
    idCategoria:number;
    titulo:string;
    resumen:string;
    autor:string;
    fecha:string;
    imagen:string;
    texto:string;
    destacado:boolean;
}

export let ListaNoticias:Array<Noticias>=[
    { id:1,
      idCategoria:1,
      titulo:"Nueva pelicula DB",
      resumen:"El anime Dragon Ball Super mostró el primer adelanto de su nueva película titulada Super Hero, cuyo estreno está fijado para 2022.",
      autor:"autor noticia 1",
      fecha:"2021",
      imagen:"2.png",
      texto: "texto de la noticia",
      destacado:true
    },
    
    { id:2,
        idCategoria:2,
        titulo:"BBC news",
        resumen:"Vivir a 50 ºC: el sencillo recurso para enfriar casas y no morir de calor en India",
        autor:"autor noticia 2",
        fecha:"2021",
        imagen:"3.png",
        texto: "texto de la noticia 2",
        destacado:true
      },
    
      { id:3,
        idCategoria:3,
        titulo:"Santiago Wanderers",
        resumen:"Hoy, los porteños solo igualaron 1-1 en el Elías Figueroa Brander",
        autor:"autor noticia 2",
        fecha:"2021",
        imagen:"4.png",
        texto: "texto de la noticia 3",
        destacado:true
      },
    ];


    export let ListaNoticias1:Array<Noticias>=[
      { id:4,
        idCategoria:4,
        titulo:"Noticia 1",
        resumen:"resumen de la noticia1",
        autor:"autor noticia 1",
        fecha:"2021",
        imagen:"5.png",
        texto: "texto de la noticia",
        destacado:true
      },
      
      { id:5,
          idCategoria:5,
          titulo:"Noticia 1",
          resumen:"resumen de la noticia1",
          autor:"autor noticia 2",
          fecha:"2021",
          imagen:"6.png",
          texto: "texto de la noticia 2",
          destacado:true
        },
      
        { id:6,
          idCategoria:6,
          titulo:"Noticia 1",
          resumen:"resumen de la noticia1",
          autor:"autor noticia 2",
          fecha:"2021",
          imagen:"7.png",
          texto: "texto de la noticia 3",
          destacado:true
        },

        { id:7,
          idCategoria:6,
          titulo:"Noticia 1",
          resumen:"resumen de la noticia1",
          autor:"autor noticia 2",
          fecha:"2021",
          imagen:"7.png",
          texto: "texto de la noticia 3",
          destacado:true
        },
      ];