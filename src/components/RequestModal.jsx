"use client";
import {Rocket} from "@gravity-ui/icons";
import {Button, Modal} from "@heroui/react";
import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Card } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const RequestModal = async({pet}) => {
  const { data: session } = authClient.useSession();
    const user = session?.user;
    
  const { _id, petName, species, location } =
        pet;
        
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/request`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json' 
        
      },
      body: JSON.stringify(pet)
    })
    const data = await res.json()
    console.log(data)
        
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
              <Modal.Heading>{petName}</Modal.Heading>
              <h2>{user?.email}</h2>
            </Modal.Header>
            <Modal.Body>
              <div className="md:col-span-2">
                <TextField name="departureDate" type="date" isRequired>
                  <Label>Pickup Date</Label>
                  <Input type="date" className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button className="w-full" slot="close">
                Approve
              </Button>
              <Button className="w-full" slot="close">
                Reject
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
export default RequestModal