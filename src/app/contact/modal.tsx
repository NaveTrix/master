"use client";
import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import { contactSchema } from "./yup";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { createPortal } from "react-dom";
import type { ValidationError } from 'yup';

export default function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
	const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
	const [errors, setErrors] = useState<{ [key: string]: string }>({});
	const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
	const [status, setStatus] = useState<null | "success" | "error">(null);
	const [loading, setLoading] = useState(false);
	const [captchaToken, setCaptchaToken] = useState<string | null>(null);
	const [captchaError, setCaptchaError] = useState<string | null>(null);

	const nameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const phoneRef = useRef<HTMLInputElement>(null);
	const messageRef = useRef<HTMLTextAreaElement>(null);
	const hcaptchaRef = useRef<HCaptcha | null>(null);
	const captchaSectionRef = useRef<HTMLDivElement>(null);
	const modalRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (status === "success") {
			const timer = setTimeout(() => setStatus(null), 10000);
			return () => clearTimeout(timer);
		}
	}, [status]);

	useEffect(() => {
		return () => {
			// Remove hCaptcha script if present
			const script = document.querySelector('script[src*="hcaptcha.com/1/api.js"]');
			if (script) script.remove();
			// Remove hCaptcha widget container if present
			const widget = document.querySelector('[id^="hcaptcha-iframe"]');
			if (widget && widget.parentElement) widget.parentElement.remove();
		};
	}, []);

	useEffect(() => {
		if (!open) {
			setForm({ name: "", email: "", phone: "", message: "" });
			setErrors({});
			setTouched({});
			setStatus(null);
			setCaptchaToken(null);
			setCaptchaError(null);
			if (hcaptchaRef.current) hcaptchaRef.current.resetCaptcha();
		}
	}, [open]);

	// Focus trap and Escape key to close
	useEffect(() => {
		if (!open) return;
		const previouslyFocused = document.activeElement as HTMLElement | null;
		const focusableSelectors = [
			'a[href]', 'button:not([disabled])', 'textarea:not([disabled])', 'input:not([disabled])', '[tabindex]:not([tabindex="-1"])'
		];
		const trapFocus = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				e.preventDefault();
				onClose();
				return;
			}
			if (e.key === 'Tab' && modalRef.current) {
				const focusableEls = modalRef.current.querySelectorAll<HTMLElement>(focusableSelectors.join(','));
				const first = focusableEls[0];
				const last = focusableEls[focusableEls.length - 1];
				if (!e.shiftKey && document.activeElement === last) {
					e.preventDefault();
					first.focus();
				} else if (e.shiftKey && document.activeElement === first) {
					e.preventDefault();
					last.focus();
				}
			}
		};
		const focusFirst = () => {
			if (modalRef.current) {
				const focusableEls = modalRef.current.querySelectorAll<HTMLElement>(focusableSelectors.join(','));
				if (focusableEls.length) focusableEls[0].focus();
			}
		};
		setTimeout(focusFirst, 0);
		document.addEventListener('keydown', trapFocus);
		return () => {
			document.removeEventListener('keydown', trapFocus);
			if (previouslyFocused) previouslyFocused.focus();
		};
	}, [open, onClose]);

	if (!open) return null;

	const validate = async () => {
		try {
			await contactSchema.validate(form, { abortEarly: false });
			return {};
		} catch (err) {
			const newErrors: { [key: string]: string } = {};
			if (err instanceof Error && 'inner' in err) {
				(err as ValidationError).inner.forEach((validationError) => {
					if (validationError.path && !newErrors[validationError.path]) {
						newErrors[validationError.path] = validationError.message;
					}
				});
			}
			return newErrors;
		}
	};

	const handleChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		let value = e.target.value;
		if (e.target.name === 'email') {
			value = value.replace(/\s+/g, ''); // Remove all spaces for email
		} else {
			value = value.trimStart(); // Prevent leading spaces for other fields
		}
		setForm({ ...form, [e.target.name]: value });
		// Re-validate the field on change
		const validation = await validate();
		setErrors({ ...errors, [e.target.name]: validation[e.target.name] || "" });
	};

	const handleBlur = async (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		let value = e.target.value;
		if (e.target.name === 'email') {
			value = value.replace(/\s+/g, ''); // Remove all spaces for email
		} else {
			value = value.trim(); // Trim all spaces for other fields
		}
		setForm({ ...form, [e.target.name]: value });
		setTouched({ ...touched, [e.target.name]: true });
		// Optionally validate on blur
		const validation = await validate();
		setErrors({ ...errors, [e.target.name]: validation[e.target.name] || "" });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setCaptchaError(null);
		if (!captchaToken) {
			setCaptchaError("Please complete the CAPTCHA.");
			// Scroll to the captcha section if not filled
			if (captchaSectionRef.current) {
				captchaSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
			}
			return;
		}
		const validation = await validate();
		if (Object.keys(validation).length > 0) {
			setErrors(validation);
			setStatus("error");
			// Focus the first invalid field
			if (validation.name && nameRef.current) nameRef.current.focus();
			else if (validation.email && emailRef.current) emailRef.current.focus();
			else if (validation.phone && phoneRef.current) phoneRef.current.focus();
			else if (validation.message && messageRef.current) messageRef.current.focus();
			return;
		}
		setLoading(true);
		setStatus(null);
		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: form.name,
					email: form.email,
					subject: `Contact Form Submission - ${form.name}`,
					message: `Phone: ${form.phone}\n${form.message}`,
					hcaptchaToken: captchaToken,
				}),
			});
			if (res.ok) {
				setStatus("success");
				setForm({ name: "", email: "", phone: "", message: "" });
				setTouched({ name: false, email: false, phone: false, message: false });
				setCaptchaToken(null);
				if (hcaptchaRef.current) hcaptchaRef.current.resetCaptcha();
				// Scroll modal content to top
				if (modalRef.current) {
					modalRef.current.scrollTop = 0;
				}
			} else {
				const errorData = await res.json().catch(() => ({}));
				console.error("Contact API error:", errorData.error || res.statusText);
				setStatus("error");
				// Scroll modal content to top
				if (modalRef.current) {
					modalRef.current.scrollTop = 0;
				}
			}
		} catch (err) {
			console.error("Contact API network error:", err);
			setStatus("error");
			if (modalRef.current) {
				modalRef.current.scrollTop = 0;
			}
		}
		setLoading(false);
	};

	// Move topRef to the modal content div
	return createPortal(
		<div
			className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/40 px-2 sm:px-0"
			role="dialog"
			aria-modal="true"
			tabIndex={-1}
			onClick={onClose}
		>
			<div
				ref={modalRef}
				className="bg-white rounded-2xl shadow-2xl p-2 sm:p-6 w-full max-w-xl relative animate-fade-in max-h-[100dvh] overflow-y-auto flex flex-col"
				onClick={e => e.stopPropagation()}
				style={{ maxHeight: '100dvh', minHeight: '0', height: 'auto' }}
			>
				<button
					onClick={onClose}
					className="absolute top-3 right-3 z-50 text-gray-400 hover:text-red-500 text-3xl font-bold pointer-events-auto"
					aria-label="Close contact form"
					type="button"
					title="Close"
					style={{ touchAction: 'manipulation', width: 48, height: 48, background: 'none', zIndex: 100, outline: 'none', boxShadow: 'none' }}
				>
					<span aria-hidden="true">&times;</span>
				</button>
				{/* Updated heading and subheading design */}
				<h2 className="text-3xl sm:text-4xl font-extrabold mb-2 text-center text-[#1B1F3B] tracking-tight drop-shadow-lg">
					Let’s Connect
				</h2>
				
				{status === "success" && (
					<div
						className="w-full text-green-600 bg-green-50 border border-green-200 rounded-lg text-center font-medium mb-4 py-2 animate-fade-in"
						aria-live="polite"
					>
						Message sent successfully!
					</div>
				)}
				{status === "error" && Object.keys(errors).length === 0 && (
					<div
						className="md:col-span-2 text-red-600 text-center font-medium mt-2 animate-fade-in"
						aria-live="polite"
					>
						Could not send message. Please try again or email <a href="mailto:info@navetrix.com" className="underline text-[#00C9A7]">info@navetrix.com</a>.
					</div>
				)}
				<form onSubmit={handleSubmit} className="flex flex-col gap-1 sm:gap-4 mt-6 w-full">
					<div className="flex flex-col gap-1 col-span-1">
						<label htmlFor="name" className="font-medium text-gray-700">Full Name</label>
						<input
							type="text"
							name="name"
							id="name"
							value={form.name}
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder="Ada Lovelace"
							className={`rounded-lg border shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00C9A7] transition text-base ${errors.name && (touched.name || status === "error") ? 'border-red-400' : 'border-gray-300'}`}
							autoComplete="off"
							aria-invalid={!!errors.name}
							aria-describedby={errors.name ? "name-error" : undefined}
							ref={nameRef}
							required
						/>
						<span id="name-error" className="min-h-[20px] text-xs text-red-500">
							{(touched.name || status === "error") && errors.name ? errors.name : ''}
						</span>
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
							placeholder="ada@navetrix.dev"
							className={`rounded-lg border shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00C9A7] transition text-base ${errors.email && (touched.email || status === "error") ? 'border-red-400' : 'border-gray-300'}`}
							autoComplete="off"
							aria-invalid={!!errors.email}
							aria-describedby={errors.email ? "email-error" : undefined}
							ref={emailRef}
							required
							inputMode="email"
							pattern="[^\s]+"
							onKeyDown={e => {
								if (e.key === ' ' || e.key === 'Spacebar') {
									e.preventDefault();
								}
							}}
						/>
						<span id="email-error" className="min-h-[20px] text-xs text-red-500">
							{(touched.email || status === "error") && errors.email ? errors.email : ''}
						</span>
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
							aria-invalid={!!errors.phone}
							aria-describedby={errors.phone ? "phone-error" : undefined}
							ref={phoneRef}
							required
						/>
						<span id="phone-error" className="min-h-[20px] text-xs text-red-500">
							{(touched.phone || status === "error") && errors.phone ? errors.phone : ''}
						</span>
					</div>
					<div className="flex flex-col gap-1 md:col-span-2 mb-1">
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
							aria-invalid={!!errors.message}
							aria-describedby={errors.message ? "message-error" : undefined}
							ref={messageRef}
							required
						/>
						<span id="message-error" className="min-h-[20px] text-xs text-red-500">
							{(touched.message || status === "error") && errors.message ? errors.message : ''}
						</span>
					</div>
					<div ref={captchaSectionRef} className="flex flex-col items-center w-full mt-1 min-h-[80px]">
						<HCaptcha
							ref={hcaptchaRef}
							id="hcaptcha-widget-container"
							sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY || ''}
							onVerify={(token: string) => {
								if (typeof token === 'string' && token.length > 0) {
									setCaptchaToken(token);
									setCaptchaError(null);
								} else {
									setCaptchaError("CAPTCHA failed, please try again.");
									setCaptchaToken(null);
								}
							}}
							onExpire={() => {
								setCaptchaToken(null);
								setCaptchaError("CAPTCHA expired, please try again.");
							}}
							onError={() => {
								setCaptchaError("CAPTCHA failed, please try again.");
								setCaptchaToken(null);
							}}
							theme="light"
						/>
						{captchaError && (
							<span className="text-xs text-red-500 mt-1">{captchaError}</span>
						)}
					</div>
					<div className="flex justify-center w-full mt-2 sticky bottom-0 bg-white pt-2 z-10">
						<Button
							type="submit"
							disabled={loading}
							loading={loading}
							className={`w-full${loading ? ' cursor-not-allowed' : ''}`}
						>
							Send Message
						</Button>
					</div>

				</form>
			</div>
		</div>,
		typeof window !== "undefined" ? document.body : ({} as HTMLElement)
	);
}
