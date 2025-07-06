"use client";
import Button from "../../components/Button";

export default function ScheduleButton() {
  return (
    <Button onClick={() => window.dispatchEvent(new Event("openContactModal"))}>
      Schedule appointment
    </Button>
  );
}
