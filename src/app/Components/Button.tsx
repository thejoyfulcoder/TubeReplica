
import { cva } from 'class-variance-authority'
import type {VariantProps} from 'class-variance-authority'
import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
export const buttonStyles = cva(["transition-colors"],{
   variants:{
       intent: { 
           default: [
             "text-secondary-text",
             "bg-secondary-dark",
             "focus:bg-secondary-onfoucs",
             "focus:text-secondary-dark-hover",
             "hover:bg-secondary-hover",
             "flex justify-center items-center"
           ],
           ghost:[
             "hover:bg-secondary-dark",
             "flex justify-center items-center",
             'text-white',
           ],
           focused:[
            "text-secondary-dark-hover",
            "bg-secondary-onfoucs",
            "hover:bg-white",
            "font-medium"
           ]
       },
       size:{
          default:[
             "rounded",
             "p-2",
             "h-9"
          ],
          icon:[
            "rounded-full",
            'p-1',
            "h-9",
            "w-9"
          ]
       }
   }
}
   
 );

 export type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;

export function Button({intent,size,className, ...props}: ButtonProps) {     //here ...props is the rest operator which takes in all the remaining props
  return (
     <button {...props} className={twMerge(buttonStyles({intent,size,className}))}>{props.children}</button>
  )
}

