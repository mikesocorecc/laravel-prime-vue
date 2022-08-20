import ability from './ability'

// export const canNavigate = to => to.matched.some(route =>  ability.can(route.meta.action || 'read', route.meta.resource))
// export const canNavigate = to => to.matched.some(route => console.log(ability) || ability.can(route.meta.action || 'read', route.meta.resource))
export const canNavigate = to => to.matched.some(route => console.log(` cargando ruta ${route.name} con permiso ${route.meta.action || 'read'} sobre el recurso ${route.meta.resource} ==  ${ability.can(route.meta.action || 'read', route.meta.resource)}`) || ability.can(route.meta.action || 'read', route.meta.resource))

export const _ = undefined
