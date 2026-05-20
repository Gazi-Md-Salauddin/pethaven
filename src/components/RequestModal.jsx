"use client";
import {Rocket} from "@gravity-ui/icons";
import {Button, Modal} from "@heroui/react";
import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Card } from "@heroui/react";

const RequestModal = ({pet}) => {
  const { _id, petName, species, location } =
        pet;
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