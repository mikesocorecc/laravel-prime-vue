<template  >
  <div> 
    <section class="relative   bg-light-light h-screen ">
      
      <div class="container mx-auto  h-full grid items-center">
            <div class="card border-info mx-auto w-2/6 xl:w-96  p-5">
                <h1 class="text-2xl mt-4 font-semibold  text-center text-dark-light">Iniciar Sesion </h1>
                <Form @submit="login" :validation-schema="schema"  >

                  <Field v-model="email" name="email"  as="div" class="mt-4"   v-slot="{ field, errors }">
                      <label for="" class="">Correo electronico</label>
                      <input v-model="email" v-bind="field"   type="email" class="focus:outline-none p-2 border-2 w-full rounded-lg mt-1" :class="{ 'border-red-500' : errors.length }" placeholder="Correo electronico">
                      <ErrorMessage name="email" as="small" class="text-red-500" /> 
                  </Field> 
                  <Field v-model="password" name="password" class="mt-4" as="div" v-slot="{ field, errors }" >
                      <label for="">Contraseña</label>
                      <input  v-bind="field" type="password" class="focus:outline-none p-2 border-2 w-full rounded-lg mt-1" :class="{ 'border-red-500' : errors.length }"  placeholder="Contraseña"> 
                      <ErrorMessage name="password" as="small" class="text-red-500" />
                  </Field>

                  <button  class="btn bg-primary rounded text-light shadow-sm shadow-primary-light block w-full p-2 mt-4"  >Ingresar</button>               
                   <button type="reset">Reset</button>
                </Form>  
            </div>
      </div>
    </section>

    
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