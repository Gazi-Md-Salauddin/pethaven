"use client"
import React from "react";
import { Button, Modal } from "@heroui/react";
import {
    FieldError,
    Input,
    Label,
    TextField,
    Select,
    ListBox,
    TextArea,
    Card
} from "@heroui/react";

const RequestCard = ({ pet }) => {
    const { _id, petName, breed, imageUrl, species, fee, gender, description } =
        pet;

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const pet = Object.fromEntries(formData.entries());

        

        const data = await res.json();
        console.log(data);
    };
    return (
        <Modal>
            <Button variant="secondary">Adopt Now</Button>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-[560px]">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-default text-foreground">
                                
                            </Modal.Icon>
                            <Modal.Heading>{petName}</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <h1 className="text-2xl font-bold">
                                    Request to Adopt
                                </h1>

                                <form
                                    onSubmit={onSubmit}
                                    className="p-10 space-y-8"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Pet Name */}
                                        <div className="md:col-span-2">
                                            <TextField
                                                name="petName"
                                                defaultValue={petName}
                                                isRequired
                                            >
                                                <Label>Pet Name</Label>
                                                <Input
                                                    placeholder="Gloster Canary"
                                                    className="rounded-2xl"
                                                />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Species - Updated Select Component */}
                                        <div>
                                            <Select
                                                name="species"
                                                defaultValue={species}
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
                                                        <ListBox.Item
                                                            id="Bird"
                                                            textValue="Bird"
                                                        >
                                                            Bird
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                        <ListBox.Item
                                                            id="Cat"
                                                            textValue="Cat"
                                                        >
                                                            Cat
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                        <ListBox.Item
                                                            id="Dog"
                                                            textValue="Dog"
                                                        >
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
                                                defaultValue={gender}
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
                                                        <ListBox.Item
                                                            id="Male"
                                                            textValue="Male"
                                                        >
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
                                        <TextField
                                            name="fee"
                                            type="number"
                                            defaultValue={fee}
                                            isRequired
                                        >
                                            <Label>Adoption Fee</Label>
                                            <Input
                                                type="number"
                                                placeholder="1299"
                                                className="rounded-2xl"
                                            />
                                            <FieldError />
                                        </TextField>
                                        {/* Breed */}
                                        <TextField
                                            name="breed"
                                            defaultValue={breed}
                                            type="text"
                                            isRequired
                                        >
                                            <Label>Breed</Label>
                                            <Input
                                                type="text"
                                                placeholder="Persian"
                                                className="rounded-2xl"
                                            />
                                            <FieldError />
                                        </TextField>

                                        {/* Image URL - Removed preview */}
                                        <div className="md:col-span-2">
                                            <TextField
                                                name="imageUrl"
                                                defaultValue={imageUrl}
                                                isRequired
                                            >
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
                                            <TextField
                                                name="description"
                                                defaultValue={description}
                                                isRequired
                                            >
                                                <Label>Description</Label>
                                                <TextArea
                                                    placeholder="Write a description"
                                                    className="rounded-3xl"
                                                />
                                                <FieldError />
                                            </TextField>
                                        </div>
                                    </div>

                                    <Button type="submit" className="w-full">
                                        Save
                                    </Button>
                                </form>
                            </div>
                        </Modal.Body>
                        <Modal.Footer></Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default RequestCard;
