
const bibleBooks = {
    1: "Génesis",
    2: "Éxodo",
    3: "Levítico",
    4: "Números",
    5: "Deuteronomio",
    6: "Josué",
    7: "Jueces",
    8: "Rut",
    9: "1 Samuel",
    10: "2 Samuel",
    11: "1 Reyes",
    12: "2 Reyes",
    13: "1 Crónicas",
    14: "2 Crónicas",
    15: "Esdras",
    16: "Nehemías",
    17: "Ester",
    18: "Job",
    19: "Salmos",
    20: "Proverbios",
    21: "Eclesiastés",
    22: "Cantar de los Cantares",
    23: "Isaías",
    24: "Jeremías",
    25: "Lamentaciones",
    26: "Ezequiel",
    27: "Daniel",
    28: "Oseas",
    29: "Joel",
    30: "Amós",
    31: "Abdías",
    32: "Jonás",
    33: "Miqueas",
    34: "Nahum",
    35: "Habacuc",
    36: "Sofonías",
    37: "Hageo",
    38: "Zacarías",
    39: "Malaquías",
    40: "Mateo",
    41: "Marcos",
    42: "Lucas",
    43: "Juan",
    44: "Hechos",
    45: "Romanos",
    46: "1 Corintios",
    47: "2 Corintios",
    48: "Gálatas",
    49: "Efesios",
    50: "Filipenses",
    51: "Colosenses",
    52: "1 Tesalonicenses",
    53: "2 Tesalonicenses",
    54: "1 Timoteo",
    55: "2 Timoteo",
    56: "Tito",
    57: "Filemón",
    58: "Hebreos",
    59: "Santiago",
    60: "1 Pedro",
    61: "2 Pedro",
    62: "1 Juan",
    63: "2 Juan",
    64: "3 Juan",
    65: "Judas",
    66: "Apocalipsis"
};

const bibleChapters = {
    "Génesis": 50,
    "Éxodo": 40,
    "Levítico": 27,
    "Números": 36,
    "Deuteronomio": 34,
    "Josué": 24,
    "Jueces": 21,
    "Rut": 4,
    "1 Samuel": 31,
    "2 Samuel": 24,
    "1 Reyes": 22,
    "2 Reyes": 25,
    "1 Crónicas": 29,
    "2 Crónicas": 36,
    "Esdras": 10,
    "Nehemías": 13,
    "Ester": 10,
    "Job": 42,
    "Salmos": 150,
    "Proverbios": 31,
    "Eclesiastés": 12,
    "Cantar de los Cantares": 8,
    "Isaías": 66,
    "Jeremías": 52,
    "Lamentaciones": 5,
    "Ezequiel": 48,
    "Daniel": 12,
    "Oseas": 14,
    "Joel": 3,
    "Amós": 9,
    "Abdías": 1,
    "Jonás": 4,
    "Miqueas": 7,
    "Nahum": 3,
    "Habacuc": 3,
    "Sofonías": 3,
    "Hageo": 2,
    "Zacarías": 14,
    "Malaquías": 4,
    "Mateo": 28,
    "Marcos": 16,
    "Lucas": 24,
    "Juan": 21,
    "Hechos": 28,
    "Romanos": 16,
    "1 Corintios": 16,
    "2 Corintios": 13,
    "Gálatas": 6,
    "Efesios": 6,
    "Filipenses": 4,
    "Colosenses": 4,
    "1 Tesalonicenses": 5,
    "2 Tesalonicenses": 3,
    "1 Timoteo": 6,
    "2 Timoteo": 4,
    "Tito": 3,
    "Filemón": 1,
    "Hebreos": 13,
    "Santiago": 5,
    "1 Pedro": 5,
    "2 Pedro": 3,
    "1 Juan": 5,
    "2 Juan": 1,
    "3 Juan": 1,
    "Judas": 1,
    "Apocalipsis": 22
};


function buscarLibro() {
    let numero = Math.floor(Math.random() * 66) + 1;

    for (const key in bibleBooks) {
        if (numero == key) {
            return bibleBooks[key];
        }
    }
    return null;
    
}   


//creamos una variable que almacene el resultado de la función buscarLibro
//y luego asignamos el valor de la variable a la caja de texto que mostramos en html.
const resultado = buscarLibro();
document.getElementById('nombreLibro').value = resultado;



// funcion para elejir capitulo aleatorio de un libro
function elegirCapituloAleatorio(libro) {
    libro = resultado
    let maxCapitulos = bibleChapters[libro];
    let capituloAleatorio = Math.floor(Math.random() * maxCapitulos) + 1;
    document.getElementById('capitulo').value = capituloAleatorio;
    document.getElementById('generarCapituloBtn').disabled = true;
    
}

