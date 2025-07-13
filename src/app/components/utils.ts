// Utility function to open the contact modal from anywhere
export function openContactModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("openContactModal"));
  }
}
