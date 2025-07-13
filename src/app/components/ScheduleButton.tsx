"use client";
import Button from "./Button";
import { openContactModal } from "./utils";

export default function ScheduleButton() {
  return (
    <Button onClick={openContactModal}>
      Schedule appointment
    </Button>
  );
}
