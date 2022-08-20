<template  >
 <div class="bg-white dark:bg-gray-900">
        <div class="flex justify-center h-screen">
            <div class="hidden bg-cover lg:block lg:w-2/3" style="background-image: url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)">
                <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                    <div>
                        <h2 class="text-4xl font-bold text-white">Brand</h2>
                        
                        <p class="max-w-xl mt-3 text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae</p>
                    </div>
                </div>
            </div>
            
            <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                <div class="flex-1">
                    <div class="text-center">
                        <h2 class="text-4xl font-bold text-center text-gray-700 dark:text-white">Codigos MK</h2>
                        
                        <p class="mt-3 text-gray-500 dark:text-gray-300">Inicia sesión para acceder a tu cuenta</p>
                    </div>

                    <div class="mt-8">
                        <!-- <form>
                            <div>
                                <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Correo electrónico</label>
                                <input type="email" name="email" id="email" placeholder="example@example.com" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-blue-400 focus:shadow-none focus:outline-none  " />
                            </div> 
                            <div class="mt-6">
                                <div class="flex justify-between mb-2">
                                    <label for="password" class="text-sm text-gray-600 dark:text-gray-200">Contraseña</label>
                                    <a href="#" class="text-sm text-gray-400 focus:text-primary hover:text-primary hover:underline">Se te olvidó tu contraseña?</a>
                                </div> 
                                <input type="password" name="password" id="password" placeholder="Tu contraseña" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-blue-400 focus:shadow-none focus:outline-none  " autocomplete="off" />
                            </div> 
                            <div class="mt-6">
                                <button class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-primary shadow-primary-sm  focus:outline-none  focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Iniciar sesión
                                </button>
                            </div> 
                        </form> -->

                        <Form @submit="login" :validation-schema="schema"  > 
                          <Field v-model="email" name="email"  as="div"     v-slot="{ field, errors }">
                              <label for="" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Correo electronico</label>
                              <input v-model="email" v-bind="field"   type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-blue-400 focus:shadow-none focus:outline-none " :class="{ 'border-red-500' : errors.length }" placeholder="Correo electronico">
                              <ErrorMessage name="email" as="small" class="text-red-500" /> 
                          </Field> 
                          <Field v-model="password" name="password"  as="div" v-slot="{ field, errors }" > 
                               <div class="flex justify-between mb-2">
                                    <label for="password" class="text-sm text-gray-600 dark:text-gray-200">Contraseña</label>
                                    <a href="#" class="text-sm text-gray-400 focus:text-primary hover:text-primary hover:underline">Se te olvidó tu contraseña?</a>
                              </div> 
                              <input  v-bind="field" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-blue-400 focus:shadow-none focus:outline-none " :class="{ 'border-red-500' : errors.length }"  placeholder="Contraseña"> 
                              <ErrorMessage name="password" as="small" class="text-red-500" />
                          </Field>

                          <button  class="btn bg-primary rounded text-light shadow-sm shadow-primary-light block w-full p-2 mt-4"  >Ingresar</button>               
                      
                        </Form>  

                        <p class="mt-6 text-sm text-center text-gray-400">No tengo una cuenta todavía? <a href="#" class="text-primary focus:outline-none focus:underline hover:underline">Crear cuenta</a>.</p>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>
<script> 
 import { Field, Form,ErrorMessage  } from 'vee-validate';
import * as yup  from 'yup';
  export default { 
    components: { Field, Form, ErrorMessage , },
    data() {
      const schema = yup.object({
        email: yup.string().required().email().label('Email'),
        password: yup.string().required().min(8).label('Password'),
      });
      return {
        email: '',
        password: '',
        schema
      }
    },
    computed: { 
    },
    methods: { 
      
    login(values, { resetForm }) { 
    this.$store.dispatch('login', 
          {
            email: this.email,
            password: this.password
          })
          .then((res) =>  {  

            if(res.status){
              this.$router.push({ name: 'dashboard' }) 
            }else{
              alert('credenciales incorrectas');
               
            }
             
          })
          .catch(err => {
            console.log(err);
            this.error = err.response.data.error
          })

       resetForm();
      }
    }
  }
</script>

<style  scoped > 

</style>