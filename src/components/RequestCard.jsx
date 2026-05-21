"use client";
import React, { useState } from "react";
import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import {
    FieldError,
    Input,
    Label,
    TextField,
    Select,
    ListBox,
    TextArea,
    DateField,
    Card
} from "@heroui/react";

const RequestCard = ({ pet }) => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const [departureDate, setDepartureDate] = useState(null);
    const { fee, _id, petName, imageUrl, location, description } = pet;

    const handleRequest = async () => {
        const requestData = {
            userId: user?.id,
            userName: user?.name,
            userEmail: user?.email,
            petId: _id,
            petName,
            fee,
            imageUrl,
            location,
            description,
            departureDate: new Date(departureDate),
            status: "Pending"
        };
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/request`,
            {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(requestData)
            }
        );
        const data = await res.json();
        console.log(data);
    };
    return (
        <div className="shadow-sm p-2">
            <h1 className="text-2xl font-bold my-5">Request to Adopt</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Pet Name */}
                <div className="md:col-span-2">
                    <TextField name="petName" defaultValue={petName} isRequired>
                        <Label>Pet Name</Label>
                        <Input
                            placeholder="Gloster Canary"
                            readOnly
                            className="rounded-2xl"
                        />
                        <FieldError />
                    </TextField>
                    <TextField
                        name="userName"
                        defaultValue={user?.name}
                        isRequired
                    >
                        <Label>User Name</Label>
                        <Input
                            value={user?.name}
                            className="rounded-2xl"
                            readOnly
                        />
                        <FieldError />
                    </TextField>
                    <TextField
                        name="userEmail"
                        defaultValue={user?.email}
                        isRequired
                    >
                        <Label>User Email</Label>
                        <Input
                            value={user?.email}
                            className="rounded-2xl"
                            readOnly
                        />
                        <FieldError />
                    </TextField>
                </div>

                {/* Fee */}
                <TextField
                    name="fee"
                    type="number"
                    defaultValue={fee}
                    isRequired
                >
                    <Label>Adoption Fee</Label>
                    <Input
                        type="number"
                        readOnly
                        placeholder="1299"
                        className="rounded-2xl"
                    />
                    <FieldError />
                </TextField>

                {/*DepartureDate*/}
                <TextField name="departureDate" type="date" isRequired>
                    <Label>Pickup Date</Label>
                    <Input
                        type="date"
                        className="rounded-2xl"
                        value={departureDate}
                        
                    />
                    <FieldError />
                </TextField>

                {/* Description */}
                <div className="md:col-span-2">
                    <TextField name="description" isRequired>
                        <Label>Description</Label>
                        <TextArea
                            placeholder="Write your message"
                            className="rounded-3xl"
                        />
                        <FieldError />
                    </TextField>
                </div>
                <Button
                    onClick={handleRequest}
                    type="submit"
                    className="w-full"
                >
                    Adopt
                </Button>
            </div>
        </div>
    );
};

export default RequestCard;
