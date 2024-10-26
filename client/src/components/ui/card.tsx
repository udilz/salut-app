import React from 'react';
import { twMerge } from 'tailwind-merge';
import { tv, type VariantProps } from 'tailwind-variants';

const style = tv({
  base: 'space-y-2 rounded-lg border border-slate-200 bg-white p-8 shadow-sm shadow-slate-100 hover:shadow-lg transition duration-200 active:bg-slate-100',
});

type TCard = VariantProps<typeof style>;
interface Props extends TCard, React.ComponentPropsWithRef<'div'> {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

export const Card = (props: Props) => {
  return (
    <div {...props} className={twMerge(style({ ...props }), props.className)}>
      {props.startContent}
      {props.children}
    </div>
  );
};
