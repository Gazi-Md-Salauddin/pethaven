"use client";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { authClient } from '@/lib/auth-client'
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const router = useRouter()
  
  const onSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const image = e.target.image.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signUp.email({
            name,
            email,
            image,
            password
        });
        if (error) {
            alert(error.message);
        }
        if (data) {
            alert("Successfully Register");
            router.push("/login");
        }
    };
  return (
    <Form className="flex w-xs mx-auto flex-col gap-4 border border-gray-200 rounded-xl p-4 my-12" onSubmit={onSubmit}> 
    <h2 className="text-2xl font-bold">Register</h2>
      
      <TextField
        isRequired
        name="name"
        type="text"
      >
        <Label>Name</Label>
        <Input placeholder="Your Name" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="pethaven@example.com" />
        <FieldError />
      </TextField>
      <label className="label">Image URL</label>
            <input
                className="input"
                name="image"
                type="text"
                placeholder="Image URL"
            />
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>
      <div className="flex gap-2">
        <Button type="submit">
          Register
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
      <p className="text-center my-6">OR</p>
            <button
                className="btn outline flex justify-center items-center gap-3 mx-16 rounded-xl"
                type="button"
            >
                <FcGoogle/>
                Login with Google
            </button>
    </Form>
  )
}

export default RegisterPage