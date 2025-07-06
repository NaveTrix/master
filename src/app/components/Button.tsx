import React from "react";
import clsx from "clsx";

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  as: "a";
  href: string;
  loading?: boolean;
  children: React.ReactNode;
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: "button";
  loading?: boolean;
  children: React.ReactNode;
};

type Props = AnchorProps | ButtonProps;

export default function Button(props: Props) {
  const baseClass =
    "px-8 py-3 rounded-full bg-gradient-to-r from-[#00C9A7] to-[#6D5BFF] text-white font-bold shadow-lg hover:brightness-110 transition text-lg disabled:opacity-60";

  if (props.as === "a") {
    const { href, className = "", children, ...rest } = props;
    return (
      <a
        href={href}
        className={clsx(baseClass, className)}
        {...rest}
      >
        {children}
      </a>
    );
  }
  const { loading = false, children, className = "", ...rest } = props;
  return (
    <button className={clsx(baseClass, className)} disabled={loading || rest.disabled} {...rest}>
      {loading ? "Loading..." : children}
    </button>
  );
}
