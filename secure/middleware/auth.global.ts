export default defineNuxtRouteMiddleware((to) => {
    if (import.meta.server) return
    const token = localStorage.getItem('token');

    if (!token && to.path !== '/login') {
        return navigateTo('/login');
    }

    if(token && to.path === '/login') {
        return navigateTo('/');
    }


    // tant pis pour le token expiré
});