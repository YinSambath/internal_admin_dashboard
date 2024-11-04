export default defineNuxtRouteMiddleware((to) => {
    const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
    const token = useCookie('token'); // get token from cookies
    const localePath = useLocalePath();
    if (token.value) {
      // check if value exists
      authenticated.value = true; // update the state to authenticated
    }
  
    // if token exists and url is /login redirect to homepage
    if (token.value && to?.name === localePath({name: 'auth-login'})) {
      return navigateTo(localePath('/'));
    }
  
    // if token doesn't exist redirect to log in
    if (!token.value && to?.name !== localePath({name: 'auth-login'})) { 
      return navigateTo('/authentication/sign-in/basic');
    }
  });
  