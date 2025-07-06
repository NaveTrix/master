"use client";
import { useState } from "react";
import Button from "../components/Button";

export default function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
	const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
	const [errors, setErrors] = useState<{ [key: string]: string }>({});
	const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
	const [status, setStatus] = useState<null | "success" | "error">(null);
	const [loading, setLoading] = useState(false);

	if (!open) return null;

	const validate = () => {
		const newErrors: { [key: string]: string } = {};
		if (!form.name.trim()) newErrors.name = "Full Name is required.";
		else if (form.name.trim().length < 5) newErrors.name = "Full Name must be at least 5 characters.";
		if (!form.email.trim()) newErrors.email = "Email is required.";
		else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = "Invalid email.";
		if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
		else if (!/^\+?[0-9]{7,15}$/.test(form.phone)) newErrors.phone = "Invalid phone number.";
		if (!form.message.trim()) newErrors.message = "Message is required.";
		else if (form.message.length > 500) newErrors.message = "Message must be at most 500 characters.";
		return newErrors;
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
		// Re-validate the field on change
		const validation = validate();
		setErrors({ ...errors, [e.target.name]: validation[e.target.name] || "" });
	};

	const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setTouched({ ...touched, [e.target.name]: true });
		// Optionally validate on blur
		const validation = validate();
		setErrors({ ...errors, [e.target.name]: validation[e.target.name] || "" });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const validation = validate();
		if (Object.keys(validation).length > 0) {
			setErrors(validation);
			setStatus("error");
			return;
		}
		setLoading(true);
		setStatus(null);
		setTimeout(() => {
			setStatus("success");
			setForm({ name: "", email: "", phone: "", message: "" });
			setLoading(false);
		}, 1200);
	};

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
			onClick={onClose}
		>
			<div
				className="bg-white rounded-2xl shadow-2xl p-6 sm:p-10 w-full max-w-xl relative animate-fade-in"
				onClick={e => e.stopPropagation()}
			>
				<button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-3xl font-bold">&times;</button>
				<h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center text-[#00C9A7]">Get in Touch</h2>
				<div className="text-[#00C9A7] text-center mb-4 text-base"><span className="font-bold">Start your journey with us today!</span></div>
				<form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
					<div className="flex flex-col gap-1 col-span-1">
						<label htmlFor="name" className="font-medium text-gray-700">Full Name</label>
						<input
							type="text"
							name="name"
							id="name"
							value={form.name}
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder="Priya Sharma"
							className={`rounded-lg border shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00C9A7] transition text-base ${errors.name && (touched.name || status === "error") ? 'border-red-400' : 'border-gray-300'}`}
							autoComplete="off"
						/>
						<span className="min-h-[20px] text-xs text-red-500">{(touched.name || status === "error") && errors.name ? errors.name : ''}</span>
					</div>
					<div className="flex flex-col gap-1 col-span-1">
						<label htmlFor="email" className="font-medium text-gray-700">Email Address</label>
						<input
							type="email"
							name="email"
							id="email"
							value={form.email}
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder="priya@email.com"
							className={`rounded-lg border shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00C9A7] transition text-base ${errors.email && (touched.email || status === "error") ? 'border-red-400' : 'border-gray-300'}`}
							autoComplete="off"
						/>
						<span className="min-h-[20px] text-xs text-red-500">{(touched.email || status === "error") && errors.email ? errors.email : ''}</span>
					</div>
					<div className="flex flex-col gap-1 md:col-span-2">
						<label htmlFor="phone" className="font-medium text-gray-700">Phone Number</label>
						<input
							type="tel"
							name="phone"
							id="phone"
							value={form.phone}
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder="+91 9876543210"
							className={`rounded-lg border shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00C9A7] transition text-base ${errors.phone && (touched.phone || status === "error") ? 'border-red-400' : 'border-gray-300'}`}
							autoComplete="off"
						/>
						<span className="min-h-[20px] text-xs text-red-500">{(touched.phone || status === "error") && errors.phone ? errors.phone : ''}</span>
					</div>
					<div className="flex flex-col gap-1 md:col-span-2">
						<label htmlFor="message" className="font-medium text-gray-700">Message</label>
						<textarea
							name="message"
							id="message"
							value={form.message}
							onChange={handleChange}
							onBlur={handleBlur}
							rows={4}
							placeholder="I am interested in your internship program. Please share more details."
							className={`rounded-lg border shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00C9A7] transition text-base resize-none ${errors.message && (touched.message || status === "error") ? 'border-red-400' : 'border-gray-300'}`}
						/>
						<span className="min-h-[20px] text-xs text-red-500">{(touched.message || status === "error") && errors.message ? errors.message : ''}</span>
					</div>
					<div className="md:col-span-2 flex justify-center mt-2">
						<Button
							type="submit"
							disabled={loading}
							loading={loading}
							className="w-full sm:w-auto"
						>
							Send Message
						</Button>
					</div>
					{status === "success" && (
						<div className="md:col-span-2 text-[#00C9A7] text-center font-medium mt-2 animate-fade-in">Message sent successfully!</div>
					)}
					{status === "error" && (
						<div className="md:col-span-2 text-red-600 text-center font-medium mt-2 animate-fade-in">Please fill in all fields correctly.</div>
					)}
				</form>
			</div>
		</div>
	);
}
