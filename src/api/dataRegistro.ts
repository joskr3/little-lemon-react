const dataRegistro = [{
  nombreCampo: 'firstname',
  placeholder: 'pedro pedro pedro',
  opcionesRequeridas: {
    required: true,
    max: 32,
    min: 24
  }
},
{
  nombreCampo: 'lastname',
  placeholder: 'ramirez',
  opcionesRequeridas: {
    required: true,
    max: 32,
    min: 24,
    maxLength: 48
  }
},
{
  nombreCampo: 'username',
  placeholder: 'ej.hyttty1234',
  opcionesRequeridas: {
    required: true,
    max: 32,
    min: 5
  }
},
{
  nombreCampo: 'phone',
  placeholder: 'ej.+5198754323414',
  tipo: 'tel',
  opcionesRequeridas: {
    required: true,
    max: 12
  }
},
{
  nombreCampo: 'email',
  placeholder: 'ej.mail@mail.com',
  tipo: 'email',
  opcionesRequeridas: {
    required: true,
    max: 32,
    min: 5
  }
},
{
  nombreCampo: 'password',
  tipo: 'password',
  opcionesRequeridas: {
    required: true,
    max: 32,
    min: 8,
    maxLength: 48
  }
},
{
  nombreCampo: 'repassword',
  tipo: 'password',
  opcionesRequeridas: {
    required: true,
    max: 32,
    min: 8,
    maxLength: 48
  }
}
]


export default dataRegistro
