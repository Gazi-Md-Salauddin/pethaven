"use client";
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { authClient } from '@/lib/auth-client'
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link'
import toast from "react-hot-toast";

const LoginPage = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signIn.email({
            email,
            password
        });
        if (error) {
            toast.error(error.message);
        }
        if (data) {
            toast.success("Successfully Login");
            router.push("/");
        }
    };
    
    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google"
        });
    };
    
    return (
        <div className="mb-54">
            <Form
                className="flex w-xs mx-auto flex-col gap-4 mt-10 p-4 border border-gray-200 shadow"
                onSubmit={onSubmit}
            >
                <h2 className="text-2xl font-bold">Login</h2>
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={value => {
                        if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                value
                            )
                        ) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="pethaven@example.com"/>
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    minLength={6}
                    name="password"
                    type="password"
                    validate={value => {
                        if (value.length < 6) {
                            return "Password must be at least 6 characters";
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
                    <Description>
                        Must be at least 6 characters with 1 uppercase and 1
                        number
                    </Description>
                    <FieldError />
                </TextField>
                <div className="flex gap-2">
                    <Button type="submit">Login</Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
                <p className="text-center my-6">OR</p>
            <button
               onClick={handleGoogleSignIn}
                className="btn outline flex justify-center items-center gap-3 mx-12 mb-8 rounded-xl"
                type="button"
            >
                <FcGoogle/>
                Login with Google
            </button>
            <p className="flex justify-center items-center gap-2">Create New Account<Link href={"/register"} className="text-blue-500">Register</Link></p>
            </Form>
        </div>
    );
};

export default LoginPage;
