"use client";
import React from "react";
//import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";

const DeleteAlert = ({ pet }) => {
    const { _id, petName } = pet;
    
    const handleDelete = async() => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pet/${_id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(pet)
        });
        const data = await res.json()
        
    }

    return (
        <AlertDialog>
            <Button className={"text-red-500 rounded-xl"} variant="outline">
                Delete
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>
                                Delete pet permanently?
                            </AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete{" "}
                                <strong>{petName}</strong> and all of
                                its data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button
                                onClick={handleDelete}
                                slot="close"
                                variant="danger"
                            >
                                Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
  ) 
}
export default DeleteAlert