import { Ability } from '@casl/ability'
import { initialAbility } from './config'

// Lea la capacidad de LocalStorage
// * maneja la obtención automática de habilidades anteriores si ya se ha registrado en el usuario
//?Puede actualizar esto si almacena las habilidades de usuario en un lugar más seguro
//!Cualquiera puede actualizar LocalStorage, así que tenga cuidado y actualice esto
const userData = JSON.parse(localStorage.getItem('userData'))
const existingAbility = userData ? userData.userData.ability : null 
console.log(existingAbility || initialAbility);
export default new Ability(existingAbility || initialAbility)
