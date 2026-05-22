"use client";
import { Rocket } from "@gravity-ui/icons";
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
import { authClient } from "@/lib/auth-client";

const RequestModal = ({ pet, pickupDate }) => {
    console.log(pet);
    const { data: session } = authClient.useSession();
    const user = session?.user;

    // const { _id } =
    //       request;
    // const formattedDate = departureDate ? new Date(departureDate);
    //       const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/request`, {
    //     method: 'POST',
    //     headers: {
    //       'content-type': 'application/json'

    //     },
    //     body: JSON.stringify(pet)
    //   })
    //   const data = await res.json()
    //   console.log(data)
    
    const formattedPickupDate = pickupDate 
        ? new Date(pickupDate).toISOString().split('T')[0] 
        : "";
    
    const handleStatusUpdate = async (newStatus) => {
        console.log(pet._id);
        if (!pet?._id) return alert("Request ID missing!");
        await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/request/${pet?._id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ status: newStatus })
            }
        );

        window.location.reload();
    };

    return (
        <Modal>
            <Button variant="secondary">Requests</Button>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-[360px]">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-default text-foreground">
                                <Rocket className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>petName</Modal.Heading>
                            <h2>{user?.name}</h2>
                            <h2>{user?.email}</h2>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="md:col-span-2">
                                <TextField
                                    name="departureDate"
                                    type="date"
                                    defaultValue={formattedPickupDate}
                                    isRequired
                                >
                                    <Label>Pickup Date</Label>
                                    <Input
                                        type="date"
                                        className="rounded-2xl"
                                        
                                    />
                                    <FieldError />
                                </TextField>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                onClick={() => handleStatusUpdate("Approved")}
                                className="w-full bg-green-500"
                                
                            >
                                Approve
                            </Button>
                            <Button
                                onClick={() => handleStatusUpdate("Rejected")}
                                className="w-full bg-red-500"
                                
                            >
                                Reject
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};
export default RequestModal;
