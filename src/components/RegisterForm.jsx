import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema } from "@/validations/schema"


function RegisterForm() {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(registerSchema),
    mode: 'onSubmit',
    defaultValues: {
      firstName: '', lastName: '', identity: '', password: '', confirmPassword: ''
    }
  })
  const { errors } = formState

  const onSubmit = async (data) => {
    try {
      alert(JSON.stringify(data, null, 2))
    } catch (err) {
      // alert(JSON.stringify(err, null, 2))
      console.log(errors)
    }
  }
  return (
    <>
      <div className="text-3xl text-center opacity-70">Create a new account</div>
      <div className="divider opacity-60"></div>
      <form onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-5 p-4 pt-3'
      >
        <div className="flex gap-2">
          <input type="text" className="input w-full"
            placeholder='First name'
            {...register('firstName')}
          />
          <input type="text" className="input w-full"
            placeholder='Last name'
            {...register('lastName')}
          />
        </div>
        <input type="text" className="input w-full"
          placeholder='Email or Phone number'
          {...register('identity')}
        />
        <input type="password" className="input w-full"
          placeholder='New password'
          {...register('password')}
        />
        <input type="password" className="input w-full"
          placeholder='Confirm password'
          {...register('confirmPassword')}
        />
        <button className="btn btn-secondary text-xl">Sign up</button>
      </form>

      <div className="border">
        <pre className="text-error text-xs">
          {JSON.stringify(errors, (k, v) => k === 'ref' ? undefined : v, 2)}</pre>
      </div>

    </>
  )
}
export default RegisterForm