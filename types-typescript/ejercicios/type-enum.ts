// Orientacion para Fotografias
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;

enum PhotoOrientation {
    Landscape = 0,  // 0
    Portrait = 1,   // 1
    Square = 2,     // 2
    Panorama = 3,   // 3
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape
console.log('landscape', landscape) // 0

console.log('landscape', PhotoOrientation[landscape])

enum PictureSizes {
    Landscape = 10,  // 10
    Portrait,   
    Square,     
    Panorama,   
}

console.log('portrait', PictureSizes.Portrait)


enum Country {
    Bolivia = 'bol',
    Colombia = 'col',
    Mexico = 'mex',
    EEUU = 'usa',
    Espana = 'esp',
}

const country : Country = Country.Colombia;
console.log('country' ,country)

// Reto extender Enumerados
enum DiasLaborales {
    Lunes = 'MON',
    Martes = 'TUE',
    Miercoles = 'WED',
    Jueves = 'THU',
    Viernes = 'FRI'
  }
  
  enum DiasFinSemana {
    Sabado = 'SAT',
    Domingo = 'SUN'
  }
  
  const Semana = {
    ...DiasLaborales,
    ...DiasFinSemana
  }
  
  console.log(Semana.Lunes); // MON
  console.log(Semana.Sabado); // SAT