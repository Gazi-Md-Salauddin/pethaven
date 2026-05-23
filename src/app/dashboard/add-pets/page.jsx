"use client";
import React from "react";
import {
    FieldError,
    Input,
    Label,
    TextField,
    Select,
    ListBox,
    TextArea,
    Button,
    Card
} from "@heroui/react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const AddPetPage = () => {
    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const pet = Object.fromEntries(formData.entries());

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pet`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(pet)
        });
        const data = await res.json();
    };
    return (
        <div>
            <h1 className="text-2xl font-bold">Add Pets</h1>

            <form onSubmit={onSubmit} className="p-4 md:p-10 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Pet Name */}
                    <div className="md:col-span-2">
                        <TextField name="petName" isRequired>
                            <Label>Pet Name</Label>
                            <Input
                                placeholder="Gloster Canary"
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>
                    </div>

                    {/* Location */}
                    <TextField name="location" isRequired>
                        <Label>Location</Label>
                        <Input
                            placeholder="Bangladesh"
                            className="rounded-2xl"
                        />
                        <FieldError />
                    </TextField>

                    {/* Species - Updated Select Component */}
                    <div>
                        <Select
                            name="species"
                            isRequired
                            className="w-full"
                            placeholder="Select species"
                        >
                            <Label>Species</Label>
                            <Select.Trigger className="rounded-2xl">
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="Bird" textValue="Bird">
                                        Bird
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Cat" textValue="Cat">
                                        Cat
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Dog" textValue="Dog">
                                        Dog
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>
                    {/* Gender - Updated Select Component */}
                    <div>
                        <Select
                            name="gender"
                            isRequired
                            className="w-full"
                            placeholder="Select Gender"
                        >
                            <Label>Gender</Label>
                            <Select.Trigger className="rounded-2xl">
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="Male" textValue="Male">
                                        Male
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item
                                        id="Female"
                                        textValue="Female"
                                    >
                                        Female
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>

                    {/* Price */}
                    <TextField name="fee" type="number" isRequired>
                        <Label>Adoption Fee</Label>
                        <Input
                            type="number"
                            placeholder="1299"
                            className="rounded-2xl"
                        />
                        <FieldError />
                    </TextField>
                    {/* Breed */}
                    <TextField name="breed" type="text" isRequired>
                        <Label>Breed</Label>
                        <Input
                            type="text"
                            placeholder="Persian"
                            className="rounded-2xl"
                        />
                        <FieldError />
                    </TextField>

                    {/* Age */}
                    <TextField name="age" isRequired>
                        <Label>Age</Label>
                        <Input placeholder="2 years" className="rounded-2xl" />
                        <FieldError />
                    </TextField>
                    {/* Health Status */}
                    <TextField name="healthStatus" isRequired>
                        <Label>Health Status</Label>
                        <Input placeholder="Excilent" className="rounded-2xl" />
                        <FieldError />
                    </TextField>
                    {/* Vaccination Status */}
                    <TextField name="vaccinationStatus" isRequired>
                        <Label>Vaccination Status</Label>
                        <Input
                            placeholder="Vaccinated"
                            className="rounded-2xl"
                        />
                        <FieldError />
                    </TextField>

                    {/* Image URL - Removed preview */}
                    <div className="md:col-span-2">
                        <TextField name="imageUrl" isRequired>
                            <Label>Image URL</Label>
                            <Input
                                type="url"
                                placeholder="https://example.com/cat.jpg"
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                        <TextField name="description" isRequired>
                            <Label>Description</Label>
                            <TextArea
                                placeholder="Write a description"
                                className="rounded-3xl"
                            />
                            <FieldError />
                        </TextField>
                    </div>
                </div>

                {/* Buttons */}

                <Button
                    type="submit"
                    variant="outline"
                    className="rounded-none w-full bg-[#F59E0B] text-white"
                >
                    Add Pet
                </Button>
            </form>
        </div>
    );
};

export default AddPetPage;
