import { textareaStyle } from "./Textarea.css"

/** 기본적인 Textarea 컴포넌트입니다. */
export const Textarea = ({ className, ...rest}: React.HTMLAttributes<HTMLTextAreaElement>) => {
  return <textarea className={`${textareaStyle} ${className}`} {...rest} />
}