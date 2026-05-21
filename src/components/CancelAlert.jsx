"use client"
import React from 'react'
import { AlertDialog, Button } from "@heroui/react";

const CancelAlert = ({request}) => {
  const { _id, petName } = request;
  
  const handleDelete = async() => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/request/${_id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(request)
        });
        const data = await res.json()
        console.log(data)
    }
  
  return (
    <AlertDialog>
            <Button className={"bg-red-500 text-white rounded-lg"} variant="outline">
                Cancel
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
                                <strong>Pet Name</strong> and all of
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

export default CancelAlert